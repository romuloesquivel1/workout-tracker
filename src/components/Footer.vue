<template>

  <footer class="bg-c-green text-white p-4" :class="footerClass">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <a href="#" class="text-2xl font-bold">Learn Vue v3</a>
        <p class="text-sm">© 2023 Dev. All rights reserved.</p>
      </div>
      <ul class="flex space-x-4">
        <li><a href="#" class="">Privacy Policy</a></li>
        <li><a href="#" class="">Terms of Service</a></li>
        <li><a href="#" class="">Contact Us</a></li>
      </ul>
    </div>
  </footer>

</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const footerNeedToApplyCssClassForRoutes = ['login', 'register', 'create'];

const footerClass = ref('')

watchEffect(() => {
  if (footerNeedToApplyCssClassForRoutes.includes(route.name)) {
    footerClass.value = 'fixed bottom-0 left-0 w-full'
  } else {
    footerClass.value = ''
  }
});

</script>
