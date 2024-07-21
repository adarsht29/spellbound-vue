<template>
  <v-container
    fluid
    class="pa-0"
    v-for="block in blocks"
    :key="block.id"
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <component :is="block.component" :sub-blocks="block.subBlocks" />
  </v-container>
</template>

<script>
import OneImageBlock from "@/components/common/OneImageBlock.vue";
import ThreeImageBlock from "@/components/common/ThreeImageBlock.vue";
import FourImageBlock from "@/components/common/FourImageBlock.vue";
export default {
  name: "ImageBlockContainer",
  components: {
    OneImageBlock,
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
  setup() {
    const isIntersecting = false;
    const onIntersect = (isIntersecting, entries) => {
      isIntersecting = entries[0].intersectionRatio >= 0.5;
    };
    return {
      isIntersecting,
      onIntersect,
    };
  },
};
</script>

<style lang="scss" scoped></style>
