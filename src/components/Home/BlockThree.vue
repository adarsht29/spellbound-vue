<template>
  <v-container fluid class="block-three pa-10">
    <v-row>
      <v-col cols="12">
        <div class="text-h3 ma-6 mt-2 mb-3 text-center font-weight-bold">
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
          show-arrows="false"
        >
          <v-slide-group-item v-for="(card, index) in slides" :key="index">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-img
                  v-bind="props"
                  :src="card.image"
                  cover
                  :width="customWidth"
                  :class="[
                    index !== 0 ? 'ml-8' : '',
                    isHovering ? 'hovered' : '',
                  ]"
                >
                  <v-row class="fill-height ma-0" align="end">
                    <div
                      class="text-title-1 text-white ma-12 mb-8 pa-1 pl-2 pr-2 custom-title"
                    >
                      {{ card.title }}
                    </div>
                  </v-row>
                </v-img>
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
export default {
  name: "BlockThree",
  setup() {
    const { smAndUp } = useDisplay();
    const slider = ref(null);
    const slides = ref([
      {
        url: "",
        title: "Ishavasya",
        image:
          "https://lh3.googleusercontent.com/d/1oQE93ux2ToLxBWwWpSZBSiH1o68SY-8e=w1000",
      },
      {
        url: "",
        title: "The Pavilion",
        image:
          "https://lh3.googleusercontent.com/d/1l3aHsUmz-iT7x27p8y-VTAlWLF7wiFtw=w1000",
      },
      {
        url: "",
        title: "The Holy Abode",
        image:
          "https://lh3.googleusercontent.com/d/1nYLppCs29wcI0vyB1bURULXa8kbrAeH0=w1000",
      },
      {
        url: "",
        title: "Beach House",
        image:
          "https://lh3.googleusercontent.com/d/1zng5-SFU_VrVkCTlkKspkFjDwBckW3aZ=w1000",
      },
      {
        url: "",
        title: "Godrej N17",
        image:
          "https://lh3.googleusercontent.com/d/1zP0zxxrDwKg6eXfEyFyyc008htLl7hK7=w1000",
      },
      {
        url: "",
        title: "Essentia Wellness",
        image:
          "https://lh3.googleusercontent.com/d/1HwwWvxFX6Qc2mpnaI_19zWBTSfiuYYi5=w1000",
      },
    ]);
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
.hovered {
  opacity: 0.7 !important;
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
