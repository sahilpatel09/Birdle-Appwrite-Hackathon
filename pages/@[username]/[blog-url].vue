<template>
  <div>
    <div v-if="show" class="w-full flex justify-between">

      <div
        class="flex-auto mb-0 min-w-0 block bg-white pt-2 lg:p-10 justify-center items-center lg:ml-20 lg:max-w-[890px] w-full"
      >
        <div class="block">

      <div class="mx-6 my-4">
        <div class="lg:flex flex-col lg:gap-2 justify-center">
          <div class="flex items-center justify-between py-2">
            <div class="w-full flex items-center justify-start gap-4">
              
              
              <div class="profile hidden lg:block w-12" @click="openIt" v-if="user">
                <NuxtLink :to='"/@"+user.username'>
                <UsersUserAvatar v-if="user.img" :fileid="user.img" /> 
                <UsersUserNameAvatar :name="user.name" v-else />
                </NuxtLink>
              </div>
            
            

              <h4 class="text-sm text-gray-600 globalfont">
                Published in <span class="text-gray-800">
                {{ user.name}}
              </span>
              </h4>
            </div>
          </div>
          <hr class="border-gray-300" />

          <div class="w-full bg-gray-100 px-3 py-2 my-2 rounded">
            You have <span class="text-black font-bold">2</span> free
            member-only stories left this month. Sign up for Medium and get an
            extra one.
          </div>

          <!-- Main User Info Container -->
          <div class="flex itens-center justify-between w-full h-14 mt-5">
            <div class="flex items-center gap-3 globalfont">
              <div class="profile hidden lg:block w-12" @click="openIt" v-if="user">
                <UsersUserAvatar v-if="user.img" :fileid="user.img" /> 
                <UsersUserNameAvatar :name="user.name" v-else />
              </div>

              <div class="flex flex-col justify-between">
                <h2 class="text-base">{{ user.name }}</h2>
                <p class="text-sm">{{ postDate }} · {{ postItem.readTime }} min read</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="flex gap-4 items-center justify-center">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 310 310"
                  xml:space="preserve"
                  class="fill-gray-400 hover:fill-gray-600 transform duration-300"
                >
                  <g id="XMLID_826_">
                    <path
                      id="XMLID_827_"
                      d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
									c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
									c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
									C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
									c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
									c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
									c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
									c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
									c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
									c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
									c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
									C307.394,57.037,305.009,56.486,302.973,57.388z"
                    />
                  </g>
                </svg>

                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-gray-400 hover:fill-gray-600 transform duration-300"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>

                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  role="img"
                  class="fill-gray-400 hover:fill-gray-600 transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>

                <div class="flex gap-5">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 25 25"
                    fill="none"
                    class="fill-gray-400 hover:fill-gray-600 transform duration-300"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="fill-gray-400 hover:fill-gray-600 transform duration-300"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                      fill="#000"
                      data-darkreader-inline-fill=""
                      style="--darkreader-inline-fill: #ffffff"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- Info end -->
          <div class="mt-3">
            
            <h3 class="capitalize  globalfont text-4xl font-extrabold" v-if="postItem">
              {{ postItem.name }}
            </h3>
  
            <p class="text-lg py-2">
              {{ postItem.subtitle }}
            </p>
          </div>
          <div
            v-html="postItem.content"
            class="globalfont text-[18px] font-sans"
          ></div>
        </div>
      </div>

</div></div>

      

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

                      <div class="profile hidden lg:block" @click="openIt" v-if="user">
                        <UsersUserAvatar v-if="user.img" :fileid="user.img" /> 
                        <UsersUserNameAvatar :name="user.name" v-else />
                      </div>
                    <h2 class="globalfont font-bold mt-4 capitalize">{{ user.name }}</h2>
                    <h3 class="py-2 text-base text-gray-500">{{user.followers_count}} Followers</h3>
                    <p class="text-gray-600 text-sm">{{ user.bio }}</p>
                    
                    <!-- If use is self -->
<div v-if="userData">
                      <h4 class="mt-5 text-gray-700" v-if="user.$id == userData.$id">
                      <NuxtLink to="/me/settings">
                      Edit Profile
                    </NuxtLink>
                    </h4>                        
                      </div>

                    <!-- else -->
                    
                    <div v-if="user && following && userData">
                      <div class="flex gap-3 mt-4 items-center" v-if="user.$id != userData.$id">
                      <button v-if="following.includes(user.$id)" class="px-4 py-1 text-green-500 border border-green-500 rounded-full"
                      @click="unfollowUser(user.$id)">Following</button>

                      <button 
                      v-else 
                      class="px-4 py-1 bg-green-700 text-white rounded-full"
                      @click="followUser(user.$id)"
                      >Follow</button>

                      <button class="rounded-full bg-green-700 w-16 h-10 py-2 h-fit flex items-center justify-center" title="Subscribe to get a newsletter.">
                        <img src="@/assets/img/get-email.svg" class="w-5">
                      </button>


                    </div>
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

    <!-- else block -->
    <div v-else class="flex items-center justify-center h-screen">
      <img src="@/assets/img/3.png" class="w-16" alt="" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const postItem = ref('');
const user = ref("")
const service = userService()
const show = ref(false)
const postDate = ref()
const { userData } = stateManager()
const following = ref()
console.log(route.params.username, route.params.blogurl)
async function getSinglePost(){

    const { post, info } = await service.getAuthorPost(route.params.username, route.params.blogurl);
    console.log("RECEIVED IN PAGE",post);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date(post.documents[0].created_at*1000)
    postDate.value = (months[d.getMonth()])  + " " + d.getDate() + ", " + d.getFullYear();

    postItem.value = post.documents[0]
    user.value = info
    show.value = true
}
getSinglePost();


</script>
