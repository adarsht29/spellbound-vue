<template>
  <div class="spellbound-view">
    <v-container fluid class="ma-0 pa-0 pt-10 pb-10">
      <v-row dense>
        <v-col cols="12">
          <div class="pl-6 pr-6 text-h6">
            <div class="text-h3">Design Culture</div>
            <div class="mt-4">
              Our projects– colorful or monochromatic, modern or traditional -
              they all have a story to tell.
            </div>
            <div>
              A tale actualized by our commitment to the values that define our
              aesthetics.
            </div>
          </div>
          <v-img
            src="https://lh3.googleusercontent.com/d/1Xk7a8mrrixj1CPKpX2tcFu-QdLEDNyMG=w1000"
            contain
            class="mt-8"
          ></v-img>
        </v-col>
      </v-row>

      <v-row dense class="mt-12">
        <v-col cols="12">
          <v-carousel hide-delimiters class="h-100">
            <v-carousel-item
              v-for="(block, index) in valuesBlocks"
              :key="index"
            >
              <v-row no-gutters>
                <v-col cols="12" md="6" class="base-primry-black">
                  <div class="text-content pa-10">
                    <div class="text-h4">{{ block.title }}</div>
                    <p class="mt-8">{{ block.body }}</p>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <v-img :src="block.image"></v-img>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row no-gutters class="mt-12">
        <v-col cols="12" md="6" class="base-primry-black">
          <div class="text-content pt-8">
            <p>
              “Curating threads and synergies between thoughts and visuals from
              visual artists, filmmakers, fashion designers, and writers provide
              me with cues for inspiration. They infuse into me ideas that
              simmer down to visual concepts for my interiors, creating
              interesting outcomes.”
            </p>
            <p class="text-right">
              - Kavitha Kasargod, Principal Architect, Spellbound
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://lh3.googleusercontent.com/d/114UAhmlQ8cwHV5FyKLJl5mHSuTFJACH0=w1000"
            contain
          ></v-img>
        </v-col>
      </v-row>

      <CombinedBlock />
    </v-container>
  </div>
</template>

<script>
import { valuesBlocks } from "@/config";
import CombinedBlock from "@/components/CombinedBlock.vue";
export default {
  name: "SpellboundView",
  components: { CombinedBlock },
  setup() {
    return {
      valuesBlocks,
    };
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  width: 100%;
}
.full-width-image {
  width: 100%;
  height: 100%;
}
.text-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  background-color: #0000008a;
  padding: 2rem;
  box-sizing: border-box;
  color: #fff;
}
p {
  font-size: 18px;
  line-height: 1.5;
}
.text-name {
  font-size: 32px !important;
  line-height: 1.2 !important;
}

@media (max-width: 767px) {
  .image-wrapper {
    height: auto;
  }
  .text-overlay {
    position: static;
    width: 100%;
    background-color: transparent;
    padding: 1rem;
  }
  .full-width-image {
    position: relative;
  }
}
</style>
