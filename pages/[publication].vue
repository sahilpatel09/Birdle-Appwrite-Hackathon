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

const route = useRoute();
const router = useRouter();
const errorval = ref("");
const loggedin = ref(false);
const userPubs = ref([]);
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

async function getPubs() {
  const pubs = await service.currentAuthorPubs(
    userData.value.$id.toString(),
    userData.value.username.toString()
  );
  if (pubs) {
    userPubs.value = pubs.documents;
  }
}


</script>
