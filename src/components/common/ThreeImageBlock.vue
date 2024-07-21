<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <CommonImageBlock :block="subBlocks[0]" />
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="12"><CommonImageBlock :block="subBlocks[1]" /> </v-col>
          <v-col cols="12"><CommonImageBlock :block="subBlocks[2]" /> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from "vuetify";
import CommonImageBlock from "@/components/common/CommonImageBlock.vue";
export default {
  name: "ThreeImageBlock",
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
  setup() {
    const { mdAndUp } = useDisplay();

    return {
      mdAndUp,
    };
  },
};
</script>

<style lang="scss" scoped></style>
