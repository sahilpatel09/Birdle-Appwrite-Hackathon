<template>
  <div>
    <div class="container mx-auto lg:px-20 px-10 py-5">
      <div class="flex items-center justify-between mb-10">
        <div class="flex items-center gap-3">
          <div>
            <img src="@/assets/img/3.png" class="w-10" alt="" />
          </div>
          <h3 class="textfont font-medium text-base">
            Draft in Sahil Patel - {{ readtingTime }} min read time
          </h3>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="bg-green-700 px-3 py-1 text-white rounded-full font-medium text-sm"
            @click="getPubDataAndPopulate"
          >
            Publish
          </button>

          <img
            src="@/assets/img/three-dots.svg"
            class="w-4"
            alt=""
            @click="openPostSettings"
          />
          <div
            class="bg-green-600 rounded-full w-8 h-8 text-white flex items-center justify-center"
          >
            5
          </div>
          <div>
            <img
              src="https://cdn-images-1.medium.com/fit/c/32/32/1*Er7O8VRVE5TGeJfowJDM1w.png"
              class="w-9 h-9 rounded-full"
            />
          </div>
          <div
            class="inline-block relative top-5 -left-32"
            :class="{ hidden: !postSettings }"
          >
            <div
              class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"
            >
              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Add to Publication
              </a>

              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >Share draft link</a
              >

              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >Shre to Twitter</a
              >

              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Change Tags</a
              >

              <a
                href="#"
                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >More Help</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="lg:mx-24 space-y-4">
        <input
          type="text"
          name="postName"
          v-model="postName"
          class="text-4xl outline-none placeholder:font-semibold placeholder:text-black placeholder:font-serif text-gray-400 w-full h-auto border-l-4 pl-3 border-gray-300"
          placeholder="Title"
        />

        <input
          type="text"
          name="postSubtitle"
          v-model="subtitle"
          class="text-4xl border-l-4 pl-3 border-gray-300 outline-none placeholder:font-semibold placeholder:text-black placeholder:font-serif text-gray-400 w-full h-auto wr"
          placeholder="Subtitle"
          autofocus
        />

        <input
          type="text"
          name="postSubtitle"
          v-model="img"
          class="text-4xl border-l-4 pl-3 border-gray-300 outline-none placeholder:font-semibold placeholder:text-black placeholder:font-serif text-gray-400 w-full h-auto wr"
          placeholder="ImageUrl"
        />

        <editor
          class="w-full h-[550px]"
          v-model="content"
          @focusOut="getTime"
          aoi-key="z290k9fet3sz2vd7j30x978cw5k2bfau7mw62cywz9w5cg17"
          :init="{
            menubar: false,
            paste_data_images: true,
            paste_as_text: true,
            plugins: 'lists link image emoticons paste help wordcount autosave',
            toolbar:
              'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons preview',
            images_upload_handler: function (blobInfo, success, failure) {
              console.log(blobInfo);
            },
          }"
          @dragDrop="getImage(e)"
        />
      </div>

      <div
        class="w-screen h-screen shadow-2xl bgTainted fixed inset-0 z-50 flex items-center justify-center"
        :class="{ hidden: pubAlter }"
      >
        <div class="bg-gray-500 w-[1080px] h-[570px] flex">
          <!--             <div class="w-full h-10 bg-red-300 flex items-center justify-center py-3">
              <h3>X</h3>
            </div> -->
          <div class="w-1/2 h-full px-6 flex">
            <div class="w-full my-4">
              <h2 class="globalfont font-bold text-lg">Story Preview</h2>
              <div class="w-full">
                <img :src="img" />
              </div>
              <input
                type="text"
                name=""
                v-model="postName"
                class="w-full my-2 border-b-2 border-gray-600"
              />
              <br />
              <input
                type="text"
                name=""
                v-model="subtitle"
                class="w-full my-2 border-b-2 border-gray-600"
              />
              <p class="text-gray-400">
                Note: Changes here will affect how your story appears in public
                places like Medium’s homepage and in subscribers’ inboxes — not
                the contents of the story itself.
              </p>
            </div>
          </div>

          <div class="w-1/2 h-full px-6">
            <div class="my-4">
              <div class="flex justify-between">
                <h2 class="globalfont font-bold text-lg">Publications</h2>
                <button
                  class="globalfont font-bold text-lg"
                  @click="alterpopup"
                >
                  X
                </button>
              </div>

              <select name="pubs" id="pubs" @change="printPub($event)">
                <option value="self" selected>Self</option>
                <option
                  :value="pub.$id + '-' + pub.url + '-' + pub.img"
                  v-for="pub in pubs"
                >
                  {{ pub.name }}
                </option>
              </select>

              {{ pub }}
              <br />
              <div
                class="mt-20 w-full flex items-center justify-start p-2 flex-wrap bg-gray-200"
              >
                <div
                  v-for="(tag, index) in tagsArray"
                  :key="index"
                  class="bg-gray-200 p-2"
                >
                  <div
                    class="text-sm bg-gray-400 px-3 py-1 rounded-full ml-0.5"
                  >
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

            <button
              class="rounded-full bg-green-700 px-5 py-2 text-white"
              @click="chooseTheWay($event)"
              name="publish"
            >
              Publish Story
            </button>
            <button
              class="ml-2 rounded-full bg-green-700 px-5 py-2 text-white"
              @click="chooseTheWay($event)"
              name="draft"
            >
              Make a Draft
            </button>
          </div>
        </div>
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
const postName = ref("");
const content = ref("Tell your story...");
const subtitle = ref("");
const status = ref("self");
const pub = ref(false);
const uuid = (Math.random() + 1).toString(16).substring(2);
const { user, userData } = stateManager();
const service = userService();
const img = ref("");
const readtingTime = ref("0");
const pubAlter = ref(true);
const pubs = ref("");
const tagsArray = ref(["Science", "Fiction"]);
const tagInput = ref("");
const pubName = ref("");
const pubImage = ref("");

