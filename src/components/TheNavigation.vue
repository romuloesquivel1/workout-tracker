<template>
  <header class="bg-c-green text-white sticky top-0 z-50">
    <div class="container">
      <nav class="py-2 px-4 flex flex-col gap-4 items-center sm:flex-row sm:justify-between">
        <div class="flex items-center gap-x-4">
          <IconDumbbell width="56" height="56"></IconDumbbell>
          <h1 class="text-lg"><router-link class="" :to="{ name: 'home' }">Workout Tracker</router-link></h1>
        </div>
        <ul class="flex gap-x-5">
          <li><router-link class="" :to="{ name: 'home' }">Home</router-link></li>
          <li v-if="!user"><router-link class="" :to="{ name: 'login' }">Login</router-link></li>
          <li v-if="user"><router-link class="" :to="{ name: 'create' }">Create</router-link></li>
          <li v-if="user"><router-link class="" :to="{ name: 'profile' }">Profile</router-link></li>
          <li v-if="user" class="cursor-pointer" @click="logout">Logout</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import IconDumbbell from './icons/IconDumbbell.vue';
import { supabase } from "../lib/supabaseClient";
import { useRouter } from 'vue-router';
import store from '../store/index';
import { computed } from 'vue';

// Get user from store
const user = computed(() => { return store.state.currentUser; });

// Setup ref to router
const router = useRouter();

// Logout function
const logout = async () => {
  await supabase.auth.signOut();
  router.push({ name: 'home' });
};
</script>
