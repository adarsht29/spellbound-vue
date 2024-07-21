<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="12"><CommonImageBlock :block="subBlocks[0]" /> </v-col>
          <v-col cols="6"><CommonImageBlock :block="subBlocks[1]" /> </v-col>
          <v-col cols="6"><CommonImageBlock :block="subBlocks[2]" /> </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <CommonImageBlock :block="subBlocks[3]" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CommonImageBlock from "@/components/common/CommonImageBlock.vue";
export default {
  name: "FourImageBlock",
  components: {
    CommonImageBlock,
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
