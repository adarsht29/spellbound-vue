<template>
  <v-container fluid class="pa-0">
    <v-parallax
      :src="block.image"
      class="text-white custom-parallax"
      height="100%"
    >
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-row
            class="h-100 custom-parallax-content ma-0"
            :class="isHovering ? 'hovered' : ''"
            alignContent="center"
            justify="center"
          >
            <v-col class="text-left" cols="12" md="8">
              <div
                class="text-content"
                v-bind="props"
                :class="isHovering ? '' : 'text-transparent'"
              >
                <div class="text-h4 font-weight-medium header-font">
                  {{ block.title }}
                </div>
                <div class="text-h6 mt-4" v-html="block.body"></div>
              </div>
            </v-col>
          </v-row>
        </template>
      </v-hover>
    </v-parallax>
  </v-container>
</template>

<script>
import { computed } from "vue";
export default {
  name: "FullImageBlock",
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
.custom-parallax-content {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0) !important;
}
</style>
