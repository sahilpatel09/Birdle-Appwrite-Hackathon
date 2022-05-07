<template>
  <div class="mx-6 my-6">
    <div class="lg:flex flex-col lg:gap-2">
      <div class="flex justify-between">
        <h3
          class="text-gray-900 font-extrabold text-left text-5xl tracking-tight globalfont p-3"
        >
          Publications
        </h3>

        <div class="flex gap-4 items-center justify-center">
          <button
            class="bg-green-700 px-4 py-2 rounded-full text-white text-sm font-semibold"
          >
            <NuxtLink to="/new-publication"> New Publication </NuxtLink>
          </button>
        </div>
      </div>

      <hr class="bg-gray-200 w-full h-0.5" />

      <h3
        class="text-gray-900 font-extrabold text-left text-xl tracking-tight globalfont p-3"
      >
        Staff
      </h3>

      <div class="w-full flex flex-col p-4 gap-4">
        <div v-if="userPubs == ''">
          You have no publication yet in your arsenal.
        </div>

        <div class="flex justify-between" v-for="pub in userPubs">
          <div class="flex gap-4 items-center">
            <div>
              <NuxtLink :to="'/' + pub.url">
                <UsersUserAvatar v-if="pub.img" :fileid="pub.img" />
                <UsersUserNameAvatar :name="pub.name" v-else />
              </NuxtLink>
            </div>

            <div class="w-[450px]">
              <h2 class="text-gray-900 font-bold">
                <NuxtLink :to="'/' + pub.url">
                  {{ pub.name }}
                </NuxtLink>
              </h2>
              <p>
                {{ pub.subtitle }}
              </p>
            </div>
          </div>

          <div class="text-gray-900">
            <span v-if="pub.user_id === userData.$id">Owner</span>
            <span v-else>Writer</span>
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

const userPubs = ref([]);
const service = userService();
const { user, userData } = stateManager();

async function getPubs() {
  const pubs = await service.getPubsForAuthor(
    userData.value.username.toString()
  );
  if (pubs) {
    userPubs.value = pubs.documents;
    console.log(pubs.documents);
  }
}

getPubs();
</script>
