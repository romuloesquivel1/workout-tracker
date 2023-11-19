<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10" id="main">

    <BaseAlert v-if="errorMsg" messageType="danger" class="mb-10">
      {{ errorMsg }}
    </BaseAlert>
    <BaseAlert v-if="successMsg" messageType="success" class="mb-10">
      {{ successMsg }}
    </BaseAlert>

    <template v-if="pageLoading">
      <div class="h-[264px] bg-gray-100 animate-pulse rounded-md mb-10"></div>
      <div class="h-[114px] bg-gray-100 animate-pulse rounded-md"></div>
    </template>

    <template v-else>
      <div class="flex flex-col items-center p-8 bg-c-light-green bg-opacity-10 rounded-md relative">
        <div v-if="user" class="flex absolute left-8 top-4 gap-x-2">
          <div class="h-8 w-8 flex justify-center items-center rounded-full bg-c-green text-white cursor-pointer"
            @click="editMode"
          >
            <IconPen width="16" height="16"></IconPen>
          </div>
          <div class="h-8 w-8 flex justify-center items-center rounded-full bg-c-green text-white cursor-pointer"
            @click="confirmDelete"
          >
            <IconBin width="16" height="16"></IconBin>
          </div>
        </div>

        <IconRun v-if="workout.type === 'cardio'" class="w-24 h-24 text-c-green"></IconRun>
        <IconDumbbell v-else class="w-24 h-24 text-c-green"></IconDumbbell>

        <span class="mt-6 py-1 px-3 text-xs text-white bg-c-green rounded-lg">
          {{ workout.type }}
        </span>

        <div class="w-full mt-6">
          <input v-if="edit" type="text" class="p-2 w-full text-gray-500 focus:outline-none" v-model="workout.name">
          <h1 v-else class="text-center text-2xl text-gray-800 m-0">{{ workout.name }}</h1>
        </div>
      </div>

      <div class="mt-10 p-8 flex flex-col items-start bg-c-light-green bg-opacity-10 rounded-md">
        <div v-if="!workout.exercises.length && !edit">
          <p class="mb-4">No exercises added yet.</p>
          <BaseButton type="button" @click="editMode">Add Exercise</BaseButton>
        </div>

        <div v-if="workout.type === 'strength'" class="flex flex-col gap-y-4 w-full">
          <div class="flex flex-col gap-x-6 gap-y-2 sm:flex-row relative pr-8" v-for="(item, index) in workout.exercises" :key="index">
            <div class="flex flex-2 flex-col md:w-1/3">
              <label class="mb-1 text-sm text-gray-800">Exercise</label>
              <input v-if="edit" type="text" Class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.name">
              <p class="text-gray-800" v-else>{{ item.name }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label class="mb-1 text-sm text-gray-800">Sets</label>
              <input v-if="edit" type="text" Class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.sets">
              <p class="text-gray-800" v-else>{{ item.sets }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label class="mb-1 text-sm text-gray-800">Reps</label>
              <input v-if="edit" type="text" Class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.reps">
              <p class="text-gray-800" v-else>{{ item.reps }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label class="mb-1 text-sm text-gray-800">Weight (Kg)</label>
              <input v-if="edit" type="text" Class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.weight">
              <p class="text-gray-800" v-else>{{ item.weight }}</p>
            </div>
            <IconBin v-if="edit" @click="deleteExercise(item.id)" class="text-c-green absolute right-0 bottom-3 cursor-pointer" width="20" height="20"></IconBin>
          </div>
          <div v-if="edit" @click="addExercise" class="text-c-green font-semibold cursor-pointer flex gap-1 items-center self-start">
            <IconAddCircle width="20" height="20"></IconAddCircle>
            Add Exercise
          </div>
        </div>

        <div v-else class="flex flex-col gap-y-4 w-full">
          <div class="flex flex-col gap-x-6 gap-y-2 sm:flex-row relative pr-8" v-for="(item, index) in workout.exercises" :key="index">
            <div class="flex flex-2 flex-col md:w-1/3">
              <label class="mb-1 text-sm text-gray-800">Type</label>
              <select v-if="edit" Class="p-2 w-full bg-white text-gray-500 focus:outline-none" v-model="item.cardio_type">
                <option value="#">Select Type</option>
                <option value="run">Run</option>
                <option value="walk">Walk</option>
              </select>
              <p class="text-gray-800" v-else>{{ item.cardio_type }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label class="mb-1 text-sm text-gray-800">Distance (km)</label>
              <input v-if="edit" type="text" Class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.distance">
              <p class="text-gray-800" v-else>{{ item.distance }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label class="mb-1 text-sm text-gray-800">Duration (h)</label>
              <input v-if="edit" type="text" Class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.duration">
              <p class="text-gray-800" v-else>{{ item.duration }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label class="mb-1 text-sm text-gray-800">Pace (km/h)</label>
              <input v-if="edit" type="text" Class="p-2 w-full text-gray-500 focus:outline-none" v-model="item.pace">
              <p class="text-gray-800" v-else>{{ item.pace }}</p>
            </div>
            <IconBin v-if="edit" @click="deleteExercise(item.id)" class="text-c-green absolute right-0 bottom-3 cursor-pointer" width="20" height="20"></IconBin>
          </div>
          <div v-if="edit" @click="addExercise" class="text-c-green font-semibold cursor-pointer flex gap-1 items-center self-start">
            <IconAddCircle width="20" height="20"></IconAddCircle>
            Add Exercise
          </div>
        </div>

        <BaseButton class="mt-8" type="button" @click="updateData" v-if="edit"
          :loading="submitButtonLoading">Update Workout and Exercises</BaseButton>
      </div>
    </template>

    <ConfirmDeleteModal v-model="showDeleteConfirm" :processing="deleting" modalTitle="Please confirm"
      :onConfirm="deleteWorkout" :confirmMessage="confirmMessage"></ConfirmDeleteModal>
  </div>
</template>

<script setup>
import IconRun from '../components/icons/IconRun.vue';
import IconBin from '../components/icons/IconBin.vue';
import IconPen from '../components/icons/IconPen.vue';
import IconDumbbell from '../components/icons/IconDumbbell.vue';
import IconAddCircle from '../components/icons/IconAddCircle.vue';
import BaseAlert from '../components/BaseAlert.vue';
import BaseButton from '../components/BaseButton.vue';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal.vue';
import { ref, computed, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { useRoute, useRouter } from 'vue-router';
import store from '../store/index';
import { EXERCISES_TABLE_NAME, WORKOUTS_TABLE_NAME } from '../lib/constants';
import { setMainDivHeight } from '../lib/helpers';

// Create data / vars
const workout = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);
const pageLoading = ref(true);
const submitButtonLoading = ref(false);
const route = useRoute();
const router = useRouter();
const user = computed(() => store.state.currentUser);
const showDeleteConfirm = ref(false);
const deleting = ref(false);
const confirmMessage = ref('Are you sure you want to delete this workout?');

// Get current Id of route
const currentId = route.params.workoutId;

// Get workout data
const getData = async () => {
  try {
    const { data: workouts, error } = await supabase.from(WORKOUTS_TABLE_NAME).select('*, exercises:Exercises(*)').eq('id', currentId);
    if(error) throw error;
    workout.value = workouts[0];
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
const deleteWorkout = async () => {
  deleting.value = true;

  try {
    const { error } = await supabase.from(WORKOUTS_TABLE_NAME).delete().eq('id', currentId);
    if(error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
      
      deleting.value = false;
      return;
    }
    
    showDeleteConfirm.value = false;
    deleting.value = false;
    router.push({ name: 'home' });
  }
  catch(error) {
    errorMsg.value = error.messsage;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
}

// Edit mode
const edit = ref(null);

const editMode = () => {
  edit.value = !edit.value;
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
  errorMsg.value =  'Cannot remove, need to at least have one exercise';
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}

// Update Workout
const updateWorkout = async () => {
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

    edit.value = false;
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
const updateExercises = async () => {
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
    const { error } = await supabase.from(EXERCISES_TABLE_NAME).upsert(exercises);
    if(error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
      submitButtonLoading.value = false;
      return false;
    }

    edit.value = false;
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

const updateData = async () => {
  const updated = await updateWorkout();
  if(updated) {
    await updateExercises();
  }
}

const confirmDelete = () => {
  showDeleteConfirm.value = true;
}

onMounted(() => {
  getData();
  setMainDivHeight();
});

</script>
