<template>
  <div class="flex">
    <div
      class="menu bg-indigo-300 w-full h-20 bottom-0 left-0 right-0 fixed lg:w-20 lg:h-screen lg:relative"
    ></div>

    <div class="middlebar lg:w-9/12 w-full h-screen lg:px-14">
      <div
        class="lg:hidden w-full py-4 px-6 h-14 bg-white shadow flex justify-between items-center"
      >
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
            class="uppercase text-gray-600 font-normal text-left text-sm tracking-wide"
          >
            Your Topics
          </h3>

          <div class="flex my-2">
            <button class="bg-gray-100 px-3 py-2 rounded-full text-sm">
              Machine Learning
            </button>
            <button class="bg-gray-100 px-4 py-2 rounded-full text-sm">
              Productivity
            </button>
            <button class="bg-gray-100 px-4 py-2 rounded-full text-sm">
              Digital Life
            </button>
          </div>
        </div>

        <div class="flex mt-6 gap-2">
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

        <!-- PostList -->

        <div class="flex justify-between gap-2" v-for="index in 6">
          <div class="space-y-2 pt-3">
            <div class="flex gap-1 items-center">
              <img src="@/assets/img/user.png" class="w-5 h-5" alt="" />
              <h3 class="text-sm">Dina Ley</h3>
              <span class="text-gray-600 text-sm">in</span>
              <h4 class="text-black text-sm font-semibold">Age of Awareness</h4>
            </div>

            <h2
              class="font-bold lg:text-[22px] text-[16px] capitalize leading-5 font-bold postTitle"
            >
              17 Questions Tech Doesn’t Want You Asking.
            </h2>
            <p class="hidden lg:block postDescription">
              A practical blueprint for assessing the value, limitations and
              quality of new technologies for ourselves and our families
            </p>

            <div class="flex justify-between items-center">
              <div class="flex gap-2 items-center">
                <p class="text-gray-400 text-left">Apr 13 · 4 min read</p>
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
            </div>
          </div>

          <img
            src="https://miro.medium.com/fit/c/400/268/0*3dBMpcsQMs7zRLoI"
            class="lg:w-[200px] lg:h-[144px] w-[110px] object-cover"
            alt=""
          />
        </div>

        <!-- End of PostList -->
      </div>
    </div>

    <div class="sidebar bg-yellow-200 hidden lg:block lg:w-4/12"></div>
  </div>
</template>

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
</style>
