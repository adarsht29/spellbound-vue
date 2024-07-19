<template>
  <v-app id="inspire">
    <NavHeader>
      <template v-slot:navigationContent>
        <router-view />
      </template>
    </NavHeader>
    <NavFooter />
  </v-app>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";

export default {
  name: "App",
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>

<style lang="scss">
html * {
  font-family: "Montserrat" !important;
}
.base-black {
  background: #000 !important;
  color: #fafafa !important;
}
.base-primry-black {
  background: #1d1d1d !important;
  color: #fafafa !important;
}
.base-primry-white {
  background: #fafafa !important;
  color: #1d1d1d !important;
}
</style>
