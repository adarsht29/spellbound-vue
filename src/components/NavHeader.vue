<template>
  <div style="position: relative">
    <v-app-bar color="white" dark class="fixed-bar" height="50">
      <router-link to="/"
        ><img
          alt="logo"
          :src="require('../assets/bespellbound_logo.jpg')"
          height="50"
          class="custom-img ml-3 mr-3"
      /></router-link>
      <v-tabs v-model="tab" grow class="d-none d-md-flex ml-3 mr-3" height="50">
        <v-menu
          v-for="link in links"
          :key="link.id"
          open-on-hover
          transition="fade-transition"
        >
          <template v-slot:activator="{ props }">
            <v-tab
              :text="link.label"
              v-bind="props"
              class="custom-tab text-none"
            ></v-tab>
          </template>

          <v-list class="rounded-0">
            <v-list-item v-for="item in link.menuItems" :key="item.id">
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
      <v-spacer class="d-md-none"></v-spacer>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-md-none"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </div>

  <!-- Navigation drawer -->
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    class="custom-nav-drawer"
  >
    <v-list v-model:opened="open">
      <v-list-group v-for="link in links" :key="link.id" :value="link.label">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :title="link.label"></v-list-item>
        </template>

        <v-list-item
          v-for="item in link.menuItems"
          :key="item.id"
          :title="item.label"
          :value="item.label"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref } from "vue";
import { links } from "@/config";

export default {
  name: "NavHeader",
  data() {
    return {
      drawer: false,
      tab: null,
      items: ["web", "shopping", "videos", "images"],
    };
  },
  setup() {
    const open = ref([]);
    const isDivOutOfViewport = ref(true);

    return {
      links,
      open,
      isDivOutOfViewport,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  font-weight: 400;
  width: 40%;
}
:deep(.v-img__img) {
  width: auto;
}
.fixed-bar {
  position: absolute !important;
  width: 100%;
}
.custom-tab :deep(.v-tab__slider) {
  opacity: 0;
}
.custom-tab :deep(.v-btn__content) {
  font-size: 12px;
}
.custom-nav-drawer.v-navigation-drawer--active {
  width: 100% !important;
  height: max-content !important;
}
</style>
