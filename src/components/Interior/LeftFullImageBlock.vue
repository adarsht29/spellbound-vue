<template>
  <v-container fluid class="pa-0">
    <v-row>
      <!-- Image Column -->
      <v-col cols="12" md="9" class="section-image-layout">
        <v-img :src="block.image" :alt="block.title"></v-img>
        <div class="mt-3 text-right">
          <div class="text-h6 font-weight-bold">{{ block.title }}</div>
          <div v-html="block.subtitle" class="text-subtitle-1"></div>
        </div>
        <div class="mt-3 text-right">
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

      <!-- Blank Space Column -->
      <v-col cols="12" md="3" class="section-image-layout"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "vue";
export default {
  name: "LeftFullImageBlock",
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
