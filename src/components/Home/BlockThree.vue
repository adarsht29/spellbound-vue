<template>
  <v-container fluid class="block-three pa-10">
    <v-row>
      <v-col cols="12">
        <div class="text-h3 ma-6 mt-2 mb-1 text-center font-weight-bold">
          Interior
        </div>
      </v-col>
    </v-row>

    <v-sheet elevation="0">
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows="false"
      >
        <v-slide-group-item v-for="(card, index) in slides" :key="index">
          <v-card class="ma-2 rounded-0" width="470">
            <v-img :src="card.image" cover></v-img>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <v-carousel show-arrows="hover" cycle hide-delimiters height="auto">
      <v-carousel-item v-for="(slide, sIndex) in slides" :key="sIndex">
        <v-sheet>
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="pr-5"
              v-for="(item, iIndex) in slide.slide"
              :key="iIndex"
            >
              <span class="title">{{ item.text }}</span>
              <v-card class="rounded-0">
                <v-parallax>
                  <v-img :src="item.image" class="align-end"></v-img>
                </v-parallax>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BlockThree",
  setup() {
    const slides = ref([
      {
        url: "Interior",
        image:
          "https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8=",
      },
      {
        url: "",
        image:
          "https://media.istockphoto.com/id/1373329869/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=VBzd-UExnctNDY9rfqUc5Ys8IUyBmELYT0R2SSZ1_L4=",
      },
      {
        url: "Interior",
        image:
          "https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8=",
      },
      {
        url: "",
        image:
          "https://media.istockphoto.com/id/1373329869/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=VBzd-UExnctNDY9rfqUc5Ys8IUyBmELYT0R2SSZ1_L4=",
      },
      {
        url: "Interior",
        image:
          "https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8=",
      },
      {
        url: "",
        image:
          "https://media.istockphoto.com/id/1373329869/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=VBzd-UExnctNDY9rfqUc5Ys8IUyBmELYT0R2SSZ1_L4=",
      },
    ]);
    return {
      slides,
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
</style>
