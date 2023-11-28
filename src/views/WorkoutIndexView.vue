<template>

  <div class="container py-10 px-4" id="main">
    <template v-if="loading">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="n in 8" :key="n" class="h-[276px] bg-gray-100 animate-pulse"></div>
      </div>
    </template>

    <template v-else>
      <!-- No Data -->
      <WorkoutFeatures v-if="workouts.length === 0" />

      <!-- Data -->
      <div v-else>
        <!-- add sorting -->
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Workouts</h2>
          <div class="flex space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 flex-col sm:flex-row sm:items-center items-end">
            <!-- divide to two columns -->
            <div class="">
              <label for="sortBy" class="text-gray-600 mr-2">Sort by:</label>
              <select
                name="sortBy"
                id="sortBy" v-model="sortBy"
                class="px-2 py-1 border border-gray-300 rounded-md text-gray-600 text-sm"
              >
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="created_at">Created at</option>
              </select>
            </div>

            <div class="">
              <label for="sortDirection" class="text-gray-600 mr-2">Sort direction:</label>
              <select
                name="sortDirection"
                id="sortDirection" v-model="sortDirection"
                class="px-2 py-1 border border-gray-300 rounded-md text-gray-600 text-sm"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <article
            class="flex flex-col items-center bg-c-light-green bg-opacity-10 p-8 cursor-pointer relative"
            v-for="(workout, index) in workouts"
            :key="index"
          >
            <router-link
              class="absolute inset-0"
              :to="{ name: 'workout', params: { workoutId: workout.id } }"
            ></router-link>

            <!-- Cardio Icon -->

            <IconRun v-if="workout.type === 'cardio'" class="w-24 h-24 text-c-green"></IconRun>

            <!-- Strength Training Icon -->

            <IconDumbbell v-else class="w-24 h-24 text-c-green"></IconDumbbell>

            <p class="mt-6 py-1 px-3 font-medium text-xs text-white bg-c-green rounded-lg">
              {{ workout.type }}
            </p>

            <h3 class="mt-8 mb-2 text-center text-xl text-gray-800">
              {{ workout.name }}
            </h3>
          </article>
        </div>
      </div>
    </template>

  </div>

</template>

<script setup>

import { data as workouts, loading, getData } from './WorkoutIndexView.js';
import IconDumbbell from '../components/icons/IconDumbbell.vue';
import IconRun from '../components/icons/IconRun.vue';
import WorkoutFeatures from '../components/WorkoutFeatures.vue';
import { setMainDivHeight } from '../lib/helpers';
import { onMounted, ref, watch } from 'vue';

const sortBy = ref('created_at');
const sortDirection = ref('desc');

const initData = () => {
  setMainDivHeight();
  getData(sortBy.value, sortDirection.value).then(setMainDivHeight);
};

onMounted(initData);

watch(sortBy, initData);
watch(sortDirection, initData);

</script>
