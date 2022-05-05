<template>
  <div>
    <NuxtLink to="/test2">Test 2 Page </NuxtLink>
    <UsersUserAvatar fileid="6262e52c58774b7891ff" />
    <UsersUserNameAvatar name="Sahil Patel" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth", "pageload"],
  // or middleware: 'auth'
});

const haveNotifications = ref(true);
const menu = ref(true);

const useService = userService();

// async function hello(){
//   const logged = await useService.getAuthStatus();
//   if(logged){
//     console.log("LOGGED")
//   }else{
//     console.log("NOT LOGGED")
//   }

// }
// console.log(hello())

function openIt() {
  menu.value = !menu.value;
}
</script>
