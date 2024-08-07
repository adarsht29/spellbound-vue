<template>
  <ComingSoonView v-if="project && project.comingSoon" />
  <v-container v-else-if="project" fluid class="pa-0">
    <v-parallax :src="project.mainImage"> </v-parallax>
    <v-row no-gutters justify="center" class="pt-10 pb-10">
      <v-col cols="10" md="8">
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="6">
            <div class="text-h4 text-primary-green">{{ project.title }}</div>
            <div class="d-flex text-h6 mt-2 text-gray">
              <template v-for="(sub, index) in project.subtitle" :key="sub">
                <div v-if="index !== 0" class="ml-2 mr-2">|</div>
                <div>{{ sub }}</div>
              </template>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="mt-4 mt-md-2">
            <div
              v-html="project.caption"
              class="text-h5 text-sm-left text-md-right"
            ></div>
          </v-col>
        </v-row>
        <v-divider :thickness="2" class="mt-6"></v-divider>
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
      dense
      justify="center"
      v-for="(section, index) in project.sections"
      :key="index"
      class="mb-16"
    >
      <v-col
        v-for="(image, i) in section.images"
        :key="`${index}+${i}`"
        cols="12"
        :md="section.images.length === 2 ? '6' : '12'"
        :class="[
          section.images.length === 2 && i === 0 ? 'pr-0 pr-md-6' : '',
          section.images.length === 2 && i === 1 ? 'pl-0 pl-md-6' : '',
        ]"
      >
        <v-img :src="image" height="100%" cover> </v-img>
      </v-col>
      <v-col v-if="section.body" cols="10" md="8" class="mt-14">
        <div class="text-h6" v-html="section.body"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "@/config";
import ComingSoonView from "@/views/ComingSoonView.vue";

export default {
  name: "IndividualProject",
  components: { ComingSoonView },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const project = ref(null);

    const checkRoute = () => {
      const pathSegments = route.path.split("/");
      const segment = pathSegments[pathSegments.length - 1];
      if (!projects[segment]) {
        router.push("/whoops");
      } else {
        project.value = projects[segment];
      }
    };

    checkRoute();

    return {
      projects,
      checkRoute,
      project,
    };
  },
};
</script>

<style lang="scss" scoped></style>
