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
          @click="updatedoc(userObj)"
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
          v-model="userObj.username"
          class="w-40 py-2 text-lg rounded border pl-2"
          :disabled="toggler.usernameShow"
          :class="{ 'border-gray-700': !toggler.usernameShow }"
        />
        <p class="text-gray-400 py-2">
          The old links won't work if you change the username.
        </p>
        <br />
        <button
          v-if="!toggler.usernameShow"
          class="p-4 py-2 bg-green-700 text-white rounded"
          @click="updatedoc(userObj)"
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
          class="w-[700px] my-2 py-2 text-lg rounded border pl-2"
          :disabled="toggler.bioShow"
          :class="{ 'border-gray-700': !toggler.bioShow }"
        ></textarea>
        <button
          v-if="!toggler.bioShow"
          class="p-4 py-2 bg-green-700 text-white rounded"
          @click="updatedoc(userObj)"
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

        <img :src="userObj.img" class="rounded-full" alt="" />

        <div class="profile lg:block" @click="openIt" v-if="userObj">
          <UsersUserAvatar v-if="userObj.img" :fileid="userObj.img" />
          <UsersUserNameAvatar :name="userObj.name" v-else />
        </div>
        <input
          type="file"
          id="img"
          name="img"
          v-on:change="sendImage($event)"
          accept="image/*"
          v-if="!toggler.imgUrlShow"
        />
        <!--        <button
        v-if="!toggler.imgUrlShow"
        @click="sendImage"
        class="p-4 py-2 bg-green-700 text-white rounded"
        >Save</button> -->
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth", "pageload"],
  // or middleware: 'auth'
});

const router = useRouter();

const userObj = ref({
  name: "",
  username: "@smppatel999",
  bio: "WHO AM I? The cool guy from somewhere is here on the go to be the bext on the go lorem ipsum dorel sit amet la un mone dcore de mone jone loter.",
  picture:
    "https://cdn-images-1.medium.com/fit/c/80/80/1*Er7O8VRVE5TGeJfowJDM1w.png",
  member: true,
});

const toggler = ref({
  nameShow: true,
  usernameShow: true,
  bioShow: true,
  imgUrlShow: true,
});

const imgFile = ref("");

const service = userService();

async function sendImage(event) {
  console.log("BEFORE UPLOAD", userObj.value);
  const userImage = event.target.files[0];
  const newName = userObj.value.username + "@" + userObj.value.img;

  const newImageFile = new File(
    [userImage],
    newName + "." + userImage.name.split(".")[1]
  );
  console.log(newImageFile);
  const upload = await service.uploadImage(newImageFile);
  console.log("IMAGE VALUE BEFORE", userObj.value.img);
  userObj.value.img = upload.$id;
  console.log("NEW UPLOAD ID", upload.$id);
  console.log("IMAGE VALUE AFTER", userObj.value.img);

  updateData(userObj.value.$id, userObj.value);
}

async function receiveData() {
  const data = await service.currentUserData();
  userObj.value = data;
  console.log("VALUES", userObj.value);
}
receiveData();

function updatedoc(userObj) {
  updateData(userObj.$id, userObj);
}

async function updateData(id, obj) {
  console.log("Entered UpdateData");
  const update = await service.updateProfileDocument(id, obj);
  if (update) {
    console.log("ROUTING");

    setTimeout(() => {
      router.go("");
    }, 1200);
  }
}

function toggle(e) {
  console.log(toggler.value[e]);
  toggler.value[e] = !toggler.value[e];
}
</script>
