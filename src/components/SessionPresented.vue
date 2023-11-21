<template>

  <div class="flex flex-col">
    <BaseAlert messageType="success">
      {{ successMsg }}
    </BaseAlert>
    <div class='flex justify-between w-full my-4'>
      <router-link :to="{ name:'create' }">
        <BaseButton :color="'bg-amber-600'">Create workout</BaseButton>
      </router-link>
      <router-link class="text-blue-500 hover:text-blue-700 mr-4" :to="{ name:'profile' }">
        Profile
      </router-link>
    </div>
  </div>

</template>

<script setup>
  defineProps({
    successMsg: {
      type: String,
      required: false,
      default: 'You are already logged in!'
    }
  });
</script>
