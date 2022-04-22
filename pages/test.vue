<template>
  <div>Test 2 Page</div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
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
