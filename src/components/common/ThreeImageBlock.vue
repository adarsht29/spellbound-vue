<template>
  <v-container fluid>
    <v-row v-if="mdAndUp">
      <v-col cols="8">
        <ImageBlock :block="subBlocks[0]" />
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="12"><ImageBlock :block="subBlocks[1]" /> </v-col>
          <v-col cols="12"><ImageBlock :block="subBlocks[2]" /> </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12"><ImageBlock :block="subBlocks[0]" /></v-col>
      <v-col cols="12"><ImageBlock :block="subBlocks[1]" /></v-col>
      <v-col cols="12"><ImageBlock :block="subBlocks[2]" /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useDisplay } from "vuetify";
import ImageBlock from "@/components/common/ImageBlock.vue";
export default {
  name: "ThreeImageBlock",
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
  setup() {
    const { mdAndUp } = useDisplay();

    return {
      mdAndUp,
    };
  },
};
</script>

<style lang="scss" scoped></style>
