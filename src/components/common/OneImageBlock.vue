<template>
  <v-row>
    <v-col cols="12">
      <ImageBlock :block="subBlocks[0]" :single-block="true" />
    </v-col>
  </v-row>
</template>

<script>
import ImageBlock from "@/components/common/ImageBlock.vue";
export default {
  name: "OneImageBlock",
  components: {
    ImageBlock,
  },
  props: {
    subBlocks: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
