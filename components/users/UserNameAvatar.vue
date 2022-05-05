<template>
  <div v-if="nameImg">
    <img :src="nameImg.href" class="w-20 rounded-full" />
  </div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
const nameImg = ref(false);
const service = userService();

async function setImage() {
  nameImg.value = await service.getUserNameThumbnail(props.name);
}

setImage();
</script>
