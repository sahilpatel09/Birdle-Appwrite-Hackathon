<template>
	  <div class="container mx-auto h-60 pt-20 px-5">
  

    <div class="flex items-center justify-start gap-3">
      
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" class="ie y"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>

    <h2 class="uppercase font-bold text-base">Trending on Medium</h2>

    </div>



        <div class="flex flex-wrap -m-4 py-5">
          
          <div class="lg:w-1/3" v-for="index in 6">
            <div
              class="h-full px-8 py-5 rounded-lg overflow-hidden text-center relative">
              
              <div class="flex gap-6">

                <div class="index">
                  <h2 class="text-4xl text-gray-300 font-bold" >{{ "0"+index }}</h2>
                </div>

                <div class="space-y-2 pt-3">
                  
                  <div class="flex gap-1 items-center">
                    <img src="@/assets/img/user.png" class="w-5 h-5" alt="">
                    <h3>Dina Ley</h3>
                    <span class="text-gray-600">in</span>
                    <h4 class="text-black text-base font-semibold">Age of Awareness</h4>
                  </div>

                  <h2 class="font-bold text-lg capitalize">Teachers are done. No, Really.</h2>
                  <p class="text-gray-400 text-left pl-2">Apr 5 · 3 min read</p>
                </div>
                
              </div>

            </div>
          </div>

        </div>
  </div>



</template>