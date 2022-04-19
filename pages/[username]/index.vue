<template>
  <div class="mx-6 my-4">
    <div class="lg:flex flex-col lg:gap-2 justify-center">
      <div class="flex items-center justify-between py-4">
    
      <h3
        class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont p-3"
      >
        Sahil Patel
      </h3>

      <div class="flex gap-4 items-center justify-center">
        <button class="bg-green-700 px-4 py-2 rounded-full text-white text-sm font-semibold"> Write a story </button>
        <button class="border border-gray-400 px-4 py-2 rounded-full text-sm font-semibold"> Import a story </button>
      </div>

      </div>


      <div class=" flex gap-7 p-3">
        <div class="globalfont text-sm underline">
          <h3>Home</h3>
        </div>

        <div class="globalfont text-sm">
          <h3>Lists</h3>
        </div>


      </div>

      <hr class="bg-gray-200 w-full h-0.5" />


      <div class="w-full">

        
        <div class="hidden inline-block">
          <div class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Edit draft </a>
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Email to subscribers </a>
            <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Delete draft </a>
            </div>
        </div>
        
      </div>


      <div class="my-3 space-y-10" v-for="index in 6">
        <div class="flex justify-between gap-5">
          <div class="space-y-4 pt-3">
            <div class="flex gap-1 items-center justify-start text-xs lg:text-sm">
              <img src="@/assets/img/user.png" class="w-5 h-5" alt="" />
              <p>Published in <span class="font-bold">ILLUMINATION</span></p>
              <p class="text-gray-400"><span class="rm">·</span> 1 day ago</p>
              <p class="text-gray-600"><span class="rm">·</span> Pinned</p>

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
            </div>

            <h2
              class="font-bold lg:text-[22px] text-[16px] capitalize leading-5 font-bold postTitle leading-10"
            >
              The Rivor of Love & Joy of Tears. How are you doing?
            </h2>
            <p class="hidden lg:block postDescription">
              A transcendental drowning — “Oh Khusrau, the river of love Runs in
              strange directions. One who jumps into it drowns,
            </p>

            <div class="flex justify-between items-center">
              <div class="flex gap-2 items-center">
                <p class="text-gray-400 text-left text-sm">4 min read</p>
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

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                    fill="#000"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill: #ffffff"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <img
            src="https://miro.medium.com/fit/c/112/112/1*gnJj9BVZCZtSgGzCVWWlsQ.jpeg"
            class="lg:w-[200px] lg:h-[124px] w-[110px] object-cover rounded mt-10"
            alt=""
          />
        </div>
    </div>









    </div>
  </div>
</template>
