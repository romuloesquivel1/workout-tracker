<template>

<div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <h2 class="text-2xl leading-tight">Edit Your Profile</h2>
      </div>
      <div class="my-2 bg-white p-5 rounded-lg shadow-sm">
        <form @submit.prevent="save" class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-bold mb-2">Email:</label>
            <input v-model="user.email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div>
            <label class="block text-sm font-bold mb-2">First name:</label>
            <input v-model="user.user_metadata.firstName" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2">First name:</label>
            <input v-model="user.user_metadata.firstName" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Last name:</label>
            <input v-model="user.user_metadata.lastName" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Phone:</label>
            <input v-model="user.phone" type="tel" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Country:</label>
            <input v-model="user.user_metadata.country" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Profession:</label>
            <input v-model="user.user_metadata.profession" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-bold mb-2">Bio:</label>
            <textarea v-model="user.user_metadata.bio" rows="4"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>


          <div class="col-span-2 flex justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
            <!-- add cancel button to return to profile page -->
            <button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="goToProfile">
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>

</template>

<script setup>

import { useRouter } from "vue-router";
import { computed } from 'vue';
import store from '../store/index';

const router = useRouter();
const user = computed(() => { return store.state.currentUser; });
const goToProfile = () => {
  router.push({ name: 'profile' });
};

</script>