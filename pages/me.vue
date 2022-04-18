<template>
  <div>
  <div class="flex h-screen overflow-hidden" v-if="loggedin">
    <div
      class="menu bg-indigo-300 w-full h-20 bottom-0 left-0 right-0 fixed lg:w-20 lg:h-screen lg:relative
      z-10"
    >
      
    </div>





    <div class="middlebar lg:w-9/12 w-full lg:px-14
    lg:flex-1 lg:flex overflow-hidden">
        <div class="flex-1 overflow-y-scroll rel">
      
      <NuxtChild />    
      
      </div>
    </div>



















    <div class="sidebar bg-yellow-200 hidden lg:block lg:w-4/12 fixed top-0 right-0 bottom-0 relative">
      
    </div>

  </div>
  <div v-else>
    <Loading />
    <h2 class="flex">{{ errorval }} </h2>    
  </div>

  </div>
</template>

<style scoped>
.bo {
  height: 25px;
}
.hu {
  fill: rgb(0, 0, 0);
}
.greendot {
  background-color: rgb(15, 115, 12);
  flex: 0 0 auto;
  border-radius: 50%;
  width: 8px;
  margin-bottom: 1px;
  margin-right: 8px;
  display: inline-block;
}
</style>
<script setup>
const route = useRoute();
const router = useRouter();
const errorval = ref('')
const loggedin = ref(false)
const appwrite = useAppwrite();
const { user } = stateManager();
// setTimeout(()=>{
//   console.log(user)
// }, 500);


function getUser(){

let promise = appwrite.account.get();
promise.then(function (response) {
    console.log(response); // Success
    user.value = response
    loggedin.value = true
}, function (error) {
    router.push('/')
});


}


function authenticateUser(id, secret){

let promise = appwrite.account.updateMagicURLSession(id, secret);
promise.then(function (response) {
    console.log(response); // Success
    getUser();
}, function (error) {
    console.log(error); // Failure
    errorval.value = error
});


}

const uid= route.query.userId
const secretsauce = route.query.secret

if(uid && secretsauce){
  
  authenticateUser(uid, secretsauce);

}else{
  
  console.log("No parameters")
  getUser();

}







</script>
