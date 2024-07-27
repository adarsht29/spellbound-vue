<template>
  <v-container fluid class="pa-0">
    <v-parallax :src="project.mainImage" height="450"> </v-parallax>
    <v-row justify="center" class="section-2">
      <v-col cols="8">
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <div class="text-h4 text-primary-red">{{ project.title }}</div>
            <div class="d-flex text-subtitle-1 mt-2">
              <template v-for="(sub, index) in project.subtitle" :key="sub">
                <div v-if="index !== 0" class="ml-1 mr-1">|</div>
                <div>{{ sub }}</div>
              </template>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div class="text-subtitle-1">{{ project.caption }}</div>
          </v-col>
        </v-row>
        <v-divider :thickness="2" class="mt-10"></v-divider>
        <div class="text-overline text-sub-subtitle mt-2">
          <template v-for="(inf, index) in project.info" :key="index">
            <span v-if="index !== 0" class="ml-1 mr-1">|</span>
            <span class="text-primary-red">{{ inf.main }}</span>
            <span class="ml-1">{{ inf.subtitle }}</span>
          </template>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="section-3">
      <v-col cols="12" sm="12" md="6">
        <v-parallax :src="project.sectionImage" height="450"> </v-parallax>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-carousel hide-delimiters height="450">
          <v-carousel-item
            v-for="(carousel, index) in project.sectionCarouselImage"
            :key="index"
            cover
            ><v-parallax :src="carousel.image" height="450"> </v-parallax
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row justify="center" class="section-4">
      <v-col cols="12" sm="8" md="6">
        <div class="text-subtitle-1" v-html="project.body"></div>
      </v-col>
    </v-row>
    <v-parallax :src="project.subImage" height="450"> </v-parallax>
  </v-container>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/config";

export default {
  name: "IndividualProject",
  components: {},
  setup() {
    const route = useRoute();
    const segment = computed(() => {
      const pathSegments = route.path.split("/");
      return pathSegments[pathSegments.length - 1];
    });
    const project = computed(() => projects[segment.value]);

    return {
      segment,
      projects,
      project,
    };
  },
};
</script>

<style lang="scss" scoped>
.section-2,
.section-4 {
  padding-top: 85px;
  padding-bottom: 85px;
}
.text-sub-subtitle {
  line-height: 1.7 !important;
}
</style>
