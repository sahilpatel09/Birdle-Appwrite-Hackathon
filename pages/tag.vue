<template>
  <div class="block" v-if="loggedin">
    <div class="max-w[1504px] m-auto block">
      <!-- 3 container -->
      <div class="flex flex-row justify-between">

        <UsersMenuToolbar />

        <!-- Main Section -->
        <NuxtChild />
      </div>
    </div>

    <UserBottomLeftMenu
      :class="{ hidden: globalMenuState }"
      class="z-50"
      v-if="userData"
    />
  </div>
  <div v-else>
    <Loading />
    <h2 class="flex">{{ errorval }}</h2>
  </div>
</template>

<script setup>

const route = useRoute();
const router = useRouter();
const errorval = ref("");
const loggedin = ref(false);
const service = userService();
const { user, userData,globalMenuState } = stateManager();

async function getUserData() {
  const logged = await service.getAuthStatus();
  if (logged) {
    const { userInfo, currentUserData } =
      await service.setUpUserForPageReload();
    user.value = userInfo;
    userData.value = currentUserData;
  }

  loggedin.value = true;
}

getUserData();
</script>
