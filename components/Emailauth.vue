<template>
	<div class="flex flex-col justify-center items-center py-28 space-y-10">
		<h2 class="modelTitle mt-20 font-sans lg:text-4xl text-3xl">Sign up with email</h2>
		<p class="text-center hidden">Enter your email address to create an account.</p>

		<p class="text-center">Your email</p>


		<input type="email" name="email" 
		v-model="emailValue"
		class="border-b border-black text-center my-4 w-44 mx-auto outline-0 focus:outline-0 hover:outline-0" autofocus/>
			
		<button @click="sendLink" class="my-4 px-10 py-2 bg-black rounded-full text-white mx-auto">
			Continue
		</button>		

		<h3 class="font-normal text-center" @Click="toggleEmail">
		  <span class="font-bold text-green-700">&#60; All Sign up options</span>
		</h3>


	</div>
</template>
<style>
	.modelTitle {
  font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  color: rgba(8, 8, 8, 1);

  line-height: 32px;
  text-align: center;
}
</style>
<script setup>
import { Appwrite } from "appwrite";
	const emailValue = ref('')
	const changeEmail = useEmailProvider()
	const appwrite = useAppwrite()

  function toggleEmail(){
    changeEmail._object.state = true
  }
  function sendLink(){
  	console.log(emailValue.value)

  	appwrite.account.createOAuth2Session('google');


  }
</script>