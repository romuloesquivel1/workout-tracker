<template>

  <section class="bg-white dark:bg-gray-300">
    <div class="container mx-auto px-4 py-8 text-center">
      <h1 class="text-4xl font-bold mb-4">Your journey starts here.</h1>
      <p class="text-gray-600">Whether you're a creator, an art enthusiast, or simply curious about life, the World of Art
        welcomes you. Let's create memorable experiences and delve into the beauty of art together!</p>
      <div class="flex justify-center mt-4">
        <router-link class="rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300"
          :to="{ name: 'register' }">Register</router-link>
      </div>
    </div>
  </section>

  <main class="py-5">
    <section class="mx-auto px-4 py-8">
      <div class="p-4 text-gray-600">
        <h1 class="mb-8 text-center text-3xl font-bold text-indigo-900">This is - what we do :</h1>

        <ul class="grid place-content-center sm:grid-cols-2 gap-12">
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-700">01.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Research</div>
              <p class="py-2 text-sm text-indigo-900">We love numbers! We collect data and insights, analyze them then
                take the time to learn about your objectives, ask the right questions to understand your business.</p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-700">02.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Strategey</div>
              <p class="py-2 text-sm text-indigo-900">Solutions are born from proper research, hard work, and strong
                strategy. We build data-driven roadmaps for every project to make pave the way to success.</p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-700">03.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Design</div>
              <p class="py-2 text-sm text-indigo-900">We design the right solution for your business. We craft beautiful,
                intuitive, and user-friendly interfaces that are easy to use and easy to maintain.</p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-700">04.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Development</div>
              <p class="py-2 text-sm text-indigo-900">We build the right solution for your business. We craft beautiful,
                intuitive, and user-friendly interfaces that are easy to use and easy to maintain.</p>
            </div>
          </li>
          <li class="flex">
            <div class="px-4 text-5xl font-extralight text-indigo-700">05.</div>
            <div>
              <div class="text-xl font-bold text-indigo-800">Deployment</div>
              <p class="py-2 text-sm text-indigo-900">We build the right solution for your business. We craft beautiful,
                intuitive, and user-friendly interfaces that are easy to use and easy to maintain.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>

  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center">explore our <br>
        awesome <span class="underline decoration-blue-500">Features</span></h1>

      <p class="mt-4 text-gray-500 text-center xl:mt-6 dark:text-gray-300">
        To truly see art is to glimpse infinity. It's to witness the universe within a dewdrop, the cosmos in a stroke of
        ink.
      </p>

      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
          <span class="inline-block text-blue-500 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
          </span>

          <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

          <p class="text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti
            doloribus voluptatum eveniet
          </p>

          <a href="#"
            class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>

        <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
          <span class="inline-block text-blue-500 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </span>

          <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

          <p class="text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti
            doloribus voluptatum eveniet
          </p>

          <a href="#"
            class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>

        <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
          <span class="inline-block text-blue-500 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </span>

          <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

          <p class="text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti
            doloribus voluptatum eveniet
          </p>

          <a href="#"
            class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="container mx-auto px-4 py-8 text-center">
    <h1 class="text-4xl font-bold mb-4 text-purple-400">Explore Colors, Emotions, and Essence</h1>
    <p class="text-gray-600">Whether you're a creator, an art enthusiast, or simply curious about life, the World of Art
    welcomes you. Let's create memorable experiences and delve into the beauty of art together!</p>
    <div class="flex justify-center mt-2">
      <button class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 ml-4 rounded-md">Explore now</button>
    </div>
  </div>

</template>
