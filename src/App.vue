<template>
  <v-app id="inspire">
    <NavHeader />
    <v-main class="bg-grey-lighten-3">
      <v-container fluid class="pa-0 ma-0">
        <router-view />
      </v-container>
    </v-main>
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
#app {
  font-family: century-gothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
