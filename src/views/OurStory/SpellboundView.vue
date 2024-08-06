<template>
  <div class="spellbound-view">
    <v-container fluid class="ma-0 pa-0 pb-0">
      <BlockOne image="Spellbound_video.mp4" />

      <v-row dense justify="space-between" class="pt-12">
        <v-col
          cols="12"
          md="6"
          class="justify-center align-center d-flex pl-13 pr-13 pl-md-16 pr-md-16"
        >
          <div class="text-content">
            <div class="section-header-font">
              Spellbound is an interior design firm founded by Kavitha Kasargod,
              that specializes in crafting spatial ‘experiences.’ At Spellbound,
              design is beyond lines, curves, tones, and textures. It’s about
              crafting & curating spaces that tell you a story.
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="mt-12 mt-md-0">
          <v-img
            src="https://lh3.googleusercontent.com/d/1l3aHsUmz-iT7x27p8y-VTAlWLF7wiFtw=w1000"
          ></v-img>
        </v-col>
      </v-row>

      <v-row dense class="pt-12">
        <v-col cols="12">
          <div class="image-wrapper">
            <v-img
              src="https://lh3.googleusercontent.com/d/114UAhmlQ8cwHV5FyKLJl5mHSuTFJACH0=w1000"
              contain
              class="full-width-image"
            ></v-img>
            <div class="text-overlay">
              <div class="text-name font-weight-bold">
                That’s Kavitha, our Creative Director
              </div>
              <div class="mt-16">
                <p class="font-italic">
                  “I wrote a lot of poetry until I discovered design. The
                  indulgence of the clever play of words has simply given way to
                  playful juxtapositions of colours, contexts, perceptions, and
                  perspectives. My projects are a canvas to showcase the 'Beauty
                  of a Philosophy' in the spatial realm.”
                </p>
                <p class="text-right">– Kavitha Kasargod</p>
              </div>
              <div class="mt-16">
                <p>
                  Kavitha holds a degree in Architecture and a diploma in
                  Journalism and attended The Creative and Cultural Business
                  Programme (IIM, Ahmedabad). With more than 15 years of design
                  experience in luxury residential, wellness, hospitality,
                  retail & visual merchandising, she has an all encompassing
                  understanding & know-how in planning, designing, and process
                  of execution of projects in these sectors.
                </p>
              </div>
              <div class="mt-16">
                <p>
                  Her purpose through design is to translate spaces into
                  compelling spatial expressions. Kavitha brings an approach
                  that translates to a unique design aesthetic. It appears she
                  has set out to create Visual Poetry.
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <CombinedBlock />
    </v-container>
  </div>
</template>

<script>
import BlockOne from "@/components/Home/BlockOne.vue";
import CombinedBlock from "@/components/CombinedBlock.vue";
export default {
  name: "SpellboundView",
  components: {
    BlockOne,
    CombinedBlock,
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
  font-size: rem-calc(15);
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
    padding: 2rem;
    color: #000;
    padding-left: rem-calc(48);
    padding-bottom: rem-calc(48);
  }
  .full-width-image {
    position: relative;
  }
}
</style>
