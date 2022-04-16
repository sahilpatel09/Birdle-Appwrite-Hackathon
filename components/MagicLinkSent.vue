<template>
  <div class="flex flex-col justify-center items-center py-28 space-y-10">
    <h2 class="modelTitle mt-20 font-sans lg:text-4xl text-3xl">
      Check your inbox.
    </h2>
    <p class="text-center w-52">
      Click the link we sent to {{ useMagicEmail }} to complete your account
      set-up.
    </p>

    <button
      @click="toggleHp"
      class="my-4 px-10 py-2 bg-black rounded-full text-white mx-auto"
    >
      Ok
    </button>
  </div>
</template>
<style scoped>
.modelTitle {
  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  color: rgba(8, 8, 8, 1);

  line-height: 32px;
  text-align: center;
}
</style>
<script setup>
const { useMagicEmail } = stateManager();
const { toggleHp } = stateManager();
</script>
