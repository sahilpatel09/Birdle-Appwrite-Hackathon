<template>
  <div class="container mx-auto flex px-5 flex-wrap flex-col lg:flex-row mt-5">
    <div class="w-full lg:w-8/12 px-2 order-last space-y-10 lg:order-first">
      <div class="md:col-span-7 space-y-10 col-span-1" v-for="post in props.posts">
        <div class="flex justify-between gap-2" v-if="post.published">
          <div class="space-y-2 pt-3">
            <div class="flex gap-1 items-center">
              <div v-if="post.pubname" class="flex items-center gap-2">
                <UsersUserAvatar :fileid="post.pubimg" class="w-5 h-5" />
                <p>{{ post.username }} in {{ post.pubname }}</p>
              </div>
              <div v-else class="flex gap-2 items-center">
                <UsersUserAvatar :fileid="post.userimg" class="w-5 h-5" />
                <p>Published in {{ post.username }}.</p>
              </div>
            </div>

            <h2
              class="font-bold lg:text-[22px] text-[16px] capitalize leading-5 font-bold postTitle"
            >
              <NuxtLink :to="post.postUrl">
                {{ post.name }}
              </NuxtLink>
            </h2>
            <p class="hidden lg:block postDescription">
              {{ post.subtitle }}
            </p>

            <div class="flex justify-between items-center lg:w-[600px]">
              <div class="flex gap-2 items-center">
                <p class="text-gray-400 text-left">
                  {{ getDate(post.created_at) }} · {{ post.readTime }} min read
                </p>
                <button
                  class="hidden md:block py-0.5 px-2 pill rounded-full whitespace-nowrap"
                >
                  <NuxtLink :to="'/tags/' + post.tags[0]">
                    {{ post.tags[0] }}
                  </NuxtLink>
                </button>
                <span class="text-base fill-gray-400">
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
                </span>
              </div>

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

          <img
            :src="post.imgUrl"
            class="lg:w-[200px] lg:h-[144px] w-[110px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="w-full lg:w-1/3 px-2">
      <h2 class="text-gray-800 font-bold">
        DISCOVER MORE OF WHAT MATTERS TO YOU
      </h2>

      <div class="flex flex-wrap gap-2 my-3">
        <p
          class="px-4 py-1 border border-gray-200 w-fit rounded antialiased text-gray-600"
          v-for="item in props.tagList"
        >
          <NuxtLink :to="'/tag/' + item">{{ item }}</NuxtLink>
        </p>
      </div>

      <hr class="border border-gray-50 mt-10 mb-5" />

      <div class="hidden lg:block">
        <div class="flex flex-wrap mt-4">
          <p
            class="px-4 py-1 w-fit rounded antialiased text-gray-600"
            v-for="item in [
              'Help',
              'Status',
              'Writers',
              'Blog',
              'Careers',
              'Privacy',
              'Terms',
              'About',
              'Knowledge',
            ]"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.postTitle {
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.postDescription {
  -webkit-line-clamp: 2;
  max-height: 40px;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  color: rgba(117, 117, 117, 1);
  font-size: 16px;
  overflow: hidden;
  line-height: 20px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
}
.pill {
  color: rgba(117, 117, 117, 1);
  background-color: rgba(242, 242, 242, 1);
  line-height: 20px;
  font-size: 13px;
}
.transwhite {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
<script setup>
const props = defineProps({
  posts: {
    type: Object,
    required: true,
  },
  tagList: {
    type: Array,
    required: true,
  },
});

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
</script>
