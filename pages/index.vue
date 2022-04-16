<template>
  <div>
  <div v-if="loggedin">
    <NavHero />
    <TrendingPosts />
    <hr class="border border-gray-50 mb-10" />
    <LoginModel :class="{ hidden: hpToggler }" class="mb-16" />
    <PostwithSidebar />
  </div>
  <div v-else class="flex items-center justify-center fixed inset-0 left-0 right-0 top-0 bottom-0">
    <img src="@/assets/img/medium-logo.png" class="w-20" alt="">
  </div>
  </div>
</template>

<script setup>
const { appwrite } = useAppwrite();
const router = useRouter();
const loggedin = ref(false);

const { hpToggler } = stateManager();

onBeforeMount(() => {
  appwrite.account
    .get()
    .then((user) => {
      router.push("/me");
    })
    .catch((err) => {
      loggedin.value = true;
      console.log(loggedin.value);
    });
});
</script>

<style scoped></style>
