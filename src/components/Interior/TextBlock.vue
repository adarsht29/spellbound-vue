<template>
  <v-container fluid class="pa-0 text-block">
    <v-row>
      <v-col
        cols="8"
        md="5"
        offset-md="2"
        class="d-flex align-center justify-start"
      >
        <div class="section-header-font">
          {{ block.body }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <!-- Blank column to leave right side blank -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "vue";
export default {
  name: "TextBlock",
  props: {
    blocks: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup(props) {
    const block = computed(() => props.blocks[0]);
    return {
      block,
    };
  },
};
</script>

<style lang="scss" scoped></style>
