<template>
  <div>
    <div
      class="lg:hidden w-full px-6 h-14 bg-white shadow flex justify-between items-center"
    >
      <svg viewBox="0 0 1043.63 592.71" class="bo hu">
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path
              d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
            ></path>
          </g>
        </g>
      </svg>

      <div class="flex gap-2">
        <a
          href="https://rsci.app.link/s1cSf8zJT3?~feature=LiOpenInAppButton&~channel=ShowHome&~stage=mobileNavBar"
          class="text-green-600 text-sm font-medium"
          >Open in app</a
        >

        <svg
          width="30"
          height="30"
          viewBox="-293 409 25 25"
          style="fill: rgba(117, 117, 117, 1)"
        >
          <path
            d="M-273.33 423.67l-1.67-1.52v-3.65a5.5 5.5 0 0 0-6.04-5.47 5.66 5.66 0 0 0-4.96 5.71v3.41l-1.68 1.55a1 1 0 0 0-.32.74V427a1 1 0 0 0 1 1h3.49a3.08 3.08 0 0 0 3.01 2.45 3.08 3.08 0 0 0 3.01-2.45h3.49a1 1 0 0 0 1-1v-2.59a1 1 0 0 0-.33-.74zm-7.17 5.63c-.84 0-1.55-.55-1.81-1.3h3.62a1.92 1.92 0 0 1-1.81 1.3zm6.35-2.45h-12.7v-2.35l1.63-1.5c.24-.22.37-.53.37-.85v-3.41a4.51 4.51 0 0 1 3.92-4.57 4.35 4.35 0 0 1 4.78 4.33v3.65c0 .32.14.63.38.85l1.62 1.48v2.37z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="lg:hidden py-4 px-6 mx-6 my-4 rounded h-14 bg-gray-100">
      <h2 class="flex gap-3 items-center font-semibold">
        <div class="rounded-full bg-green-700 w-3 h-3"></div>
        <span class="text-green-500">War in Ukraine:</span> What We’re Reading
      </h2>
    </div>

    <div class="mx-6 my-4">
      <div class="lg:flex lg:items-center lg:gap-2">
        <h3
          class="uppercase text-gray-700 font-normal text-left text-sm tracking-wide"
        >
          Your Topics
        </h3>

        <div class="flex my-2 gap-1" v-if="tags">
          <button
            class="capitalize bg-gray-100 lg:px-3 lg:py-1 px-2 py-1.5 rounded-full text-sm"
            v-for="tag in tags"
          >
            <NuxtLink :to="'/tag/' + tag">
              {{ tag }}
            </NuxtLink>
          </button>
        </div>
      </div>

      <div class="flex my-6 gap-2" v-if="followerUsers">
        <div class="flex" v-for="user in followerUsers">
          
          <div class="profile lg:block w-16" @click="openIt" v-if="user">
            <NuxtLink :to="'/@' + user.username">
              <UsersUserAvatar v-if="user.img" :fileid="user.img" />
              <UsersUserNameAvatar :name="user.name" v-else />
            </NuxtLink>
          </div>

          <div
            class="rounded-full bg-black w-5 h-5 -ml-4 text-white flex items-center justify-center text-sm border border-gray-50"
          >
            {{ user.followers_count }}
          </div>

        </div>
      </div>

      <div class="my-2 flex gap-3">
        <div class="globalfont text-sm">
          <h3>Stories from Following</h3>
        </div>

        <!--         <div class="globalfont text-sm">
          <h3>Recommended</h3>
        </div> -->
      </div>

      <hr class="bg-gray-200 w-full h-0.5" />

      <!-- PostList -->

      <div class="my-3 space-y-10" v-for="post in postList">
        <div class="flex justify-between gap-5" v-if="post.published == 1">
          <div class="space-y-4 pt-3">
            <div
              class="flex gap-1 items-center justify-start text-xs lg:text-sm">
              <div v-if="post.pubname" class="flex gap-2">
                <UsersUserAvatar :fileid="post.pubimg" class="w-5 h-5" />
                <p>{{ post.username }} in {{ post.pubname }}</p>
              </div>
              <div v-else class="flex gap-2">
                <UsersUserAvatar :fileid="post.userimg" class="w-5 h-5" />
                <p>Published in {{ post.username }}.</p>
              </div>

              <p class="text-gray-400">
                <span class="rm">·</span> {{ getDateDiff(post.created_at) }} day
                ago
              </p>
            </div>

            <h2
              class="font-bold lg:text-[22px] text-[16px] capitalize leading-5 font-bold postTitle lg:leading-7 max-w-lg"
            >
              <NuxtLink :to="{ path: post.postUrl }">
                {{ post.name }}
              </NuxtLink>
            </h2>
            <p class="hidden lg:block postDescription max-w-lg">
              {{ post.subtitle }}
            </p>

            <div class="flex justify-between items-center lg:w-[600px]">
              <div class="flex gap-2 items-center justify-between">
                <p class="text-gray-400 text-left text-sm">
                  {{ getDate(post.created_at) }} · {{ post.readTime }}min read
                </p>
                <button
                  class="capitalize hidden md:block py-0.5 px-2 pill rounded-full whitespace-nowrap"
                >
                  <NuxtLink :to="'/tag/' + post.tags[0]">
                    {{ post.tags[0] }}
                  </NuxtLink>
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
              </div>
            </div>
          </div>

          <img
            :src="post.imgUrl"
            class="lg:w-[220px] lg:h-[160px] w-[110px] object-cover rounded mt-10"
            alt=""
          />
          
        <hr />
        </div>


        <!-- End of PostList -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.bo {
  height: 25px;
}
.hu {
  fill: rgb(0, 0, 0);
}
.greendot {
  background-color: rgb(15, 115, 12);
  flex: 0 0 auto;
  border-radius: 50%;
  width: 8px;
  margin-bottom: 1px;
  margin-right: 8px;
  display: inline-block;
}
</style>
<script setup>
definePageMeta({
  middleware: ["auth", "pageload"],
  // or middleware: 'auth'
});
const postList = ref({});
const recommendedPostList = ref({});
const { user, userData } = stateManager();
const service = userService();
const tags = ref([]);
const followerUsers = ref();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDate = (timestamp) => {
  const d = new Date(timestamp * 1000);
  return months[d.getMonth()] + " " + d.getDate();
};

const getDateDiff = (timestamp) => {
  const postDate = new Date(timestamp * 1000);
  const today = new Date();
  const diffTime = Math.abs(today - postDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

async function getfollowerimages(list) {
  const follower = await service.getFollowers(list);
  if (follower) {
    console.log("FOLLOWERS", follower.documents);
    followerUsers.value = follower.documents;
  }
}
console.log(userData.value)
if(userData.value){
getfollowerimages(userData.value.follow_user_id);  
}


async function getPosts() {
  const posts = await service.getPosts();
  console.log("PAGE POSTS", posts.documents);
  postList.value = posts.documents;
  let publictags = [];

  let val = 0;

  while(publictags.length < 6){
    
        let item = posts.documents[val].tags[0];
        if (!publictags.includes(item)) {
          publictags.push(item);
        }
        val++;

  }

  tags.value = publictags;
}
getPosts();
</script>
