<template>
  <div class="text-block">
    <v-row no-gutters class="text-block">
      <v-col
        cols="8"
        md="5"
        offset-md="2"
        offset="2"
        class="d-flex align-center justify-start"
      >
        <div class="section-header-font">
          {{ block.body }}
        </div>
      </v-col>
    </v-row>
  </div>
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

<style lang="scss" scoped>
.text-block {
  margin-top: rem-calc(100);
  margin-bottom: rem-calc(50);
}
</style>
