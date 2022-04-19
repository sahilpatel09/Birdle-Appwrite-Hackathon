<template>
    <div class="block" v-if="loggedin">
      <div class="max-w[1504px] m-auto block">
        <!-- 3 container -->
        <div class="flex flex-row justify-between">
          <div
            class="lg:min-h-screen lg:shrink lg:w-[80px] block lg:left-0 lg:top-0 lg:bottom-0 fixed lg:py-10 lg:px-5 flex lg:flex-col lg:justify-between border-r border-gray-200 items-center justify-center bottom-0 left-0 right-0 bg-white px-2.5 py-4 shadow-2xl"
          >
          <img src="@/assets/img/3.png" alt="" class="hidden lg:block">
            <div
              class="leftMenu flex lg:flex-col items-center justify-around lg:justify-center lg:gap-10 w-full"
            >
              <NuxtLink to="/me/">
                <svg
                  width="24"
                  height="24"
                  class="by"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Home"
                >
                  <path
                    d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    data-darkreader-inline-stroke=""
                    style="
                      --darkreader-inline-stroke: currentColor;
                      --darkreader-inline-fill: currentColor;
                    "
                    data-darkreader-inline-fill=""
                  ></path>
                  <path
                    d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    data-darkreader-inline-stroke=""
                    style="--darkreader-inline-stroke: currentColor"
                  ></path>
                </svg>
              </NuxtLink>

              <svg
                width="25"
                height="24"
                class="lg:hidden block"
                fill="none"
                aria-label="search"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.8 10.69a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73a8.05 8.05 0 0 0-5.94-13.5z"
                  fill="#A8A8A8"
                ></path>
              </svg>

              <NuxtLink to="/me/notifications/">
                <div class="hidden lg:block lg:flex lg:justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Notifications"
                  >
                    <path
                      d="M15 18.5a3 3 0 1 1-6 0"
                      stroke="currentColor"
                      stroke-linecap="round"
                      data-darkreader-inline-stroke=""
                      style="--darkreader-inline-stroke: currentColor"
                    ></path>
                    <path
                      d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      data-darkreader-inline-stroke=""
                      style="--darkreader-inline-stroke: currentColor"
                    ></path>
                  </svg>

                  <div
                    class="w-5 h-5 bg-green-600 rounded-full -ml-3.5 -mt-1 text-xs flex items-center justify-center text-white"
                    :class="{ hidden: !haveNotifications }"
                  >
                    12
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink to="/me/lists">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Lists"
                >
                  <path
                    d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    data-darkreader-inline-stroke=""
                    style="--darkreader-inline-stroke: currentColor"
                  ></path>
                  <path
                    d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    data-darkreader-inline-stroke=""
                    style="--darkreader-inline-stroke: currentColor"
                  ></path>
                </svg>
              </NuxtLink>

              <NuxtLink to="/me/stories">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="hidden lg:block"
                  fill="none"
                  aria-label="Stories"
                >
                  <path
                    d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                    stroke="currentColor"
                    data-darkreader-inline-stroke=""
                    style="--darkreader-inline-stroke: currentColor"
                  ></path>
                  <path
                    d="M8 8.5h8M8 15.5h5M8 12h8"
                    stroke="currentColor"
                    stroke-linecap="round"
                    data-darkreader-inline-stroke=""
                    style="--darkreader-inline-stroke: currentColor"
                  ></path>
                </svg>
              </NuxtLink>

              <hr class="bg-gray-900 w-1/2 h-0.5 hidden lg:block" />

              <NuxtLink to="/new-story">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="hidden lg:block"
                fill="none"
                aria-label="Write"
              >
                <path
                  d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                  fill="currentColor"
                  data-darkreader-inline-fill=""
                  style="--darkreader-inline-fill: currentColor"
                ></path>
                <path
                  d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                  stroke="currentColor"
                  data-darkreader-inline-stroke=""
                  style="--darkreader-inline-stroke: currentColor"
                ></path>
              </svg>
              </NuxtLink>

              <div class="profile lg:hidden" @click="openIt">
                <img
                  src="https://miro.medium.com/fit/c/32/32/1*Er7O8VRVE5TGeJfowJDM1w.png"
                  class="rounded-full lg:w-20 w-10"
                  alt="user_image"
                />
              </div>
            </div>

            <div class="profile hidden lg:block" @click="openIt">
              <img
                src="https://miro.medium.com/fit/c/32/32/1*Er7O8VRVE5TGeJfowJDM1w.png"
                class="rounded-full lg:w-20 w-10"
                alt="user_image"
              />
            </div>
          </div>

          <!-- Main Section -->

          <div
            class="flex-auto mb-0 min-w-0 block bg-white pt-2 lg:pl-10 justify-center items-center lg:ml-20 lg:max-w-[790px] w-full"
          >
            <div class="block">
              <NuxtChild />
            </div>
          </div>

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

                    <div class="dataholder">

                      <img src="https://miro.medium.com/fit/c/176/176/1*Er7O8VRVE5TGeJfowJDM1w.png" class="rounded-full w-20">
                      <h2 class="globalfont font-bold mt-4 capitalize">{{ user.name }}</h2>
                      <h3 class="py-2 text-base text-gray-500">1.5K Followers</h3>
                      <p class="text-gray-600 text-sm">3× Top Writer in Poetry| Reading | Inspiration. Support my writing by joining Medium https://smppatel999.medium.com/membership (Affiliate link)</p>
                      
                      <!-- If use is self -->
                      <h4 class="mt-5 text-gray-700">Edit Profile</h4>
                      <!-- else -->
                      <div class="flex gap-3 mt-4 items-center">
                        <button class="px-4 py-1 text-green-500 border border-green-500 rounded-full">Following</button>

                        <button class="px-4 py-1 bg-green-700 text-white rounded-full">Follow</button>
                        <button class="rounded-full bg-green-700 w-16 h-10 py-2 h-fit flex items-center justify-center" title="Subscribe to get a newsletter.">
                          <img src="@/assets/img/get-email.svg" class="w-5">
                        </button>


                      </div>
                    </div>

                     <hr class="my-5" />

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

      <UserBottomLeftMenu :class="{ hidden: menu }" class="z-50" />
    </div>
    <div v-else>
      <Loading />
      <h2 class="flex">{{ errorval }}</h2>
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
<script setup>
const haveNotifications = ref(true);
const menu = ref(true);
function openIt() {
  menu.value = !menu.value;
}
const route = useRoute();
const router = useRouter();
const errorval = ref("");
const loggedin = ref(false);
const appwrite = useAppwrite();
const { user } = stateManager();
console.log(user)
// setTimeout(()=>{
//   console.log(user)
// }, 500);


function getUser() {
  let promise = appwrite.account.get();
  promise.then(
    function (response) {
//      console.log(response); // Success
      user.value = response;
      loggedin.value = true;
    },
    function (error) {
      router.push("/");
    }
  );
}

function authenticateUser(id, secret) {
  let promise = appwrite.account.updateMagicURLSession(id, secret);
  promise.then(
    function (response) {
      // console.log(response); // Success
      getUser();
    },
    function (error) {
      console.log(error); // Failure
      errorval.value = error;
    }
  );
}



const uid = route.query.userId;
const secretsauce = route.query.secret;

if (uid && secretsauce) {
  authenticateUser(uid, secretsauce);
} else {
  console.log("No parameters");
  getUser();
}
</script>
