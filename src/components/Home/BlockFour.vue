<template>
  <v-container fluid class="custom-container">
    <!-- Common Header -->
    <v-row>
      <v-col cols="12">
        <div class="text-h4 ma-6 mt-2 mb-2 text-center font-weight-bold">
          See how global cities are adapting to the future
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
                  <div class="pa-2">
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
import { ref, onMounted } from "vue";
export default {
  name: "BlockFour",
  setup() {
    const slider = ref(null);
    const cards = ref([
      {
        title: "Card 1",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Dahua 1935",
      },
      {
        title: "Card 2",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Funan",
      },
      {
        title: "Card 3",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Dahua 1935",
      },
      {
        title: "Card 4",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Funan",
      },
      {
        title: "Card 5",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Dahua 1935",
      },
      {
        title: "Card 6",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Funan",
      },
      {
        title: "Card 7",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Dahua 1935",
      },
      {
        title: "Card 8",
        image:
          "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
        smallText: "Journal",
        largeText: "Adaptive Reuse: Funan",
      },
    ]);
    const customWidth = ref(470);

    onMounted(() => {
      const width = slider.value
        ?.querySelector(".v-slide-group__container")
        ?.getBoundingClientRect()?.width;
      if (width) {
        customWidth.value = width / 2.5;
      }
    });

    return {
      slider,
      cards,
      customWidth,
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
