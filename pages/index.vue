<template>
  <div>
    <NavHero />
    <TrendingPosts />
    <hr class="border border-gray-50 mb-10" />
    <LoginModel :class="{ hidden: isMenuOpen }" class="mb-16" />
    <PostwithSidebar />
  </div>
</template>

<script setup>
const isMenuOpen = useState("open", () => {
  return true;
});

// const config = useRuntimeConfig();
// console.log(config.API_BASE_URL)
</script>

<style scoped></style>
