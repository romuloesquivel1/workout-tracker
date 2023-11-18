<template>
  <div id='main' :class="`${mainClass} ${spaceClass}`">
    <div class="lg:w-1/2 w-full relative lg:pb-0">
      <div class="absolute">
        <div class="">
          <h1 class="my-2 text-gray-800 font-bold text-2xl">
            Looks like you've found the doorway to the great nothing
          </h1>
          <p class="my-2 text-gray-800">
            Sorry about that! Please visit our hompage to get where you need to go.
          </p>
          <div class="mt-2">
            <button
              class="border sm:w-auto w-full rounded text-center py-4 px-8 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
            >
              Take me there!
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
      </div>
    </div>
    <div>
      <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { setMainDivHeight } from '../lib/helpers';

const spaceClass = ref('md:py-10 md:px-14 lg:px-10 px-4 py-14 md:gap-18 lg:gap-14 xl:gap-32 gap-20')
const mainClass = ref('items-center flex justify-center flex-col-reverse md:flex-row')
onMounted(() => {
  setMainDivHeight();
});
</script>
