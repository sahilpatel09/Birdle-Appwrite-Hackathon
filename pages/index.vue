<template>
  <div>
      <div v-if="loading">
        <NavHero />
        <TrendingPosts :posts="randomePosts"/>
        <hr class="border border-gray-50 mb-10" />
        <LoginModel :class="{ hidden: hpToggler }" class="mb-16" />
        <PostwithSidebar :posts="postList" :tagList="tags"/>
      </div>

      <Loading v-else/>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const postList = ref("")

const service = userService()
const { hpToggler } = stateManager();
const router = useRouter();
const loading = ref(false)
const randomePosts = ref([])
const tags = ref([])

async function getPosts(){
  const posts = await service.getzHomeFreePosts();
  console.log(posts.documents)
  postList.value = posts.documents.slice(6)
  
  randomePosts.value = posts.documents.slice(0,6)
  tags.value = setTags(posts.documents)
  loading.value = true
}
getPosts()

function setTags(arr){
  let publictags = [];

  let val = 0;

  while (val < arr.length) {
    if (val < 5) {
      let item = arr[val].tags[0];
      if (!publictags.includes(item)) publictags.push(item);
      val++;
    } else {
      break;
    }
  }

return publictags
}

</script>
<style>
.globalfont {
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.textfont {
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
</style>
