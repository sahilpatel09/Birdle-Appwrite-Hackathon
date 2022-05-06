<template>
  <div class="mx-6 my-4">
    <div class="lg:flex flex-col lg:gap-2">
      <h3
        class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont p-3"
      >
        Lists
      </h3>

      <div class="my-1 flex gap-3 p-3">
        <div class="globalfont text-sm">
          <h3>All</h3>
        </div>

        <div class="globalfont text-sm">
          <h3>Responses</h3>
        </div>
      </div>

      <h2
        class="text-gray-900 font-extrabold text-left text-3xl tracking-tight globalfont p-3"
      >
        Not implemented yet. :(
      </h2>

      <hr class="bg-gray-200 w-full h-0.5" />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth", "pageload"],
  // or middleware: 'auth'
});
</script>
