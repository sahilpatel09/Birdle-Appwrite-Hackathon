<template>
  <div class="animated fadeIn z-40">
    <div
      class="w-80 h-[490px] bg-white shadow fixed lg:left-1 lg:bottom-20 lg:top-10 left-0 bottom-14 z-20 globalfont shadow-2xl"
    >
      <div class="overflow-y-scroll w-full h-full">
        <div class="px-8 my-5 text-sm">
          <h2 class="text-green-500">Gift a membership</h2>
        </div>

        <hr class="mt-5 w-full" />
        <div class="px-8 py-8">
          <ul class="flex flex-col gap-5 text-sm leading-5">
            <li><button @click="signMeOut">Sign out</button></li>
            <li>Medium Partner Program</li>
            <li>Refine reccmmendations</li>
            <li>Stats</li>
            <li>Settings</li>
          </ul>
        </div>

        <hr class="w-full" />

        <div class="px-8 py-8 text-sm">
          <h2 class="text-sm">Manage Publications</h2>
          <div class="flex flex-col gap-1 py-2">
            <div class="flex items-center px-3 py-2 gap-3">
              <img
                src="https://miro.medium.com/fit/c/32/32/1*w4v49zQwQYxikMN4OZ5dYw.jpeg"
                class="rounded-full"
              />
              <h3>Inner Poetry</h3>
            </div>

            <div class="flex items-center px-3 py-2 gap-3">
              <img
                src="https://miro.medium.com/fit/c/32/32/1*w4v49zQwQYxikMN4OZ5dYw.jpeg"
                class="rounded-full"
              />
              <h3>STwGK</h3>
            </div>

            <div class="flex items-center px-3 py-2 gap-3">
              <img
                src="https://miro.medium.com/fit/c/32/32/1*w4v49zQwQYxikMN4OZ5dYw.jpeg"
                class="rounded-full"
              />
              <h3>Inspired Motivation</h3>
            </div>
          </div>
        </div>

        <hr class="w-full" />

        <div class="w-full flex gap-2 justify-center py-6">
          <img
            src="https://miro.medium.com/fit/c/32/32/1*Er7O8VRVE5TGeJfowJDM1w.png"
            class="w-10 h-10 rounded-full"
          />
          <div class="flex flex-col">
            <h2>Sahil Patel</h2>
            <h3>@smppatel999</h3>
          </div>

          <div class="flex flex-col-reverse items-center justify-center">
            <div class="border border-gray-400 text-xs px-2 py-1">Member</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  
  const appwrite = useAppwrite()
  const router = useRouter()
  function signMeOut(){
    console.log("Sign out clicked.")

    let promise = appwrite.account.deleteSession('current');

    promise.then(function (response) {
        console.log(response); // Success
        console.log("Signed out")
        router.push('/')

    }, function (error) {
        console.log(error); // Failure
    });


  }

</script>
<style>
.animated {
  background-repeat: no-repeat;
  background-position: left top;
  padding-top: 95px;
  margin-bottom: 60px;
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
