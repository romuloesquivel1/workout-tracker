<script setup>
import { RouterView } from 'vue-router';
import TheNavigation from './components/TheNavigation.vue';
import Footer from './components/Footer.vue';
import { supabase } from './lib/supabaseClient';
import store from './store/index';
import { setMainDivHeight } from './lib/helpers';

// Runs when there is a auth state change
// if user is logged in, this will fire
supabase.auth.onAuthStateChange((_,session) => {
  console.log('_', _);
  console.log('session', session);
  store.methods.setUser(session);
});

window.addEventListener('resize', setMainDivHeight);

</script>

<template>
  <TheNavigation></TheNavigation>
  <RouterView />
  <Footer />
</template>
