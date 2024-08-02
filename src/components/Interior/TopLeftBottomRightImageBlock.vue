<template>
  <div class="top-left-bottom-right-image-block">
    <!-- First Row for the First Image -->
    <v-row :class="{ overlap: mdAndUp }" no-gutters>
      <v-col cols="12" md="6">
        <v-img :src="block1.image" :alt="block1.title"></v-img>
        <div class="mt-3 text-right">
          <div class="text-h6 font-weight-bold">{{ block1.title }}</div>
          <div v-html="block1.subtitle" class="text-subtitle-1"></div>
        </div>
        <div class="mt-3 text-right">
          <router-link
            :to="block1.url"
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

    <!-- Second Row for the Second Image -->
    <v-row :class="{ 'overlap-second': mdAndUp }" no-gutters>
      <v-col cols="12" md="5" style="margin-left: auto">
        <v-img :src="block2.image" :alt="block2.title"></v-img>
        <div class="mt-3">
          <div class="text-h6 font-weight-bold">{{ block2.title }}</div>
          <div v-html="block2.subtitle" class="text-subtitle-1"></div>
        </div>
        <div class="mt-3">
          <router-link
            :to="block2.url"
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
import { useDisplay } from "vuetify";
export default {
  name: "TopLeftBottomRightImageBlock",
  props: {
    blocks: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup(props) {
    const { mdAndUp } = useDisplay();
    const block1 = computed(() => props.blocks[0]);
    const block2 = computed(() => props.blocks[1]);
    return {
      mdAndUp,
      block1,
      block2,
    };
  },
};
</script>

<style lang="scss" scoped>
.overlap {
  position: relative !important;
  z-index: 2 !important;
}
.overlap-second {
  position: relative !important;
  z-index: 1 !important;
  top: -300px !important;
  margin-bottom: -300px !important;
}
@media (max-width: 960px) {
  .overlap-second {
    top: 0 !important;
  }
}
</style>
