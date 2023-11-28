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

  console.log('createExercisesList: exercises', JSON.stringify(exercises, null, 2));

  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .insert(exercises).select();

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

  delete exercise.id;

  console.log('updateExercise', id, JSON.stringify(exercise, null, 2));
  const { data, error } = await supabase
    .from(EXERCISES_TABLE_NAME)
    .update(exercise)
    .eq('id', id).select();

  if (error) {
    throw error;
  }

  return data[0];
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
      newExercises[i] = await updateExercise(oldExercises[i].id, newExercises[i]);
    }
  } else {
    // create the extra new exercises
    let exercisesToCreate = [];
    const count = newExercises.length - oldExercises.length;
    if (count > 0)
      exercisesToCreate = newExercises.splice(0, count);

    if (exercisesToCreate.length > 0)
      exercisesToCreate = await createExercisesList(exercisesToCreate);

    // update the existing exercises
    for (let i = 0; i < oldExercises.length; i++)
      newExercises[i] =await updateExercise(oldExercises[i].id, newExercises[i]);

    newExercises = newExercises.concat(exercisesToCreate);
  }

  return newExercises;
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
