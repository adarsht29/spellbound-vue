<template>
  <ImageBlockContainer :blocks="blocks" />
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
