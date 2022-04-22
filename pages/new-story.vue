<template>
  <div>
    <div class="container mx-auto lg:px-20 px-10 py-5">
      <div class="flex items-center justify-between mb-10">
        <div class="flex items-center gap-3">
          <div>
            <img src="@/assets/img/3.png" class="w-10" alt="" />
          </div>
          <h3 class="textfont font-medium text-base">Draft in Sahil Patel {{ readtingTime }}</h3>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="bg-green-700 px-3 py-1 text-white rounded-full font-medium text-sm"
            @click="printIt"
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
    </div>
  </div>
</template>

<script setup>

const postName = ref("");
const content = ref("Tell your story...");
const subtitle = ref("");
const status = ref("self");
const pub = ref("false");
const uuid = (Math.random() + 1).toString(16).substring(2)
const { user } = stateManager();
const service = userService();
const img = ref("")
const readtingTime = ref(0)

function getTime(event, editor){
  var wordcount = tinymce.activeEditor.plugins.wordcount;
  const count = wordcount.body.getWordCount();
  readtingTime.value = Math.ceil(count / 200).toString().split(".")[0]
}

async function printIt() {





  if(postName.value=== "" && subtitle.value=== "" && img.value=== "" ){

    alert("Please fill in fields.")      

  }else{

    const url = postName.value.split(" ").join("-")+"--"+uuid.toString()
    //const url = postName.split(" ").join("-")+"-"+uuid
    const creatPost = await service.publishThePost(
      postName.value,
      content.value,
      subtitle.value,
      status.value,
      pub.value,
      url,
      img.value,
      readtingTime.value
    );
    if (creatPost) {
      console.log("CREATED");
    } else {
      console.log("COULD NOT CREATE THE POST");
    }
    console.log(content.value);




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
