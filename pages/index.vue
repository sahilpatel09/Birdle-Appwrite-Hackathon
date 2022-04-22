<template>
  <div>
    <Suspense>
      <div>
        <NavHero />
        <TrendingPosts />
        <hr class="border border-gray-50 mb-10" />
        <LoginModel :class="{ hidden: hpToggler }" class="mb-16" />
        <PostwithSidebar />
      </div>

      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});

const { hpToggler } = stateManager();
const router = useRouter();
const loggedin = ref(true);

// const appwrite = useAppwrite();
// let promise = appwrite.account.get();

// promise.then(
//   function (response) {
//     console.log(response); // Success
//     router.push("/me");
//   },
//   function (error) {
//     loggedin.value = true;
//   }
// );
</script>
<style>
.globalfont {
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.textfont {
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
</style>
