<template>

  <div id='main' class="mx-8 sm:mx-0 py-10 items-center flex">
    <div class="w-full sm:w-3/4 mx-auto lg:w-1/2">
      <BaseAlert v-if="errorMsg" messageType="danger" class="mb-10">
        {{ errorMsg }}
      </BaseAlert>
      <session-presented v-if="successMsg" :success-msg="successMsg"></session-presented>

      <div v-if="!user" class="p-8 flex flex-col w-full mx-auto  rounded bg-opacity-10 bg-c-light-green">
        <form @submit.prevent="login">
          <h1 class="text-3xl text-gray-800 mb-4">Login</h1>
          <div class="flex flex-col mb-3">
            <label for="email" class="mb-1 text-sm text-gray-800">Email</label>
            <input 
              type="text"
              required
              class="p-2 text-gray-500 focus:outline-none"
              id="email"
              v-model="email"
            />
          </div>
          <div class="flex flex-col mb-6">
            <label for="email" class="mb-1 text-sm text-gray-800">Password</label>
            <input 
              type="password"
              required
              class="p-2 text-gray-500 focus:outline-none"
              id="password"
              v-model="password"
            />
          </div>

          <BaseButton :loading="processing">Login</BaseButton>
    
          <p class="text-sm text-center text-gray-800 mt-6">
            Don't have an account?
            <router-link class="text-c-green" :to="{ name:'register' }">Register</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import SessionPresented from "../components/SessionPresented.vue";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { setMainDivHeight } from "../lib/helpers";
import store from "../store";

const user = computed(() => { return store.state.currentUser; });

// Create data / vars
const router = useRouter();
const email = ref(null);
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(user.value ? 'You are already logged in!' : null);
const processing = ref(false);

// Login function
const login = async () => {
  processing.value = true;
  errorMsg.value = null;
  successMsg.value = null;

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });
  processing.value = false;

  if(error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
    return;
  }

  successMsg.value = 'Login successful!';
  setTimeout(() => {
    successMsg.value = null;
    router.push({ name: 'home' });
  }, 10000);
};

onMounted(() => {
  setMainDivHeight();
});
</script>
