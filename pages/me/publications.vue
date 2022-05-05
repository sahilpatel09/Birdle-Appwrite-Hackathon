<template>
  <div class="mx-6 my-6">
    <div class="lg:flex flex-col lg:gap-2">
      

      <div class="flex justify-between">
            <h3
              class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont p-3"
            >
              Publications
            </h3>

          <div class="flex gap-4 items-center justify-center">
              <button class="bg-green-700 px-4 py-2 rounded-full text-white text-sm font-semibold">
                <NuxtLink to="/new-story">
               New Publication 
               </NuxtLink>
              </button>

            </div>
        
      </div>






      <hr class="bg-gray-200 w-full h-0.5" />

      <h3
        class="text-gray-900 font-extrabold text-left text-xl tracking-tight globalfont p-3"
      >
        Staff
      </h3>


      <div class="w-full h-96 bg-red-200 flex flex-col px-4">
          
          <div class="flex mx-3 items-center gap-4 justify-between">
            
            <div class="flex gap-4 items-center">
              <div>
                <img src="https://cdn-images-1.medium.com/fit/c/60/60/1*TyRLQdZO7NdPATwSeut8gg.png" class="w-10">
              </div>

              <div class="w-[450px]">
                
                <h2>Better Programing</h2>
                <p>Advice for programmers. Subscribe to our daily digest: https://medium.com/@BttrProgramming/subscribe</p>

              </div>
            </div>

            <div class="text-gray-400">
              Writer
            </div>


          </div>


      </div>



    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth", "pageload"],
  // or middleware: 'auth'
});
</script>
