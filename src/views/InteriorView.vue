<template>
  <ImageBlock :blocks="blocks" />
</template>

<script>
import { blocks } from "@/config";
import ImageBlock from "@/components/common/ImageBlock.vue";
export default {
  name: "InteriorView",
  components: {
    ImageBlock,
  },
  setup() {
    return {
      blocks,
    };
  },
};
</script>

<style lang="scss" scoped></style>