function getTime(event, editor) {
  var wordcount = tinymce.activeEditor.plugins.wordcount;
  const count = wordcount.body.getWordCount();
  readtingTime.value = Math.ceil(count / 200)
    .toString()
    .split(".")[0];
}

function printPub(ev) {
  console.log();
  if (ev.target.value === "self") {
    console.log("NO PUB");
  } else {
    const data = ev.target.value.split("-");
    pub.value = data[0];
    pubName.value = data[1];
    pubImage.value = data[2];
  }
}

function chooseTheWay(ev) {
  if (ev.target.name === "publish") {
    console.log("1");
    printIt(1);
  } else {
    console.log(0);
    printIt(0);
  }
}

async function getPubDataAndPopulate() {
  pubAlter.value = false;
  console.log(userData.value.username);
  const pubsAuthor = await service.getPubsForAuthor(userData.value.username);
  console.log(pubsAuthor.documents);
  pubs.value = pubsAuthor.documents;
}

function alterpopup() {
  pubAlter.value = !pubAlter.value;
}

function addItem() {
  if (tagInput.value && tagsArray.value.length < 4) {
    tagsArray.value.push(tagInput.value);
    console.log(tagsArray.value.length);
    tagInput.value = "";
  }
}
function removeItem(index) {
  tagsArray.value = tagsArray.value.filter((item) => item !== index);
  console.log(tagsArray.value);
}

async function printIt(publishedTag) {
  let url = "";
  const posturl = postName.value.split(" ").join("-").replace(/[^a-zA-Z-]/g, "") + "--" + uuid.toString();
  console.log(posturl)

  if (pub.value) {
    console.log("IS PUB");
    status.value = "pub";
    url = "/" + pubName.value + "/" + posturl;
  } else {
    console.log("IS NOT PUB");
    url = "/@" + userData.value.username + "/" + posturl;
  }
  console.log(url)
  if (img.value == "") {
    img.value =
      "https://res.cloudinary.com/sahil-patel/image/upload/v1650717661/finocrunch/appwritehack/3_cafwnv.png";
  }

  if (postName.value === "" && subtitle.value === "" && img.value === "") {
    alert("Please fill in fields.");
  } else {
    const creatPost = await service.publishThePost(
      postName.value,
      content.value,
      subtitle.value,
      status.value,
      pub.value.toString(),
      url,
      img.value,
      readtingTime.value,
      user.value.$id,
      userData.value.username,
      tagsArray.value,
      pubName.value,
      userData.value.name,
      userData.value.img,
      pubImage.value,
      publishedTag
    );
    if (creatPost) {
      console.log("CREATED");
      console.log("ROUTING URL", url);
      router.push(url);
    } else {
      console.log("COULD NOT CREATE THE POST");
    }
  }
}
</script>

<script>
import Editor from "@tinymce/tinymce-vue";
// import user from "@/composables/stateManager"

export default {
  name: "New-story",
  components: {
    editor: Editor,
  },
  data() {
    return {
      postSettings: false,
    };
  },
  methods: {
    openPostSettings() {
      console.log(this.postSettings);
      this.postSettings = !this.postSettings;
    },
    getImage(e) {
      console.log(e);
    },
    handleImages(blobInfo, success, failure, progress) {
      console.log("Something Uploaded.");
    },
  },
};
</script>

<style scoped>
.bgTainted {
  background: rgba(0, 0, 0, 0.6);
}
</style>
