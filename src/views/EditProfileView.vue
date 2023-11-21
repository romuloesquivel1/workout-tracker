<template>

<div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <h2 class="text-2xl leading-tight">Edit Your Profile</h2>
      </div>

      <BaseAlert v-if="errorMsg" messageType="danger" class="mb-10 mt-4">
        {{ errorMsg }}
      </BaseAlert>
      <BaseAlert v-if="successMsg" messageType="success" class="mb-10 mt-4">
        {{ successMsg }}
      </BaseAlert>
      
      <div class="my-2 bg-white p-5 rounded-lg shadow-sm">
        <form @submit.prevent="updateUserProfile">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-0 md:gap-5">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">Email:</label>
                <input v-model="user.email" type="email" :disabled="processing"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">First name:</label>
                <input v-model="user.user_metadata.firstName" type="text" :disabled="processing"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">Last name:</label>
                <input v-model="user.user_metadata.lastName" type="text" :disabled="processing"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
            </div>

            <div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">Phone:</label>
                <input v-model="user.phone" type="tel" :disabled="processing"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">Country:</label>
                <input v-model="user.user_metadata.country" type="text" :disabled="processing"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2">Profession:</label>
                <input v-model="user.user_metadata.profession" type="text" :disabled="processing"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </div>
            </div>
          </div>
          <div>

          <div class="col-span-2">
            <label class="block text-sm font-bold mb-2">Bio:</label>
            <textarea v-model="user.user_metadata.bio" rows="8" :disabled="processing"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>

          <div class="col-span-2 mt-2 flex justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="updateUserProfile" :disabled="processing">
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
import { computed, ref } from 'vue';
import store from '../store/index';
import { supabase } from '../lib/supabaseClient';
import BaseAlert from '../components/BaseAlert.vue';

const successMsg = ref(null);
const errorMsg = ref(null);
const processing = ref(false);

const router = useRouter();
const user = computed(() => { return store.state.currentUser; });

const goToProfile = () => {
  router.push({ name: 'profile' });
};

const updateUserProfile = async () => {
  processing.value = true;
  successMsg.value = null;
  errorMsg.value = null;

  const { data: {user: userUpdated }, error } = await supabase.auth.updateUser({
    data: user.value.user_metadata,
    email: user.value.email,
    phone: user.value.phone,
  });

  if (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  } else {
    console.log('User profile updated:', userUpdated);
    successMsg.value = 'Profile updated successfully!';
    setTimeout(() => {
      successMsg.value = null;
    }, 5000);
  }

  processing.value = false;
};
</script>