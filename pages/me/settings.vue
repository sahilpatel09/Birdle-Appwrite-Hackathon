<template>
  <div class="mx-6 my-4">
    <div class="lg:flex flex-col lg:gap-2">
      <h3
        class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont py-3"
      >
        Profile
      </h3>

      <hr class="bg-gray-200 w-full h-0.5" />

      <div class="py-4">
        <div class="flex justify-between items-center max-w-2xl">
          <label class="text-lg font-extrabold globalfont capitalize">
            Name
          </label>
          <button
            class="rounded-full p-2 border border-gray-500"
            @click="toggle('nameShow')"
          >
            Edit
          </button>
        </div>

        <input
          type="text"
          name="name"
          v-model="userObj.name"
          class="w-40 py-2 text-lg rounded border pl-2"
          :disabled="toggler.nameShow"
          :class="{ 'border-gray-700': !toggler.nameShow }"
        />
        <button
          v-if="!toggler.nameShow"
          class="p-4 py-2 bg-green-700 text-white rounded ml-4"
        >
          Save
        </button>
      </div>

      <div class="py-4">
        <div class="flex justify-between items-center max-w-2xl">
          <label class="text-lg font-extrabold globalfont capitalize"
            >Username
          </label>
          <button
            class="rounded-full p-2 border border-gray-500"
            @click="toggle('usernameShow')"
          >
            Edit
          </button>
        </div>

        <input
          type="text"
          name="name"
          v-model="userObj.name"
          class="w-40 py-2 text-lg rounded border pl-2"
          :disabled="toggler.usernameShow"
          :class="{ 'border-gray-700': !toggler.usernameShow }"
        />
        <button
          v-if="!toggler.usernameShow"
          class="p-4 py-2 bg-green-700 text-white rounded"
        >
          Save
        </button>
      </div>

      <div class="py-4">
        <div class="flex justify-between items-center max-w-2xl">
          <label class="text-lg font-extrabold globalfont capitalize"
            >Bio</label
          >
          <button
            class="rounded-full p-2 border border-gray-500"
            @click="toggle('bioShow')"
          >
            Edit
          </button>
        </div>

        <textarea
          name="name"
          v-model="userObj.bio"
          class="w-full my-2 py-2 text-lg rounded border pl-2"
          :disabled="toggler.bioShow"
          :class="{ 'border-gray-700': !toggler.bioShow }"
        ></textarea>
        <button
          v-if="!toggler.bioShow"
          class="p-4 py-2 bg-green-700 text-white rounded"
        >
          Save
        </button>
      </div>

      <div class="py-4">
        <div class="flex justify-between items-center max-w-2xl">
          <label class="text-lg font-extrabold globalfont capitalize"
            >Picture</label
          >
          <button
            class="rounded-full p-2 border border-gray-500"
            @click="toggle('imgUrlShow')"
          >
            Edit
          </button>
        </div>

        <img :src="userObj.picture" class="rounded-full" alt="" />
        <input type="file" name="" v-if="!toggler.imgUrlShow" />
      </div>
    </div>
  </div>
</template>
<script setup>
const toggler = ref({
  nameShow: true,
  usernameShow: true,
  bioShow: true,
  imgUrlShow: true,
});

const appwrite = useAppwrite();
const { user, userData } = stateManager();
console.log("DATA", userData.value);

const userObj = ref({
  name: "Sahil Patel",
  username: "@smppatel999",
  bio: "WHO AM I? The cool guy from somewhere is here on the go to be the bext on the go lorem ipsum dorel sit amet la un mone dcore de mone jone loter.",
  picture:
    "https://cdn-images-1.medium.com/fit/c/80/80/1*Er7O8VRVE5TGeJfowJDM1w.png",
  member: true,
});

function toggle(e) {
  console.log(toggler.value[e]);
  toggler.value[e] = !toggler.value[e];
}

// try{

//   let promise = appwrite.database.getDocument('625a2fc009e1c2051230', user.value.$id.toString()).then((res)=>{
//     console.log(res)
//   })

// }catch(e){
//   console.log(e)
// }
</script>
