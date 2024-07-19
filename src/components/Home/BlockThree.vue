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
      <v-slide-group class="pa-4" center-active show-arrows="false">
        <v-slide-group-item v-for="(card, index) in slides" :key="index">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                v-bind="props"
                :src="card.image"
                cover
                width="470"
                :class="[
                  index !== 0 ? 'ml-4' : '',
                  isHovering ? 'hovered' : '',
                ]"
              ></v-img>
            </template>
          </v-hover>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
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
    const customWidth = ref(470);

    onMounted(() => {
      // const myDivWidth = this.$refs.myDiv.clientWidth;
      // console.log(`Width of myDiv: ${myDivWidth}px`);
    });

    return {
      slides,
      customWidth,
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
  transform: scale(0.99);
}
</style>
