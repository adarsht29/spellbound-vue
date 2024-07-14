<template>
  <v-parallax
    src="https://gallery.streamlinevrs.com/units-gallery/00/06/88/image_164809180.jpeg"
    :height="customHeight"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <div class="font-weight-bold mb-4 custom-text">
        Revealing Spatially Whimsical Tales
      </div>
    </div>
  </v-parallax>
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

<style lang="scss" scoped>
.custom-text {
  font-size: 46px;
}
</style>
