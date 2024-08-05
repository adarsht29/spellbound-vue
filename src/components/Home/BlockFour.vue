<template>
  <v-container fluid class="custom-container">
    <!-- Common Header -->
    <v-row>
      <v-col cols="12">
        <div
          class="text-h4 ma-6 mt-2 mb-2 text-center font-weight-medium header-font"
        >
          Spicing up the stories – take our word for it!
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
          <v-slide-group-item v-for="(card, index) in cards" :key="index">
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
                  <router-link :to="card.url" class="text-decoration-none">
                    <v-img :src="card.image" cover>
                      <div class="text-overlay"></div>
                    </v-img>
                    <div class="pa-4 pl-0 pr-6">
                      <p class="font-weight-black small-text">
                        {{ card.smallText }}
                      </p>
                      <p class="large-text">{{ card.largeText }}</p>
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
import { blockFourCards as cards } from "@/config";
export default {
  name: "BlockFour",
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
        return width - 10;
      }
      return 470;
    });

    return {
      slider,
      cards,
      customWidth,
      smAndUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.small-text {
  font-size: 11px;
}
.large-text {
  font-size: 20px;
}
.custom-container {
  background-color: #fff;
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
