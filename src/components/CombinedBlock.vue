<template>
  <v-container fluid class="combined-block">
    <v-row>
      <v-col cols="12">
        <div
          class="text-h4 ma-6 mt-8 mb-2 text-center font-weight-medium header-font"
        >
          Spellbound Stories: What’s brewing now
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
                  <router-link
                    :to="card.url"
                    class="text-decoration-none text-black"
                  >
                    <v-img :src="card.image" cover>
                      <div v-if="mdAndUp" class="text-overlay"></div>
                      <template v-if="card.showText">
                        <v-row class="fill-height ma-0" align="end">
                          <div
                            class="text-title-1 text-white ma-12 mb-8 pa-1 pl-2 pr-2 custom-title"
                          >
                            {{ card.title }}
                          </div>
                        </v-row>
                      </template>
                    </v-img>
                    <div class="pa-1 pl-0 pr-6 font-weight-bold">
                      <p class="large-text" v-if="card.showText">
                        Interior Narratives’
                      </p>
                      <p class="large-text" v-else>Our Chronicles</p>
                    </div>
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
import { combinedBlockSlides as slides } from "@/config";
export default {
  name: "CombinedBlock",
  setup() {
    const { smAndUp, mdAndUp } = useDisplay();
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
      mdAndUp,
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
.hovered {
  cursor: pointer;
  transform: scale(1.05);
  overflow: visible;
  transition: transform 0.5s ease-in-out;
  .text-overlay {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
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
.text-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #0000008a;
  box-sizing: border-box;
  opacity: 1;
}
</style>
