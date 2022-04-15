<template>
  <NuxtLayout name="authmodel">

    <span class="flex flex-row-reverse">
      <button @Click="changeIt">
        <svg class="iy" width="29" height="29">
          <path
            d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </span>

    <LoginView v-if="loginwith"/>
    <Emailauth v-else/>

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

const val = useState();
const loginwith = useEmailProvider()

function changeIt() {
  if (val._object.open == false) {
    val._object.open = true;
  } else {
    val._object.open = false;
  }
}

</script>
