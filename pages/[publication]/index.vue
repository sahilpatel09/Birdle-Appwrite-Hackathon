<template>
	<div class="flex justify-between w-full" v-if="loading">
	  
	  <div
	    class="flex-auto mb-0 min-w-0 block bg-white pt-2 lg:pl-10 justify-center items-center lg:ml-20 lg:max-w-[790px] w-full"
	  >
	    <div class="block">
	      <div class="mx-6 my-4">
	        <div class="lg:flex flex-col lg:gap-2 justify-center">
	          <div class="flex items-center justify-between py-4">
	        
	          <h3
	            class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont p-3 capitalize"
	          >
	            {{ pubInfo.name }}
	          </h3>

	          <div class="flex gap-4 items-center justify-center">
	            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" @click="openDrawer">
	              <path
	                fill-rule="evenodd"
	                clip-rule="evenodd"
	                d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
	                fill="#000"
	                data-darkreader-inline-fill=""
	                style="--darkreader-inline-fill: #ffffff"
	              ></path>
	            </svg>

	            <div class="inline-block left-48 top-28 absolute lg:relative lg:left-0 lg:top-0 fadeIn" :class="{ hidden: drawer} ">
	              <div class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
	                <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Edit draft </a>
	                <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Email to subscribers </a>
	                </div>
	            </div>
	          </div>

	          </div>


	          <div class=" flex gap-7 p-3">
	            <div class="globalfont text-sm underline">
	              <h3>Home</h3>
	            </div>

	            <div class="globalfont text-sm">
	              <h3>Lists</h3>
	            </div>


	          </div>

	          <hr class="bg-gray-200 w-full h-0.5" />


	          <div class="w-full">

	            
	            <div class="hidden inline-block">
	              <div class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
	                <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Edit draft </a>
	                <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Email to subscribers </a>
	                <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Delete draft </a>
	                </div>
	            </div>
	            
	          </div>

	          <div v-if="pubPost" class="w-[780px]">
	            
	      
	          <div class="my-3 space-y-10" v-for="(post, index) in pubPost">
	            <div class="flex justify-between gap-5">
	              <div class="space-y-4 pt-3">
	                <div class="flex gap-1 items-center justify-start text-xs lg:text-sm">
	                  
	                  <div class="profile hidden lg:block w-5 h-5" @click="openIt" v-if="pubInfo">
	                    <UsersUserAvatar v-if="pubInfo.img" :fileid="pubInfo.img" /> 
	                    <UsersUserNameAvatar :name="pubInfo.name" v-else />
	                  </div>

	                  <p class="py-1">Published in <span class="font-bold">{{ pubInfo.name }}</span></p>
	                  <p class="text-gray-400 hidden lg:block"><span class="rm">·</span> 1 day ago</p>
	                  <p class="text-gray-600 hidden lg:block"><span class="rm">·</span> Pinned</p>

	                  <svg
	                        class="star-15px_svg__svgIcon-use"
	                        width="15"
	                        height="15"
	                        viewBox="0 0 15 15"
	                        aria-label="Member only content"
	                      >
	                        <path
	                          d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"
	                        ></path>
	                      </svg>
	                </div>

	                <NuxtLink :to="{ path: '/'+post.postUrl }">
	                
	                <h2
	                  class="font-bold lg:text-[22px] text-[16px] capitalize leading-5 font-bold postTitle lg:leading-7 leading-6"
	                >
	                  {{ post.name }}
	                </h2>

	                </NuxtLink>
	                

	                <p class="hidden lg:block postDescription">
	                  {{ post.subtitle }}
	                </p>

	                <div class="flex justify-between items-center">
	                  <div class="flex gap-2 items-center">
	                    <p class="text-gray-400 text-left text-sm">{{ post.readTime }} min read</p>
	                    <button
	                      class="hidden md:block py-0.5 px-2 pill rounded-full whitespace-nowrap"
	                    >
	                      Politics
	                    </button>
	                    <span class="text-base fill-gray-400">
	                      <svg
	                        class="star-15px_svg__svgIcon-use"
	                        width="15"
	                        height="15"
	                        viewBox="0 0 15 15"
	                      >
	                        <path
	                          d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"
	                        ></path>
	                      </svg>
	                    </span>
	                  </div>

	                  <div class="flex gap-2">
	                    <svg
	                      width="30"
	                      height="30"
	                      viewBox="0 0 25 25"
	                      fill="none"
	                      class="ll"
	                    >
	                      <path
	                        d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
	                        fill="#292929"
	                      ></path>
	                    </svg>

	                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" @click="toggleDropDown(post)">
	                      <path
	                        fill-rule="evenodd"
	                        clip-rule="evenodd"
	                        d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
	                        fill="#000"
	                        data-darkreader-inline-fill=""
	                        style="--darkreader-inline-fill: #ffffff"
	                      ></path>
	                    </svg>


	                    <div class="inline-block" :class="{ hidden: !post.showDropDown }">
	                      <div class="absolute z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
	                        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Edit story </a>

	                        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Email to subscribers </a>

	                        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Story Settings </a>

	                        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Story Stats </a>


	                        <a href="#" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Delete story </a>
	                        </div>
	                    </div>





	                  </div>
	                </div>
	              </div>

	              <img
	                :src="post.imgUrl"
	                class="lg:w-[200px] lg:h-[124px] w-[110px] object-cover rounded"
	                alt=""
	              />
	            </div>
	        </div>
	        </div>








	        </div>
	      </div>
	    </div>
	  </div>
	

	          <div
	          class="hidden lg:block w-[400px] block min-h-screen border-l-2 px-10 box-border"
	        >
	          <div class="h-full relative inline-block w-full">
	            <div class="sticky mt-0 block">
	              <div class="min-h-full flex flex-col pt-10">
	                <!-- SEARCH -->
	                <div
	                  class="w-full border border-gray-300 p-2 rounded-full flex"
	                >
	                  <svg
	                    width="25"
	                    height="25"
	                    viewBox="0 0 25 25"
	                    fill="rgba(8, 8, 8, 1)"
	                    data-darkreader-inline-fill=""
	                    style="--darkreader-inline-fill: #ffffff"
	                  >
	                    <path
	                      d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"
	                    ></path>
	                  </svg>
	                  <input type="text" name="" placeholder="Search" />
	                </div>

	                <!-- TWITTER SECTION -->
	                <section class="my-5">

	                  <div class="dataholder">

	                    <div class="profile hidden lg:block" @click="openIt" v-if="pubInfo">
	                      <UsersUserAvatar v-if="pubInfo.img" :fileid="pubInfo.img" /> 
	                      <UsersUserNameAvatar :name="pubInfo.name" v-else />
	                    </div>

	                    <h2 class="globalfont font-bold mt-4 capitalize">{{ pubInfo.name }}</h2>
	                    <h3 class="py-2 text-base text-gray-500">{{ pubInfo.followers_count }} Followers</h3>
	                    <p class="text-gray-600 text-sm">{{ pubInfo.subtitle }}</p>
	                    
	                    <!-- If use is self -->
	                    <h4 class="mt-5 text-gray-700">Edit Profile</h4>
	                    <!-- else -->
	                    <div class="flex gap-3 mt-4 items-center">
	                      <button class="px-4 py-1 text-green-500 border border-green-500 rounded-full">Following</button>

	                      <button class="px-4 py-1 bg-green-700 text-white rounded-full">Follow</button>
	                      <button class="rounded-full bg-green-700 w-16 h-10 py-2 h-fit flex items-center justify-center" title="Subscribe to get a newsletter.">
	                        <img src="@/assets/img/get-email.svg" class="w-5">
	                      </button>


	                    </div>
	                  </div>

	                   <hr class="my-5" />

	                  <div class="w-full px-2">
	                    <h2 class="text-gray-800 font-bold">
	                      Recommended topics
	                    </h2>

	                    <div class="flex flex-wrap gap-2 my-3">
	                      <p
	                        class="px-4 py-1 border border-gray-200 w-fit rounded antialiased text-gray-600"
	                        v-for="item in [
	                          'Data Science',
	                          'Relationships',
	                          'Self',
	                          'Programming',
	                          'Productivity',
	                          'Javascript',
	                          'React',
	                          'Appwrite',
	                          'Hackathon',
	                          'Dev.to',
	                        ]"
	                      >
	                        {{ item }}
	                      </p>
	                    </div>
	                  </div>
	                </section>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div v-else>
	        <Loading />
	      </div>

	
</template>
<script setup>
const pubPost = ref({})
const pubInfo = ref("")
const loading = ref(false)
const drawer = ref(true)
 //  const user = ref("")
const route = useRoute()
const { user, userData } = stateManager()

  const service = userService()
  async function getStuff(){
  	console.log(route.params.publication)
    const { pub, posts } = await service.getPubWithPosts(route.params.publication);
    pubInfo.value = pub
    pubPost.value = posts.documents
    console.log("PUB", pub)
    console.log("PUB POSTS",posts)
    loading.value = true
  }

  getStuff();


  

  function openDrawer(){
    console.log("Drawer clicked")
    drawer.value = !drawer.value
  }

  function toggleDropDown(post){
    post['showDropDown'] = !post.showDropDown
  }


</script>
<style scoped>
.animated {

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
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>