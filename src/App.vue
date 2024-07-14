<template>
  <v-app id="inspire">
    <NavHeader>
      <v-container fluid class="pa-0 ma-0">
        <router-view />
      </v-container>
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
  font-family: century-gothic, sans-serif !important;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
