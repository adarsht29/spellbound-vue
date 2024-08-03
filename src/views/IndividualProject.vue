<template>
  <ComingSoonView v-if="project.comingSoon" />
  <v-container v-else fluid class="pa-0">
    <v-parallax :src="project.mainImage"> </v-parallax>
    <v-row justify="center">
      <v-col cols="8">
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <div class="text-h4 text-primary-green">{{ project.title }}</div>
            <div class="d-flex text-subtitle-1 mt-2">
              <template v-for="(sub, index) in project.subtitle" :key="sub">
                <div v-if="index !== 0" class="ml-2 mr-2">|</div>
                <div>{{ sub }}</div>
              </template>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div v-html="project.caption" class="text-subtitle-1"></div>
          </v-col>
        </v-row>
        <v-divider :thickness="2" class="mt-8"></v-divider>
        <div class="mt-3 text-uppercase">
          <template v-for="(inf, index) in project.info" :key="index">
            <span v-if="index !== 0" class="ml-1 mr-1">|</span>
            <span class="text-primary-green font-weight-bold">{{
              inf.main
            }}</span>
            <span class="ml-1">{{ inf.subtitle }}</span>
          </template>
        </div>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      v-for="(section, index) in project.sections"
      :key="index"
    >
      <v-col v-if="!section.imageTop" cols="12">
        <div class="text-subtitle-1" v-html="section.body"></div>
      </v-col>
      <v-col
        v-for="(image, i) in section.images"
        :key="`${index}+${i}`"
        cols="12"
      >
        <v-img :src="image"> </v-img>
      </v-col>
      <v-col v-if="section.imageTop" cols="12">
        <div class="text-subtitle-1" v-html="section.body"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/config";
import ComingSoonView from "@/views/ComingSoonView.vue";

export default {
  name: "IndividualProject",
  components: { ComingSoonView },
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

<style lang="scss" scoped></style>
