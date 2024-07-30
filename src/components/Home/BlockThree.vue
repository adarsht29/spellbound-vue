<template>
  <v-container fluid class="block-three pa-10">
    <v-row>
      <v-col cols="12">
        <div
          class="text-h4 ma-6 mt-2 mb-3 text-center font-weight-medium header-font"
        >
          Interior Narratives
        </div>
        <div class="text-h5 ma-6 mt-2 mb-3 text-center">
          The Stories of Spaces
        </div>
      </v-col>
    </v-row>

    <div ref="slider">
      <v-sheet elevation="0">
        <v-slide-group
          class="pa-4 custom-slide-group"
          center-active
          :show-arrows="false"
        >
          <v-slide-group-item v-for="(card, index) in slides" :key="index">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  class="ma-2 rounded-0 elevation-0 custom-card"
                  :width="customWidth"
                  :class="[
                    index !== 0 ? 'ml-8' : '',
                    isHovering ? 'hovered' : '',
                  ]"
                >
                  <router-link :to="card.url">
                    <v-img :src="card.image" cover height="100%">
                      <v-row class="fill-height ma-0" align="end">
                        <div
                          class="text-title-1 text-white ma-12 mb-8 pa-1 pl-2 pr-2 custom-title"
                        >
                          {{ card.title }}
                        </div>
                      </v-row>
                    </v-img>
                  </router-link>
                </v-card>
              </template>
            </v-hover>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
import { useDisplay } from "vuetify";
import { ref, computed } from "vue";
import { blockThreeSlides as slides } from "@/config";
export default {
  name: "BlockThree",
  setup() {
    const { smAndUp } = useDisplay();
    const slider = ref(null);
    const customWidth = computed(() => {
      const width = slider.value
        ?.querySelector(".v-slide-group__container")
        ?.getBoundingClientRect()?.width;
      if (width && smAndUp.value) {
        return width / 2.5;
      } else if (width) {
        return width;
      }
      return 470;
    });

    return {
      slider,
      slides,
      customWidth,
      smAndUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.left-section {
  margin-top: 20px;
}

.right-section {
  margin-bottom: 20px;
}
.title {
  font-family: "Allura" !important;
  font-size: 50px !important;
}
.custom-card {
  opacity: 0.7 !important;
}
.hovered {
  opacity: 1 !important;
  cursor: pointer;
  transform: scale(1.05);
  overflow: visible;
}
.custom-slide-group {
  :deep(.v-slide-group__prev),
  :deep(.v-slide-group__next) {
    display: none;
  }
}
.custom-title {
  background: #000000b6;
}
</style>
