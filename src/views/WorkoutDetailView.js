
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { WORKOUTS_TABLE_NAME } from '../lib/constants';
import { updateExercisesList } from '../lib/exerciseHelpers';

const workout = ref({});
const errorMsg = ref(null);
const showDeleteConfirm = ref(false);

const submitButtonLoading = ref(false);
const successMsg = ref(null);
const isEdit = ref(false);

const pageLoading = ref(true);
// backup the current list of exercises
const backupExercises = ref([]);


// Get workout data
const getData = async (currentId) => {
  try {
    const { data: workouts, error } = await supabase.from(WORKOUTS_TABLE_NAME).select('*, exercises:Exercises(*)').eq('id', currentId);
    if(error) throw error;
    workout.value = workouts[0];
    backupExercises.value = JSON.parse(JSON.stringify(workouts[0].exercises));
    pageLoading.value = false;
  }
  catch(error) {
    errorMsg.value = error.messsage;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
}

// Delete workout
const deleteWorkout = async (currentId) => {

  try {
    const { error } = await supabase.from(WORKOUTS_TABLE_NAME).delete().eq('id', currentId);
    if(error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);

      return;
    }

    showDeleteConfirm.value = false;

    return true;
  }
  catch(error) {
    errorMsg.value = error.messsage;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);

    return false;
  }
}

// Add exercise
const addExercise = () => {
  if(workout.value.type === 'strength') {
    workout.value.exercises.push({
      name: '',
      sets: '',
      reps: '',
      weight: '',
    });
    return;
  }

  workout.value.exercises.push({
    name: '',
    cardio_type: '',
    distance: '',
    duration: '',
    pace: '',
  });
}

// Delete exercise
const deleteExercise = (id) => {
  if(workout.value.exercises.length > 1) {
    workout.value.exercises = workout.value.exercises.filter(exercise => exercise.id !== id);
    return;
  }

  errorMsg.value = 'Cannot remove, need to at least have one exercise';
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}

// Update Workout
const updateWorkout = async (currentId) => {
  submitButtonLoading.value = true;

  try {
    const { error } = await supabase.from(WORKOUTS_TABLE_NAME).update({
      name: workout.value.name,
    }).eq('id', currentId);
    if(error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
      submitButtonLoading.value = false;
      return false;
    }

    isEdit.value = false;
    submitButtonLoading.value = false;
    successMsg.value = 'Workout updated!';
    setTimeout(() => {
      successMsg.value = null;
    }, 5000);

    return true;
  }
  catch(error) {
    errorMsg.value = error.messsage;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);

    return false;
  }
}

// Update Exercises
const updateExercises = async (currentId) => {
  submitButtonLoading.value = true;
  try {
    const exercises = workout.value.exercises.map(exercise => {
      return {
        workout_id: currentId,
        name: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight,
        cardio_type: exercise.cardio_type,
        distance: exercise.distance,
        duration: exercise.duration,
        pace: exercise.pace,
      }
    });

    // console.log('backupExercises.value before', JSON.stringify(backupExercises.value, null, 2));
    backupExercises.value = await updateExercisesList(backupExercises.value, exercises);
    workout.value.exercises = [...backupExercises.value];

    isEdit.value = false;
    submitButtonLoading.value = false;
    successMsg.value = 'Workout updated!';
    setTimeout(() => {
      successMsg.value = null;
    }, 5000);

    return true;
  }
  catch(error) {
    errorMsg.value = error.messsage;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);

    return false;
  }
}

export {
  workout,
  errorMsg,
  showDeleteConfirm,
  submitButtonLoading,
  successMsg,
  isEdit,
  pageLoading,
  backupExercises,

  getData,
  deleteWorkout,
  addExercise,
  deleteExercise,
  updateWorkout,
  updateExercises,
};
