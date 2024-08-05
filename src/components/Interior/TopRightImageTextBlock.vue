<template>
  <div class="top-right-image-text-block">
    <!-- Row for Image -->
    <v-row class="justify-end" no-gutters>
      <v-col cols="12" md="10" class="d-flex align-start justify-end">
        <div class="w-100">
          <v-img :src="block.image" :alt="block.title"></v-img>
          <div class="mt-2 pl-4 pr-4 pl-md-0 pr-md-0">
            <div class="text-h6 font-weight-bold">{{ block.title }}</div>
            <div v-html="block.subtitle" class="text-subtitle-1"></div>
          </div>
          <div class="mt-3 pl-4 pr-4 pl-md-0 pr-md-0">
            <router-link
              :to="block.url"
              class="text-decoration-none router-btn text-black"
            >
              <v-btn
                variant="outlined"
                density="compact"
                class="rounded-0 text-overline text-uppercase"
              >
                View Project
              </v-btn>
            </router-link>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Row for Text -->
    <v-row class="justify-center justify-md-start mt-16" no-gutters>
      <v-col
        cols="8"
        md="6"
        class="d-flex align-end pl-md-12 pr-md-12 mt-16 mt-md-0"
      >
        <div class="text-content">
          <div class="section-header-font">
            {{ block.body }}
          </div>
          <div v-if="block.bodySubtitle" class="section-body-font">
            {{ block.bodySubtitle }}
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "TopRightImageTextBlock",
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
