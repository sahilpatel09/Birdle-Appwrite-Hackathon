<template>
  <div>
    <h2>Welcome to lists.</h2>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth", "pageload"],
  // or middleware: 'auth'
});
</script>
