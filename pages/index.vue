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
const { isLoggedin } = useAppwrite();

const { hpToggler } = stateManager();
const router = useRouter();
const loggedin = ref(false)

setTimeout(()=>{

   if(isLoggedin){
    loggedin.value = true
   }

 }, 200);

</script>

<style scoped></style>
