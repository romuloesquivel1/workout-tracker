<template>

  <div class="container mx-auto px-4 sm:px-8" id="main">
    <div class="py-8">
      <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <h2 class="text-2xl leading-tight">Update Password</h2>
      </div>

      <BaseAlert v-if="errorMsg" messageType="danger" class="mb-10 mt-4">
        {{ errorMsg }}
      </BaseAlert>
      <BaseAlert v-if="successMsg" messageType="success" class="mb-10 mt-4">
        {{ successMsg }}
      </BaseAlert>
      
      <div class="my-2 bg-white p-5 rounded-lg shadow-sm">
        <form @submit.prevent="updatePassword">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-0 md:gap-5">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">Old Password:</label>
                <input v-model="old_password" type="password" :disabled="processing" required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
            </div>

            <div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">New Password:</label>
                <input v-model="new_password" type="password" :disabled="processing" required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">Repeat Password:</label>
                <input v-model="repeat_password" type="password" :disabled="processing" required
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
            </div>
          </div>
          <div>

          <div class="col-span-2 mt-2 flex justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="updatePassword" :disabled="processing">
              Save
            </button>
            <button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="goToProfile" :disabled="processing">
              Cancel
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, ref, onMounted } from 'vue';
import store from '../store/index';
import { supabase } from '../lib/supabaseClient';
import { setMainDivHeight } from "../lib/helpers";

const successMsg = ref(null);
const errorMsg = ref(null);
const processing = ref(false);
const old_password = ref(null);
const new_password = ref(null);
const repeat_password = ref(null);

const router = useRouter();
const user = computed(() => { return store.state.currentUser; });

const goToProfile = () => {
  router.push({ name: 'profile' });
};

const updatePassword = async () => {

  if (!old_password.value || !new_password.value || !repeat_password.value) {
    errorMsg.value = 'Please fill all fields!';
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
    return;
  }

  if (new_password.value !== repeat_password.value) {
    errorMsg.value = 'Passwords do not match!';
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
    processing.value = false;
    return;
  }

  processing.value = true;
  successMsg.value = null;
  errorMsg.value = null;

  const { error: errorLogin } = await supabase.auth.signInWithPassword({
    email: user.value.email,
    password: old_password.value,
  });

  if (errorLogin) {
    errorMsg.value = errorLogin.message;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
    processing.value = false;
    return;
  }

  const { data: {user: userUpdated }, error } = await supabase.auth.updateUser({
    password: repeat_password.value,
  });
  processing.value = false;

  if (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  } else {
    console.log('User profile updated:', userUpdated);
    successMsg.value = 'Password updated successfully!';
    setTimeout(() => {
      successMsg.value = null;
    }, 5000);
  }
};

onMounted(() => {
  if (!user.value) {
    console.log('No user found, redirecting to login.');
    goToProfile();
  } else
    setMainDivHeight();
});
</script>