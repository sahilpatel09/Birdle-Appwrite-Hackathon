<template>
	        <div
          class="hidden lg:block w-[400px] block min-h-screen border-l-2 px-10 box-border"
        >
          <div class="h-full relative inline-block w-full">
            <div class="sticky mt-0 block">
              <div class="min-h-full flex flex-col pt-10">
                <!-- SEARCH -->
                <div
                  class="w-full border border-gray-300 p-2 rounded-full flex"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="rgba(8, 8, 8, 1)"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill: #ffffff"
                  >
                    <path
                      d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
                    ></path>
                  </svg>
                  <input type="text" name="" placeholder="Search" />
                </div>

                <!-- TWITTER SECTION -->
                <section class="my-5">
                  <div class="flex gap-1 items-center justify-center">
                    <img src="@/assets/img/1.png" class="" />

                    <svg width="19" height="19" class="ki">
                      <path
                        d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>

                    <svg width="29" height="29" class="oz">
                      <path
                        d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"
                      ></path>
                    </svg>
                  </div>

                  <p class="text-center text-md py-3 max-w-[190px] mx-auto">
                    Discover Medium writers you already follow on Twitter.
                  </p>

                  <div
                    class="w-4/5 mx-auto border border-gray-300 justify-center py-1 px-2 rounded-full flex"
                  >
                    <svg width="29" height="29" class="oz">
                      <path
                        d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"
                      ></path>
                    </svg>
                    <h3 class="line-through">Connect to Twitter</h3>
                  </div>
                  <hr class="my-5" />

                  <div class="w-full px-2">
                    <h2 class="text-gray-800 font-bold">Recommended topics</h2>

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
</template>