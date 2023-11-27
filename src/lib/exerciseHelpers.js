import { supabase } from './supabaseClient';
import { EXERCISES_TABLE_NAME } from './constants';

export const getExercise = async (id) => {
  if (!id) {
    throw new Error('Please provide an id');
  }

  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const getExercises = async () => {
  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .select('*');

  if (error) {
    throw error;
  }

  return data;
};

export const createExercise = async (exercise) => {
  if (!exercise) {
    throw new Error('Please provide an exercise');
  }

  console.log('createExercise', JSON.stringify(exercise, null, 2));
  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .insert(exercise);

  if (error) {
    throw error;
  }

  return data;
};

export const createExercisesList = async (exercises) => {
  if (!exercises) {
    throw new Error('Please provide an exercises list');
  }

  console.log('createExercisesList', JSON.stringify(exercises, null, 2));

  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .insert(exercises);

  if (error) {
    throw error;
  }

  return data;
};

export const updateExercise = async (id, exercise) => {
  if (!id) {
    throw new Error('Please provide an id');
  }

  if (!exercise) {
    throw new Error('Please provide an exercise');
  }

  console.log('updateExercise', JSON.stringify(exercise, null, 2));
  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .update(exercise)
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data;
};

export const updateExercisesList = async (oldExercises, newExercises) => {

  if (!newExercises || newExercises.length === 0) {
    throw new Error('Please provide an newExercises list');
  }

  oldExercises = oldExercises || [];
  if (!oldExercises || oldExercises.length === 0) {
    return await createExercisesList(newExercises);
  }

  if (oldExercises.length >= newExercises.length) {
    // delete the extra old exercises
    const idsToDelete = [];
    for (let i = newExercises.length; i < oldExercises.length; i++) {
      if (oldExercises[i].id)
        idsToDelete.push(oldExercises[i].id);
    }
    if (idsToDelete.length > 0) {
      await deleteExercisesList(idsToDelete);
    }

    // update the existing exercises
    for (let i = 0; i < newExercises.length; i++) {
      await updateExercise(oldExercises[i].id, newExercises[i]);
    }
  } else {
    // create the extra new exercises
    const exercisesToCreate = [];
    for (let i = oldExercises.length; i < newExercises.length; i++) {
      exercisesToCreate.push(newExercises[i]);
    }
    if (exercisesToCreate.length > 0) {
      await createExercisesList(exercisesToCreate);
    }

    // update the existing exercises
    for (let i = 0; i < oldExercises.length; i++) {
      await updateExercise(oldExercises[i].id, newExercises[i]);
    }
  }
};

export const deleteExercise = async (id) => {
  if (!id) {
    throw new Error('Please provide an id');
  }

  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }

  return data;
};

export const deleteExercisesList = async (ids) => {
  if (!ids) {
    throw new Error('Please provide an ids list');
  }

  console.log('deleteExercisesList', JSON.stringify(ids, null, 2));
  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .delete()
    .in('id', ids);

  if (error) {
    throw error;
  }

  return data;
};
