<template>
  <v-container fluid class="pa-0">
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1 class="text-h4 font-weight-thin mb-4">Vuetify</h1>
        <h4 class="subheading">Build your application today!</h4>
      </div>
    </v-parallax>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  name: "InteriorView",
  setup() {
    const items = ref([]);

    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped></style>
