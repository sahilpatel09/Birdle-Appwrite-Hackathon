<template>
  <div>
  <div class="block" v-if="true">

    <div class="max-w[1504px] m-auto block">
        
      <!-- 3 container -->
      <div class="flex flex-row justify-between">

        <div class="min-h-screen shrink w-[80px] block
         left-0 top-0 bottom-0 fixed
         py-10 px-5 flex flex-col justify-between
         border-r border-gray-200">

          <svg viewBox="0 0 1043.63 592.71" class="jy hu"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
          
          <div class="leftMenu flex flex-col items-center justify-center gap-10">


            
            <svg width="24" height="24" class="by" viewBox="0 0 24 24" fill="none" aria-label="Home"><path d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z" fill="currentColor" stroke="currentColor" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor; --darkreader-inline-fill:currentColor;" data-darkreader-inline-fill=""></path><path d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path></svg>


            <div class="flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications"><path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" stroke-linecap="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path><path d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z" stroke="currentColor" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path></svg>

              <div class="w-3 h-3 bg-green-600 rounded-full -ml-3.5 -mt-1" :class="{ hidden: !haveNotifications }">
              </div>

            </div>



            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists"><path d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z" stroke="currentColor" stroke-linecap="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path><path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5" stroke="currentColor" stroke-linecap="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path></svg>




            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path></svg>


            <hr class="bg-gray-900 w-1/2 h-0.5">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"></path></svg>

          </div>

          <div class="profile">
            <img src="https://miro.medium.com/fit/c/32/32/1*Er7O8VRVE5TGeJfowJDM1w.png" class="rounded-full w-20" alt="user_image">
          </div>

        </div>


        <!-- Main Section -->

        <div class="flex-auto mb-0 min-w-0 block bg-white pt-2 pl-10 justify-center items-center ml-20 lg:max-w-[790px]"> 
          <div class="block">
              




            <div
              class="lg:hidden w-full px-6 h-14 bg-white shadow flex justify-between items-center">
              <svg viewBox="0 0 1043.63 592.71" class="bo hu">
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path
                      d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
                    ></path>
                  </g>
                </g>
              </svg>

              <div class="flex gap-2">
                <button class="text-green-600 text-sm font-medium">
                  Open in app
                </button>

                <svg
                  width="30"
                  height="30"
                  viewBox="-293 409 25 25"
                  style="fill: rgba(117, 117, 117, 1)"
                >
                  <path
                    d="M-273.33 423.67l-1.67-1.52v-3.65a5.5 5.5 0 0 0-6.04-5.47 5.66 5.66 0 0 0-4.96 5.71v3.41l-1.68 1.55a1 1 0 0 0-.32.74V427a1 1 0 0 0 1 1h3.49a3.08 3.08 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59a1 1 0 0 0-.33-.74zm-7.17 5.63c-.84 0-1.55-.55-1.81-1.3h3.62a1.92 1.92 0 0 1-1.81 1.3zm6.35-2.45h-12.7v-2.35l1.63-1.5c.24-.22.37-.53.37-.85v-3.41a4.51 4.51 0 0 1 3.92-4.57 4.35 4.35 0 0 1 4.78 4.33v3.65c0 .32.14.63.38.85l1.62 1.48v2.37z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="lg:hidden py-4 px-6 mx-6 my-4 rounded h-14 bg-gray-100">
              <h2 class="flex gap-3 items-center font-semibold">
                <div class="rounded-full bg-green-700 w-3 h-3"></div>
                <span class="text-green-500">War in Ukraine:</span> What We’re Reading
              </h2>
            </div>

            <div class="mx-6 my-4">
              <div class="lg:flex lg:items-center lg:gap-2">
                <h3
                  class="uppercase text-gray-700 font-normal text-left text-sm tracking-wide"
                >
                  Your Topics
                </h3>

                <div class="flex my-2 gap-1">
                  <button class="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Machine Learning
                  </button>
                  <button class="bg-gray-100 px-4 py-1 rounded-full text-sm">
                    Productivity
                  </button>
                  <button class="bg-gray-100 px-4 py-1 rounded-full text-sm">
                    Digital Life
                  </button>
                </div>
              </div>

              <div class="flex my-6 gap-2">
                <div class="flex">
                  <img
                    src="https://miro.medium.com/fit/c/176/176/1*vIP_u1C6d94hJP14kKqY4g@2x.jpeg"
                    alt="user-image"
                    class="w-14 rounded-full"
                  />
                  <div
                    class="rounded-full bg-black w-5 h-5 -ml-4 text-white flex items-center justify-center text-sm border border-gray-50"
                  >
                    1
                  </div>
                </div>

                <div class="flex">
                  <img
                    src="https://miro.medium.com/fit/c/48/48/2*U2ZUukbFMiQh0ttTGM1gdA.jpeg"
                    alt="user-image"
                    class="w-14 rounded-full"
                  />
                  <div
                    class="rounded-full bg-black w-5 h-5 -ml-4 text-white flex items-center justify-center text-sm border border-gray-50"
                  >
                    4
                  </div>
                </div>

                <div class="flex">
                  <img
                    src="https://miro.medium.com/fit/c/48/48/1*9nCxu0p1hNUE59oO9_3LAg.jpeg"
                    alt="user-image"
                    class="w-14 rounded-full"
                  />
                  <div
                    class="rounded-full bg-black w-5 h-5 -ml-4 text-white flex items-center justify-center text-sm border border-gray-50"
                  >
                    1
                  </div>
                </div>

                <div class="flex">
                  <img
                    src="https://miro.medium.com/fit/c/48/48/2*U2ZUukbFMiQh0ttTGM1gdA.jpeg"
                    alt="user-image"
                    class="w-14 rounded-full"
                  />
                  <div
                    class="rounded-full bg-black w-5 h-5 -ml-4 text-white flex items-center justify-center text-sm border border-gray-50"
                  >
                    2
                  </div>
                </div>

                <div class="flex">
                  <img
                    src="https://miro.medium.com/fit/c/48/48/1*9nCxu0p1hNUE59oO9_3LAg.jpeg"
                    alt="user-image"
                    class="w-14 rounded-full"
                  />
                  <div
                    class="rounded-full bg-black w-5 h-5 -ml-4 text-white flex items-center justify-center text-sm border border-gray-50"
                  >
                    1
                  </div>
                </div>

                <div class="flex">
                  <img
                    src="https://miro.medium.com/fit/c/48/48/1*9nCxu0p1hNUE59oO9_3LAg.jpeg"
                    alt="user-image"
                    class="w-14 rounded-full"
                  />
                  <div
                    class="rounded-full bg-black w-5 h-5 -ml-4 text-white flex items-center justify-center text-sm border border-gray-50"
                  >
                    1
                  </div>
                </div>
              </div>


              <div class="my-2 flex gap-3">
                
                <div class="globalfont text-sm">
                  <h3>Following</h3>
                </div>

                <div class="globalfont text-sm"> 
                  <h3>Recommended</h3>
                </div>

              </div>

              <hr class="bg-gray-200 w-full h-0.5">






              <!-- PostList -->

            <div class="my-3 space-y-10">
              <div class="flex justify-between gap-5">
                <div class="space-y-4 pt-3">
                  
                  <div class="flex gap-1 items-center text-sm">
                    <img src="@/assets/img/user.png" class="w-5 h-5" alt="" />
                    <h3 class="">Dina Ley</h3>
                    <span class="text-gray-600">in</span>
                    <h4 class="text-black font-normal">Age of Awareness</h4>
                    <p class="text-gray-400"><span class="rm">·</span> 1 day ago</p>
                  </div>

                  <h2
                    class="font-bold lg:text-[22px] text-[16px] capitalize leading-5 font-bold postTitle"
                  >
                    The Rivor of Love.
                  </h2>
                  <p class="hidden lg:block postDescription">
                   A transcendental drowning — “Oh Khusrau, the river of love Runs in strange directions. One who jumps into it drowns, 
                  </p>

                  <div class="flex justify-between items-center">
                    <div class="flex gap-2 items-center">
                      <p class="text-gray-400 text-left text-sm">Apr 13 · 4 min read</p>
                      <button
                        class="hidden md:block py-0.5 px-2 pill rounded-full whitespace-nowrap"
                      >
                        Politics
                      </button>
                      <span class="text-base fill-gray-400">
                        <svg
                          class="star-15px_svg__svgIcon-use"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          aria-label="Member only content"
                        >
                          <path
                            d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    <div class="flex gap-2">
                      
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      class="ll"
                    >
                      <path
                        d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                        fill="#292929"
                      ></path>
                    </svg>  

                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#ffffff;"></path></svg>


                    </div>




                  </div>
                </div>

                <img
                  src="https://miro.medium.com/fit/c/112/112/1*gnJj9BVZCZtSgGzCVWWlsQ.jpeg"
                  class="lg:w-[200px] lg:h-[124px] w-[110px] object-cover rounded mt-10"
                  alt=""
                />
              </div>

              <hr>

              <!-- End of PostList -->
            </div>


              
            </div>









          </div>
        </div>

        <div class="w-[400px] block min-h-screen border-l-2 px-10 box-border" > 
        
        <div class="h-full relative inline-block w-full"  >

          <div class="sticky mt-0 block">
            
            <div class="min-h-full flex flex-col pt-10">

              <!-- SEARCH -->
              <div class="w-full border border-gray-400 p-2 rounded-full flex">

                <svg width="25" height="25" viewBox="0 0 25 25" fill="rgba(8, 8, 8, 1)" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#ffffff;"><path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path></svg>
                <input type="text" name="" placeholder="Search">
                
              </div>

              <!-- TWITTER SECTION -->
              <section class="my-5">
                
                <div class="flex gap-1 items-center justify-center">
                  
                  <svg viewBox="0 0 1043.63 592.71" class="bo hu"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>


                  <svg width="19" height="19" class="ki"><path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z" fill-rule="evenodd"></path></svg>


                  <svg width="29" height="29" class="oz"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>

                </div>

                <p class="text-center text-md py-3 max-w-[190px] mx-auto">Discover Medium writers you already follow on Twitter.</p>

                <div class="w-4/5 mx-auto border border-gray-400 items-center py-1 px-2 rounded-full flex">

                  <svg width="29" height="29" class="oz"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>
                  <h3 class="">Connect to Twitter</h3>
                  
                </div>
                <hr class="my-5">

      <div class="w-full px-2">
      <h2 class="text-gray-800 font-bold">
        Recommended topics
      </h2>

      <div class="flex flex-wrap gap-2 my-3">
        <p
          class="px-4 py-1 border border-gray-200 w-fit rounded antialiased text-gray-600"
          v-for="item in [
            'Data Science',
            'Relationships',
            'Self',
            'Programming',
            'Productivity',
            'Javascript',
            'React',
            'Appwrite',
            'Hackathon',
            'Dev.to',
          ]"
        >
          {{ item }}
        </p>
      </div>
    </div>

              </section>
              
            </div>

          </div>
          
        </div>

        </div>
        




      </div> 

    </div>

  </div>
  <div v-else>
    <Loading />
    <h2 class="flex">{{ errorval }} </h2>    
  </div>

  </div>
</template>

<script setup>
const haveNotifications = ref(false)

</script>








<style scoped>
.bo {
  height: 25px;
}
.hu {
  fill: rgb(0, 0, 0);
}
.greendot {
  background-color: rgb(15, 115, 12);
  flex: 0 0 auto;
  border-radius: 50%;
  width: 8px;
  margin-bottom: 1px;
  margin-right: 8px;
  display: inline-block;
}
.by {
    color: rgba(41, 41, 41, 1);
}
.oz {
    fill: rgb(90, 255, 255);
}
</style>
