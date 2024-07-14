<template>
  <!-- Desktop Navigation -->

  <v-container fluid class="pa-0 ma-0 custom-desktop-navigation d-none">
    <v-row no-gutters>
      <v-col cols="2" class="text-left">
        <a href="javascript:void(0);" class="logo-btn">
          <img alt="logo" :src="require('../assets/logo.png')" class="logo" />
        </a>
      </v-col>
      <v-col cols="10" class="text-left">
        <v-row no-gutters class="h-100">
          <v-col v-for="link in links" :key="link.id">
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-sheet
                  class="pa-2 text-caption h-100 align-center d-flex cursor-pointer"
                  v-bind="props"
                >
                  {{ link.label }}
                </v-sheet>
              </template>

              <v-list class="rounded-0 pa-0">
                <v-list-item v-for="item in link.menuItems" :key="item.id">
                  <v-list-item-title class="text-caption">{{
                    item.label
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <!-- Mobile Navigation -->

  <v-container fluid class="pa-0 ma-0 custom-mobile-navigation">
    <v-card class="rounded-0" flat>
      <v-layout>
        <v-app-bar color="primary" prominent density="compact">
          <v-toolbar-title class="ma-auto">
            <a href="javascript:void(0);" class="logo-btn">
              <img
                alt="logo"
                :src="require('../assets/logo.png')"
                class="logo"
              />
            </a>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
            class="rounded-0 ma-auto"
          ></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
          aaaa
        </v-navigation-drawer>

        <v-main>
          <v-card-text>
            <slot></slot>
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </v-container>

  <!-- <v-container fluid class="pa-0 ma-0 custom-mobile-navigation">
    <v-card rounded="0" flat variant="elevated">
      <v-layout>
        <v-toolbar density="compact" color="white">
          <a href="javascript:void(0);" class="logo-btn">
            <img alt="logo" :src="require('../assets/logo.png')" class="logo" />
          </a>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
            class="rounded-0"
          ></v-app-bar-nav-icon>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main style="height: 500px">
          <v-card-text>
            The navigation drawer will appear from the bottom on smaller size
            screens.
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </v-container> -->
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavHeader",
  setup() {
    const drawer = ref(false);

    return {
      drawer,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo-btn {
  display: block;
  max-height: 48px;
  height: auto;
}
.logo {
  height: auto;
  max-height: inherit;
}
</style>
