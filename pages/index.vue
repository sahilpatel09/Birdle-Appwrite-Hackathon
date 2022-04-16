<template>
  <div v-if="loggedin">
    <NavHero />
    <TrendingPosts />
    <hr class="border border-gray-50 mb-10" />
    <LoginModel :class="{ hidden: hpToggler }" class="mb-16" />
    <PostwithSidebar />
  </div>
</template>

<script setup>
const { appwrite } = useAppwrite()
const router = useRouter();
const loggedin = ref(false);

const { hpToggler } = stateManager()


onBeforeMount(()=>{
  
  appwrite
          .account.get()
          .then((user) => {
            router.push('/me')
          })
          .catch((err) => {
            loggedin.value = true
            console.log(loggedin.value)   
          });

})

  

  

</script>

<style scoped></style>
