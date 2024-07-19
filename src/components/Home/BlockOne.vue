<template>
  <video
    :key="require('@/assets/Homepage_blockOne.mp4')"
    width="100%"
    controls
    autoplay
  >
    <source :src="require('@/assets/Homepage_blockOne.mp4')" type="video/mp4" />
  </video>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "BlockOne",
  setup() {
    const customHeight = ref(700);
    onMounted(() => {
      customHeight.value =
        Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        ) + 50;
    });
    return {
      customHeight,
    };
  },
};
</script>

<style lang="scss" scoped></style>
