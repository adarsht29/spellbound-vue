<template>
  <v-container fluid class="ma-0 pa-0">
    <video
      :key="require('@/assets/Homepage_blockOne.mp4')"
      autoplay
      muted="true"
      width="100%"
      class="d-block"
      loop
    >
      <source
        :src="require('@/assets/Homepage_blockOne.mp4')"
        type="video/mp4"
      />
    </video>
  </v-container>
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
