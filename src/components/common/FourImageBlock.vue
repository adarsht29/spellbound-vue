<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="12"><ImageBlock :block="subBlocks[0]" /> </v-col>
          <v-col cols="6"><ImageBlock :block="subBlocks[1]" /> </v-col>
          <v-col cols="6"><ImageBlock :block="subBlocks[2]" /> </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <ImageBlock :block="subBlocks[3]" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ImageBlock from "@/components/common/ImageBlock.vue";
export default {
  name: "FourImageBlock",
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
