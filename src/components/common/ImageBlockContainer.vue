<template>
  <component
    v-for="block in blocks"
    :key="block.id"
    :is="block.component"
    :sub-blocks="block.subBlocks"
  />
</template>

<script>
import OneImageBlock from "@/components/common/OneImageBlock.vue";
import TwoImageBlock from "@/components/common/TwoImageBlock.vue";
import ThreeImageBlock from "@/components/common/ThreeImageBlock.vue";
import FourImageBlock from "@/components/common/FourImageBlock.vue";
export default {
  name: "ImageBlockContainer",
  components: {
    OneImageBlock,
    TwoImageBlock,
    ThreeImageBlock,
    FourImageBlock,
  },
  props: {
    blocks: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
