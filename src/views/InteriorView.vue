<template>
  <div class="interior">
    <ImageBlockContainer :blocks="blocks" />
  </div>
</template>

<script>
import { blocks } from "@/config";
import ImageBlockContainer from "@/components/common/ImageBlockContainer.vue";
export default {
  name: "InteriorView",
  components: {
    ImageBlockContainer,
  },
  setup() {
    return {
      blocks,
    };
  },
};
</script>

<style lang="scss" scoped></style>
