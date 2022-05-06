<template>
  <div class="mx-6 my-4">
    <div class="lg:flex flex-col lg:gap-2 justify-center">
      <div class="flex items-center justify-between py-4">
    
      <h3
        class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont p-3"
      >
        Your Stories
      </h3>

      <div class="flex gap-4 items-center justify-center">
        <button class="bg-green-700 px-4 py-2 rounded-full text-white text-sm font-semibold">
          <NuxtLink to="/new-story">
         Write a story 
         </NuxtLink>
        </button>
        <button class="line-through border border-gray-400 px-4 py-2 rounded-full text-sm font-semibold"> Import a story </button>
      </div>

      </div>


      <div class=" flex gap-7 p-3">
        <div class="globalfont text-sm underline">
          <button @click="changePosts('draft')" 
          class="focus:underline focus:underline-offset-2" :class="{ 'focus:underline': showPostList, 'focus:underline-offset-2': showPostList  }">Draft</button>
        </div>

        <div class="globalfont text-sm">
          <button @click="changePosts('draf')"
          :class="{ 'focus:underline': showPostList, 'focus:underline-offset-2': showPostList  }"
          >Published</button>
        </div>


      </div>

      <hr class="bg-gray-200 w-full h-0.5" />

      
      <div v-if="showPostList">
          
          <div v-if="postList == ''" class="w-full h-96 flex p-4">
            Nothing is published yet.
          </div>


        <div class="w-full" v-for="post in postList" :key="post.$id">

        <h2 class="globalfont font-bold text-lg">{{ post.name }}</h2>
        <p class="text-gray-400 globalfont">{{ post.subtitle }}</p>
        <p class="text-sm flex gap-1 items-center">Last Edited about 2 hours ago <span class="rm">·</span> {{post.readTime}} min read ({{extractContent(post.content)}} words) so far</p>

          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
          @click="openStoryMenuHandlerPublished(post)"
             width="20px" height="20px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"
             xml:space="preserve">
          <g>
            <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695  "/>
          </g>
          </svg>


          <div class="inline-block relative top-0" :class="{ hidden: !post.isavailable }">
            <div class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a :href="'/p/'+post.$id" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Edit draft </a>

              <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" @click="delPost(post.$id)"> Delete draft </a>
              </div>
          </div>

        
        
      </div>

      </div>

      <div v-else>
        
        <div v-if="draftPosts == ''" class="w-full h-96 flex p-4">
          No draft posts available.
        </div>

        <div class="w-full" v-for="post in draftPosts" :key="post.$id">

        <h2 class="globalfont font-bold text-lg">{{ post.name }}</h2>
        <p class="text-gray-400 globalfont">{{ post.subtitle }}</p>
        <p class="text-sm flex gap-1 items-center">Last Edited about 2 hours ago <span class="rm">·</span> {{post.readTime}} min read ({{extractContent(post.content)}} words) so far

          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
          @click="openStoryMenuHandlerPublished(post)"
             width="20px" height="20px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"
             xml:space="preserve">
          <g>
            <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695  "/>
          </g>
          </svg>


          <div class="inline-block relative top-0" :class="{ hidden: !post.isavailable }">
            <div class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
              <a :href="'/p/'+post.$id" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" > Edit draft </a>
              <a class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" @click="delPost(post.$id)"> Delete draft </a>
              </div>
          </div>
        </p>

        
        
      </div>


      </div>


    </div>
  </div>
</template>
<script setup>
  definePageMeta({
  middleware: ["auth","pageload"],
  // or middleware: 'auth'
});

  const openStoryMenu = ref(true)
  const openStoryMenuPublished = ref(true)
  const service = userService()
  const router = useRouter()
  const { userData } = stateManager()
  const postList = ref("")
  const draftPosts = ref("")
  const showPostList = ref(false)


  function changePosts(str){
    if(str=="draft"){
    showPostList.value = false
  }else{
    showPostList.value = true
  }
}

async function delPost(id){
  const post = await service.deletePost(id)
  if(post){
    router.go("")
  }
}


  function openStoryMenuHandler(){
    openStoryMenu.value = !openStoryMenu.value
  }

    function openStoryMenuHandlerPublished(post){
    post.isavailable = !post.isavailable    
    // openStoryMenuPublished.value = !openStoryMenuPublished.value
  }



  async function getPosts(){
    const posts = await service.getCurrentUserPosts(userData.value.$id)
    if(posts){
      postList.value = posts.documents.filter(item => item['published'] !== 0)
      draftPosts.value = posts.documents.filter(item => item['published'] !== 1)

    }else{
      console.log("ERROR")
    }
  }
  getPosts()

  function extractContent(html) {
    return new DOMParser()
        .parseFromString(html, "text/html")
        .documentElement.textContent.match(/(\w+)/g).length;
}

</script>