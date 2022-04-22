<template>
  <div class="mx-6 my-4">
    <div class="lg:flex flex-col lg:gap-2 justify-center">
      <div class="flex items-center justify-between py-4">
    
      <h3
        class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont p-3"
      >
        Your Stories
      </h3>

      <div class="flex gap-4 items-center justify-center">
        <button class="bg-green-700 px-4 py-2 rounded-full text-white text-sm font-semibold"> Write a story </button>
        <button class="border border-gray-400 px-4 py-2 rounded-full text-sm font-semibold"> Import a story </button>
      </div>

      </div>


      <div class=" flex gap-7 p-3">
        <div class="globalfont text-sm underline">
          <h3>Draft</h3>
        </div>

        <div class="globalfont text-sm">
          <h3>Published</h3>
        </div>

        <div class="globalfont text-sm">
          <h3>Responses</h3>
        </div>

      </div>

      <hr class="bg-gray-200 w-full h-0.5" />

      
      <div class="w-full" v-for="index in 4">

        <h2 class="globalfont font-bold text-lg">The Choice</h2>
        <p class="text-gray-400 globalfont">Poetry on streoids.</p>
        <p class="text-sm flex gap-1 items-center">Last Edited about 2 hours ago <span class="rm">·</span> 1 min read (250 words) so far

          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" @click="openStoryMenuHandler"
             width="20px" height="20px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"
             xml:space="preserve">
          <g>
            <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695  "/>
          </g>
          </svg>


          <div class="inline-block relative top-0" :class="{ hidden: openStoryMenu }">
            <div class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Edit draft </a>
              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Email to subscribers </a>
              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Delete draft </a>
              </div>
          </div>
        </p>

        
        
      </div>


    </div>
  </div>
</template>
<script setup>
  const openStoryMenu = ref(true)

  function openStoryMenuHandler(){
    openStoryMenu.value = !openStoryMenu.value
  }
</script>