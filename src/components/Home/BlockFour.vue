<template>
  <v-container fluid class="custom-container">
    <!-- Common Header -->
    <v-row>
      <v-col cols="12">
        <div class="text-h4 ma-6 mt-2 mb-2 text-center font-weight-bold">
          Spicing up the stories – take our word for it!
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
          <v-slide-group-item v-for="(card, index) in cards" :key="index">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-card
                  v-bind="props"
                  class="ma-2 rounded-0"
                  :width="customWidth"
                  :class="[
                    index !== 0 ? 'ml-8' : '',
                    isHovering ? 'hovered' : '',
                  ]"
                >
                  <v-img :src="card.image" cover></v-img>
                  <div class="pa-4 pl-6 pr-6">
                    <p class="font-weight-black small-text">
                      {{ card.smallText }}
                    </p>
                    <p class="large-text">{{ card.largeText }}</p>
                  </div>
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
export default {
  name: "BlockFour",
  setup() {
    const { smAndUp } = useDisplay();
    const slider = ref(null);
    const cards = ref([
      {
        title: "Card 1",
        image:
          "https://lh3.googleusercontent.com/d/1l3aHsUmz-iT7x27p8y-VTAlWLF7wiFtw=w1000",
        smallText: "Our Chronicles",
        largeText:
          "5 Luxury Interior Design Trends that will be leading in 2025",
      },
      {
        title: "Card 2",
        image:
          "https://lh3.googleusercontent.com/d/1zng5-SFU_VrVkCTlkKspkFjDwBckW3aZ=w1000",
        smallText: "Our Chronicles",
        largeText: "A Day in the Life of an Interior Designer",
      },
      {
        title: "Card 3",
        image:
          "https://lh3.googleusercontent.com/d/1HwwWvxFX6Qc2mpnaI_19zWBTSfiuYYi5=w1000",
        smallText: "Our Chronicles",
        largeText: "Curating the Art of Space: Top 5 Signature Projects",
      },
      {
        title: "Card 4",
        image:
          "https://lh3.googleusercontent.com/d/1zP0zxxrDwKg6eXfEyFyyc008htLl7hK7=w1000",
        smallText: "Our Chronicles",
        largeText: "Designing for All Senses",
      },
      {
        title: "Card 5",
        image:
          "https://lh3.googleusercontent.com/d/1oQE93ux2ToLxBWwWpSZBSiH1o68SY-8e=w1000",
        smallText: "Our Chronicles",
        largeText: "Designing for All Senses",
      },
      {
        title: "Card 6",
        image:
          "https://lh3.googleusercontent.com/d/1zng5-SFU_VrVkCTlkKspkFjDwBckW3aZ=w1000",
        smallText: "Our Chronicles",
        largeText: "Designing for All Senses",
      },
    ]);

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
.custom-slide-group {
  margin: 0 10px;
}
.custom-container {
  background-color: #fff;
}
.hovered {
  opacity: 0.7 !important;
  cursor: pointer;
  transform: scale(1.03);
  overflow: visible;
}
.custom-slide-group {
  :deep(.v-slide-group__prev),
  :deep(.v-slide-group__next) {
    display: none;
  }
}
</style>
