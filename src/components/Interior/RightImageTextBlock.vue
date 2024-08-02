<template>
  <div class="right-image-text-block">
    <v-row no-gutters justify="space-between">
      <!-- Text Column -->
      <v-col cols="12" md="4" class="d-flex align-center justify-center">
        <div class="text-content">
          <div class="section-header-font">
            {{ block.body }}
          </div>
          <div v-if="block.bodySubtitle" class="section-body-font">
            {{ block.bodySubtitle }}
          </div>
        </div>
      </v-col>

      <!-- Image Column -->
      <v-col cols="12" md="7">
        <v-img :src="block.image" :alt="block.title"></v-img>
        <div class="mt-2">
          <div class="text-h6 font-weight-bold">{{ block.title }}</div>
          <div v-html="block.subtitle" class="text-subtitle-1"></div>
        </div>
        <div class="mt-3">
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "RightImageTextBlock",
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
