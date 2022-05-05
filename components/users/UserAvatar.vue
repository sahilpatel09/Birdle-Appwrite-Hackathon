<template>
  <div v-if="img">
    <img :src="img.href" class="w-20 rounded-full" />
  </div>
</template>
<script setup>
const props = defineProps({
  fileid: {
    type: String,
    required: true,
  },
});
const img = ref(false);
const service = userService();
async function setImage() {
  img.value = await service.getThumbnail(props.fileid);
}

setImage();
</script>
