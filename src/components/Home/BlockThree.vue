<template>
  <v-container fluid class="block-three">
    <v-row>
      <v-col cols="6">
        <!-- Left Section -->
        <v-card class="rounded-0">
          <v-card-title class="justify-start font-weight-thin title"
            >Interior</v-card-title
          >
          <v-parallax height="450">
            <v-img
              src="https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8="
              class="align-end"
            ></v-img>
          </v-parallax>
        </v-card>
      </v-col>

      <v-col cols="6">
        <!-- Right Section -->
        <v-card class="rounded-0">
          <v-parallax height="450">
            <v-img
              src="https://media.istockphoto.com/id/1373329869/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=VBzd-UExnctNDY9rfqUc5Ys8IUyBmELYT0R2SSZ1_L4="
              class="align-start"
            ></v-img>
          </v-parallax>
          <v-card-title
            class="justify-end font-weight-thin title"
          ></v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BlockThree",
  setup() {},
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
  font-family: "Allura";
  font-size: 40px;
}
</style>
