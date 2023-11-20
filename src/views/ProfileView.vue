<template>

  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <h2 class="text-2xl leading-tight">Your Profile</h2>
        <router-link to="/edit-profile" class="text-blue-500 hover:text-blue-700">Edit Profile</router-link>
      </div>
      <div class="my-2 bg-white p-5 rounded-lg shadow-sm">
        <div class="flex justify-center">
          <img :src="'/assets/' + user.user_metadata.avatar" :alt="`${user.user_metadata.firstName} ${user.user_metadata.lastName}`"
            class="w-40 h-40 rounded-full mb-4">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div class="border-b">
              <label class="block text-sm font-bold mb-2">Email:</label>
              <p>{{ user.email }}</p>
            </div>
            <div class="mt-3 border-b">
              <label class="block text-sm font-bold mb-2">First name:</label>
              <p>{{ user.user_metadata.firstName }}</p>
            </div>
            <div class="mt-3 border-b">
              <label class="block text-sm font-bold mb-2">Last name:</label>
              <p>{{ user.user_metadata.lastName }}</p>
            </div>
          </div>
          <div>
            <div class="border-b">
              <label class="block text-sm font-bold mb-2">Phone:</label>
              <p>{{ user.phone }}</p>
            </div>
            <div class="mt-3 border-b">
              <label class="block text-sm font-bold mb-2">Country:</label>
              <p>{{ user.user_metadata.country }}</p>
            </div>
            <div class="mt-3 border-b">
              <label class="block text-sm font-bold mb-2">Profession:</label>
              <p>{{ user.user_metadata.profession }}</p>
            </div>
          </div>
        </div>
        <div class="mt-5 border-b">
          <label class="block text-sm font-bold mb-2">Bio:</label>
          <p>{{ user.user_metadata.bio }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { computed } from 'vue';
import store from '../store/index';
const user = computed(() => { return store.state.currentUser; });

</script>
