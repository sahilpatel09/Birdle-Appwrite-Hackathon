<template>
  <div>
  <div v-if="loggedin">
    <NavHero />
    <TrendingPosts />
    <hr class="border border-gray-50 mb-10" />
    <LoginModel :class="{ hidden: hpToggler }" class="mb-16" />
    <PostwithSidebar />
  </div>
  <Loading v-else/>
  </div>
</template>

<script setup>
const { hpToggler } = stateManager();
const router = useRouter()
const loggedin = ref(false)
const appwrite = useAppwrite();

let promise = appwrite.account.get();

promise.then(function (response) {

    console.log(response); // Success
    router.push('/me')

}, function (error) {

    loggedin.value = true

});

</script>
<style>
.globalfont {
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>