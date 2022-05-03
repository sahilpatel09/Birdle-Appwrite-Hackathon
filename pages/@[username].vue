<template>
    <div class="block" v-if="loggedin">
      <div class="max-w[1504px] m-auto block">
        <!-- 3 container -->
        <div class="flex flex-row justify-between">
          <div
            class="lg:min-h-screen lg:shrink lg:w-[80px] block lg:left-0 lg:top-0 lg:bottom-0 fixed lg:py-10 lg:px-5 flex lg:flex-col lg:justify-between border-r border-gray-200 items-center justify-center bottom-0 left-0 right-0 bg-white px-2.5 py-4 shadow-2xl"
          >
          <NuxtLink to="/me/">
          <img src="@/assets/img/3.png" alt="" class="hidden lg:block">
        </NuxtLink>
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
            
            <div class="profile lg:hidden" @click="openIt" v-if="user || userData">
              <UsersUserAvatar v-if="userData.img" :fileid="userData.img" class="w-10" /> 
              <UsersUserNameAvatar :name="user.name" v-else />
            </div>

          </div>

          <div class="profile hidden lg:block" @click="openIt" v-if="user || userData">
            <UsersUserAvatar v-if="userData.img" :fileid="userData.img" /> 
            <UsersUserNameAvatar :name="user.name" v-else />
          </div>
          <div v-else class="w-10 h-10">
            
          </div>
        </div>

          <!-- Main Section -->
          <NuxtChild />

          
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
const service = userService();
const { user, userData } = stateManager()


async function getUserData(){
  const logged = await service.getAuthStatus();
  if(logged){
  const { userInfo, currentUserData } = await service.setUpUserForPageReload();
  user.value = userInfo
  userData.value = currentUserData    
  }

  loggedin.value = true
}

getUserData()
// setTimeout(()=>{
//   console.log(user)
// }, 500);


// function getUser() {
//   let promise = appwrite.account.get();
//   promise.then(
//     function (response) {
// //      console.log(response); // Success
//       user.value = response;
//       loggedin.value = true;
//     },
//     function (error) {
//       router.push("/");
//     }
//   );
// }

// function authenticateUser(id, secret) {
//   let promise = appwrite.account.updateMagicURLSession(id, secret);
//   promise.then(
//     function (response) {
//       // console.log(response); // Success
//       getUser();
//     },
//     function (error) {
//       console.log(error); // Failure
//       errorval.value = error;
//     }
//   );
// }



// const uid = route.query.userId;
// const secretsauce = route.query.secret;

// if (uid && secretsauce) {
//   authenticateUser(uid, secretsauce);
// } else {
//   console.log("No parameters");
//   getUser();
// }
</script>
