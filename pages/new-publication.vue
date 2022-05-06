<template>
  <div>
    <div class="container mx-auto lg:px-20 px-10 py-5">
      <div class="flex items-center justify-between mb-10">
        <div class="flex items-center gap-3">
          <div>
            <img src="@/assets/img/3.png" class="w-10" alt="" />
          </div>

          <h3 class="textfont font-medium text-3xl globalfont">Birdle</h3>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="bg-green-700 px-3 py-1 text-white rounded-full font-medium text-sm"
            @click="createPub"
          >
            Create New Publication
          </button>
        </div>
      </div>
      <h2 class="globalfont font-semibold text-5xl px-5">New Publication</h2>

      <hr class="my-2" />

      <h2 class="globalfont font-semibold text-xl px-5">{{ err }}</h2>

      <div class="px-20 py-12 space-y-10">
        <div class="flex items-center justify-center gap-20">
          <label>Name :</label>
          <div class="flex flex-col">
            <input
              type="text"
              v-model="name"
              name=""
              class="w-[660px] h-10 px-3 border-b-2 border-gray-600"
              placeholder="Publication Name"
            />
            <p class="px-3">
              Link to
              <span class="text-black font-bold"
                >medium-lac.vercel.app/YOUR_PUBLICATION_NAME</span
              >
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center gap-20">
          <label>Description :</label>
          <div class="flex flex-col">
            <textarea
              v-model="desc"
              type="text"
              name=""
              class="w-[660px] px-3 border-b-2 border-gray-600"
              placeholder="Write about your publication...."
              maxlength="300"
              rows="3"
              cols="3"
            ></textarea>
            <p class="px-3">
              Description in detil about your publication.<span
                class="text-black font-bold"
                >Max 300 characters.</span
              >
            </p>
          </div>
        </div>

        <div class="flex items-center ml-10 gap-20">
          <label>Publication Logo :</label>
          <div class="flex flex-col">
            <input
              type="file"
              accept="image/*"
              name=""
              class="px-3"
              v-on:change="send($event)"
            />
            <p class="px-3">Choose a logo of 300px * 300px.</p>
          </div>
          <img
            :src="pubImageShowURL"
            alt=""
            v-if="pubImageShowURL"
            class="w-40 border-2 border-gray-400"
          />
        </div>

        <div class="flex items-center gap-20">
          <div>
            <label for="">Add writers to your pub</label>
            <p class="italic">Without @ symbol</p>
          </div>
          <div
            class="w-[640px] flex items-center justify-start p-2 flex-wrap bg-gray-200"
          >
            <div
              v-for="(tag, index) in writers"
              :key="index"
              class="bg-gray-200 p-2"
            >
              <div class="text-sm bg-gray-400 px-3 py-1 rounded-full ml-0.5">
                {{ tag }}
                <button @click="removeItem(tag)">x</button>
              </div>
            </div>

            <input
              type="text"
              name="taginput"
              @change="addItem()"
              class="bg-gray-200 w-full min-w-fit max-w-fit focus:border-none hover:border-none focus:outline-none hover:outline-none"
              v-model="tagInput"
              placeholder="Add a tag..."
            />
            <input type="submit" class="hidden" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth", "pageload"],
});
const name = ref("");
const desc = ref("");
const pubImageShowURL = ref();
const uploadImage = ref();
const tagInput = ref();
const writers = ref([]);
const { userData } = stateManager();
const service = userService();
const err = ref("");
const router = useRouter();

if (userData.value) {
  writers.value.push(userData.value.username);
}
function send(ev) {
  pubImageShowURL.value = URL.createObjectURL(ev.target.files[0]);
  uploadImage.value = ev.target.files[0];
}
function addItem() {
  writers.value.push(tagInput.value);
  console.log(writers.value.length);
  tagInput.value = "";
}
function removeItem(index) {
  writers.value = writers.value.filter((item) => item !== index);
  console.log(writers.value);
}

async function setImage() {
  console.log("Entered");
  if (!uploadImage.value == "") {
    const userImage = uploadImage.value;
    const newName = name.value;

    const newImageFile = new File(
      [userImage],
      newName + "." + userImage.name.split(".")[1]
    );
    console.log(newImageFile);
    const upload = await service.uploadImage(newImageFile);

    console.log("NEW UPLOAD ID", upload.$id);
    uploadImage.value = upload.$id;
  } else {
    console.log("Entered AGAIN");
    err.value = "Please choose publication logo.";
    console.log("DIDNT UPLOAD");
  }
}

async function createPub() {
  const settingImage = await setImage();

  const dataObject = {
    img: uploadImage.value,
    name: name.value,
    subtitle: desc.value,
    url: name.value.split(" ").join("-"),
    followers_count: 0,
    writers: writers.value,
    user_id: userData.value.$id,
  };

  for (var key in dataObject) {
    if (dataObject[key] === "") {
      console.log(key);
      err.value = "Please fill all the values.";
    } else {
    }
  }

  // const create = await service.createPub(
  //   userData.value.$id, uploadImage.value,
  //   name.value,desc.value,name.value.split(" ").join("-"),0,writers.value
  //   );

  const create = await service.createPub(dataObject);

  if (create) {
    console.log("Created");
    router.go("/" + url.value);
  }
}
</script>
