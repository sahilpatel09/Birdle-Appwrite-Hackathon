<template>
  <div class="flex flex-col justify-center items-center py-28 space-y-10">
    <h2 class="modelTitle mt-20 font-sans lg:text-4xl text-3xl">
      Sign up with email
    </h2>
    <p class="text-center hidden">
      Enter your email address to create an account.
    </p>

    <p class="text-center">Your email</p>

    <input
      type="email"
      name="email"
      v-model="emailValue"
      class="border-b border-black text-center my-4 w-44 mx-auto outline-0 focus:outline-0 hover:outline-0"
      autofocus
    />

    <button
      @Click="sendLink"
      class="focus:bg-red-200 my-4 px-10 py-2 bg-black rounded-full text-white mx-auto"
    >
      Continue
    </button>

    <h3 class="font-normal text-center" @Click="toggleEmail">
      <span class="font-bold text-green-700">&#60; All Sign up options</span>
    </h3>
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
const emailValue = ref("");
const { loginwith } = stateManager();
const emailSent = isEmailSent();

const { useMagicEmail } = stateManager();

function toggleEmail() {
  loginwith._object.state = true;
}

const appwrite = useAppwrite();

function sendLink() {
  let promise = appwrite.account.createMagicURLSession(
    "unique()",
    emailValue.value,
    "https://medium-lac.vercel.app/me/"
  );

  promise.then(
    function (response) {
      console.log(response); // Success
      useMagicEmail.value = emailValue.value;
      emailSent._object.emailsent = false;
    },
    function (error) {
      console.log(error); // Failure
    }
  );
}
</script>
