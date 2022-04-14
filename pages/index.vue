<template>
<NavHero />

<TrendingPosts />

<hr class="border border-gray-50 mb-10">

<LoginModel :class="{ hidden: ishidden }" class="mb-16"/>

<PostwithSidebar />






</template>

<script setup>
  import { ref } from 'vue'
  const ishidden = ref(true)

  const openIt = () =>{
    ishidden = false
  }

</script>

<style scoped>

</style>