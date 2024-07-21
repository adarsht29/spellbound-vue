<template>
  <v-container fluid class="pa-0">
    <component
      v-for="block in blocks"
      :key="block.id"
      :is="block.component"
      :sub-blocks="block.subBlocks"
    />
  </v-container>
</template>

<script>
import OneImageBlock from "@/components/common/OneImageBlock.vue";
import ThreeImageBlock from "@/components/common/ThreeImageBlock.vue";
import FourImageBlock from "@/components/common/FourImageBlock.vue";
export default {
  name: "ImageBlock",
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
};
</script>

<style lang="scss" scoped></style>
