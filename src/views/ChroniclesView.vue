<template>
  <div class="Chronicles">
    <v-container
      fluid
      class="ma-0 pt-11 pb-14 text-center chronicles-container"
    >
      <div class="title font-weight-medium">Our Chronicles</div>
      <div class="title-underline"></div>

      <div class="mt-7">
        <div class="mt-6">Stories surround us everywhere.</div>
        <div class="mt-6">
          <div class="mt-2">They live in the exteriors and the interiors.</div>
          <div class="mt-2">They breathe in the man-made and in nature.</div>
          <div class="mt-2">
            They’re written in colors and narrated through styles.
          </div>
        </div>
        <div class="mt-6">No single voice can tell them all.</div>
        <div class="mt-6">But words, they celebrate every unique tale.</div>
        <div class="mt-6">
          While our spaces speak ‘your’ story, we share ‘ours’ through words.
        </div>
      </div>
    </v-container>
    <v-container fluid class="ma-0 pa-5 mt-10">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          v-for="(block, index) in blocks"
          :key="index"
          class="pa-2"
        >
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="rounded-0 h-100"
                :class="[isHovering ? 'hovered' : '']"
              >
                <v-img :src="block.image" cover class="h-100"></v-img>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { chroniclesBlock as blocks } from "@/config";
export default {
  name: "ChroniclesView",
  components: {},
  setup() {
    return {
      blocks,
    };
  },
};
</script>

<style lang="scss" scoped>
.chronicles-container {
  background: #f0f0f0;
}
.title {
  display: block;
  font-size: 36px;
  font-family: "Inter" !important;
}
.title-underline {
  width: 110px;
  height: 2px;
  background-color: black;
  margin: 6px auto 0;
}
.hovered {
  opacity: 0.7 !important;
  cursor: pointer;
  transform: scale(1.03);
  overflow: visible;
}
</style>
