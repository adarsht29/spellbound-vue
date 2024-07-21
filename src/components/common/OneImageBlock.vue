<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="12">
        <CommonImageBlock :block="subBlocks[0]" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CommonImageBlock from "@/components/common/CommonImageBlock.vue";
export default {
  name: "OneImageBlock",
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
