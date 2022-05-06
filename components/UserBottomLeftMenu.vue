<template>
  <div class="animated fadeIn z-40">
    <div
      class="w-80 h-[490px] bg-white shadow fixed lg:left-1 lg:bottom-20 lg:top-10 left-0 bottom-14 z-20 globalfont shadow-2xl"
    >
      <div class="overflow-y-scroll w-full h-full">
        <div class="px-8 my-5 text-sm">
          <h2 class="text-green-500 line-through">Gift a membership</h2>
        </div>

        <hr class="mt-5 w-full" />
        <div class="px-8 py-8">
          <ul class="flex flex-col gap-5 text-sm leading-5">
            <li><button @click="signMeOut">Sign out</button></li>
            <li class="line-through">Medium Partner Program</li>
            <li class="line-through">Refine reccmmendations</li>
            <li class="line-through">Stats</li>
            <li>
              <NuxtLink to="/me/settings"><button>Settings</button></NuxtLink>
            </li>
          </ul>
        </div>

        <hr class="w-full" />

        <div class="px-8 py-8 text-sm" v-if="pubList">
          <h2 class="text-sm">
            <NuxtLink to="/me/publications"> Manage Publications </NuxtLink>
          </h2>
          <div class="flex flex-col gap-1 py-2">
            <div v-if="pubList == ''">
              You are not part of any publication yet.
            </div>

            <div
              class="flex items-center px-3 py-2 gap-3"
              v-for="pub in pubList"
              :key="pub.$id"
            >
              <NuxtLink :to="'/' + pub.url">
                <div class="profile lg:block w-12" v-if="pub">
                  <UsersUserAvatar v-if="pub.img" :fileid="pub.img" />
                  <UsersUserNameAvatar :name="pub.name" v-else />
                </div>
              </NuxtLink>
              <NuxtLink :to="'/' + pub.url">
                <h3>{{ pub.name }}</h3>
              </NuxtLink>
            </div>
          </div>
        </div>

        <hr class="w-full" />

        <div class="w-full flex gap-2 justify-center py-6">
          <!-- <img
            src="https://miro.medium.com/fit/c/32/32/1*Er7O8VRVE5TGeJfowJDM1w.png"
            class="w-10 h-10 rounded-full"
          /> -->

          <div class="profile lg:block w-12" v-if="userData">
            <NuxtLink :to="'/@' + userData.username">
              <UsersUserAvatar v-if="userData.img" :fileid="userData.img" />
              <UsersUserNameAvatar :name="userData.name" v-else />
            </NuxtLink>
          </div>

          <div class="flex flex-col">
            <h2>{{ userData.name }}</h2>

            <h3>
              <a :href="'/@' + userData.username" :title="userData.name">
                @{{ userData.username }}
              </a>
            </h3>
          </div>

          <div class="flex flex-col-reverse items-center justify-center">
            <div
              class="border border-gray-400 text-xs px-2 py-1"
              v-if="userData.member"
            >
              Member
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const appwrite = useAppwrite();
const router = useRouter();
const { userData } = stateManager();
const service = userService();
const pubList = ref();
async function getPubs() {
  const pubs = await service.getPubsForAuthor(userData.value.username);
  if (pubs) {
    pubList.value = pubs.documents;
  }
}
getPubs();

function signMeOut() {
  console.log("Sign out clicked.");

  let promise = appwrite.account.deleteSession("current");

  promise.then(
    function (response) {
      console.log(response); // Success
      console.log("Signed out");
      router.push("/");
    },
    function (error) {
      console.log(error); // Failure
    }
  );
}
</script>
<style>
.animated {
  background-repeat: no-repeat;
  background-position: left top;
  padding-top: 95px;
  margin-bottom: 60px;
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
