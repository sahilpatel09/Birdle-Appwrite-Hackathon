<template>
  <NuxtLayout name="authmodel">
    <span class="flex flex-row-reverse">
      <button @Click="toggleHp">
        <svg class="iy" width="29" height="29">
          <path
            d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </span>

    <LoginView v-if="loginwith" />
    <Emailauth v-else-if="emailSent" />
    <MagicLinkSent v-else />
  </NuxtLayout>
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
const { hpToggler, toggleHp } = stateManager();
const { loginwith } = stateManager();
const emailSent = isEmailSent();
</script>
