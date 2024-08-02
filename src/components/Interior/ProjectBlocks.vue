<template>
  <v-container fluid class="ma-0 pa-0 project-blocks">
    <component
      v-for="block in projectBlocks"
      :key="block.id"
      :is="block.component"
      :blocks="block.subBlocks"
    />
  </v-container>
</template>

<script>
import FullImageBlock from "@/components/Interior/FullImageBlock.vue";
import LeftFullImageBlock from "@/components/Interior/LeftFullImageBlock.vue";
import LeftImageTextBlock from "@/components/Interior/LeftImageTextBlock.vue";
import RightImageTextBlock from "@/components/Interior/RightImageTextBlock.vue";
import TextBlock from "@/components/Interior/TextBlock.vue";
import TopLeftBottomRightImageBlock from "@/components/Interior/TopLeftBottomRightImageBlock.vue";
import TopRightImageTextBlock from "@/components/Interior/TopRightImageTextBlock.vue";
export default {
  name: "ProjectBlocks",
  components: {
    FullImageBlock,
    LeftFullImageBlock,
    LeftImageTextBlock,
    RightImageTextBlock,
    TextBlock,
    TopLeftBottomRightImageBlock,
    TopRightImageTextBlock,
  },
  props: {
    projectBlocks: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped></style>
