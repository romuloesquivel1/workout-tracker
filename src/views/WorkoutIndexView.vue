<template>
  <div class="container py-10 px-4" id="main">
    <template v-if="loading">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="n in 8" :key="n" class="h-[276px] bg-gray-100 animate-pulse"></div>
      </div>
    </template>

    <template v-else>
      <!-- No Data -->
      <div v-if="workouts.length === 0" class="w-full flex flex-col items-center py-32">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-black text-center">
            Welcome to Our Website
          </h2>
          <h3 class="text-2xl mb-8 text-grey-dark text-center">
            We provide high quality services
          </h3>
        </div>

        <!-- Features Section -->
        <section class="container mx-auto px-6 p-10">
          <!-- Features -->
          <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
            <!-- Column 1 -->
            <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
              <!-- Your first three divs here -->
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <!-- You can replace with your own svg icon -->
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path fill-rule="evenodd" d="M12.03 12.97a7 7 0 01-8.14-1.54 1 1 0 011.28-1.538 5 5 0 006.56 1.176 1 1 0 111.01 1.74 7 7 0 01-.71.17z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Feature Title
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Feature Description
                  </p>
                </div>
              </div>
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <!-- You can replace with your own svg icon -->
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path fill-rule="evenodd" d="M12.03 12.97a7 7 0 01-8.14-1.54 1 1 0 011.28-1.538 5 5 0 006.56 1.176 1 1 0 111.01 1.74 7 7 0 01-.71.17z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Feature Title
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Feature Description
                  </p>
                </div>
              </div>
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <!-- You can replace with your own svg icon -->
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path fill-rule="evenodd" d="M12.03 12.97a7 7 0 01-8.14-1.54 1 1 0 011.28-1.538 5 5 0 006.56 1.176 1 1 0 111.01 1.74 7 7 0 01-.71.17z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Feature Title
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Feature Description
                  </p>
                </div>
              </div>
            </div>

            <!-- Column 2 -->
            <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
              <!-- Your last three divs here -->
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <!-- You can replace with your own svg icon -->
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path fill-rule="evenodd" d="M12.03 12.97a7 7 0 01-8.14-1.54 1 1 0 011.28-1.538 5 5 0 006.56 1.176 1 1 0 111.01 1.74 7 7 0 01-.71.17z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Feature Title
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Feature Description
                  </p>
                </div>
              </div>
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <!-- You can replace with your own svg icon -->
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path fill-rule="evenodd" d="M12.03 12.97a7 7 0 01-8.14-1.54 1 1 0 011.28-1.538 5 5 0 006.56 1.176 1 1 0 111.01 1.74 7 7 0 01-.71.17z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Feature Title
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Feature Description
                  </p>
                </div>
              </div>
              <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <!-- You can replace with your own svg icon -->
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path fill-rule="evenodd" d="M12.03 12.97a7 7 0 01-8.14-1.54 1 1 0 011.28-1.538 5 5 0 006.56 1.176 1 1 0 111.01 1.74 7 7 0 01-.71.17z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Feature Title
                  </p>
                  <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    Feature Description
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RouterLink :to="{ name: 'create' }"><BaseButton>Get Started: Create Workout</BaseButton></RouterLink>
        
      </div>
  
      <!-- Data -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </template>

  </div>
</template>

<script setup>

import { data as workouts, loading, getData } from './WorkoutIndexView.js';
import IconDumbbell from '../components/icons/IconDumbbell.vue';
import IconRun from '../components/icons/IconRun.vue';
import BaseButton from '../components/BaseButton.vue';
import { setMainDivHeight } from '../lib/helpers';
import { onMounted } from 'vue';

onMounted(() => {
  setMainDivHeight();
  getData().then(setMainDivHeight);
});

</script>
