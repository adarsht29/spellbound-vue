<template>
  <v-container fluid class="pa-0 ma-0 custom-navigation">
    <v-card class="rounded-0" flat>
      <v-layout>
        <v-app-bar prominent density="compact" class="pl-4 pr-4">
          <v-sheet
            class="text-caption h-100 align-center d-flex cursor-pointer w-100"
          >
            <a href="javascript:void(0);" class="logo-btn">
              <img
                alt="logo"
                :src="require('../assets/logo.png')"
                class="logo"
              />
            </a>
          </v-sheet>

          <!-- Desktop Navigation -->

          <template v-if="mdAndUp">
            <v-menu open-on-hover v-for="link in links" :key="link.id">
              <template v-slot:activator="{ isActive, props }">
                <v-sheet
                  class="pa-2 text-caption h-100 w-100 align-center d-flex cursor-pointer text-break pl-4 pr-4"
                  v-bind="props"
                  :class="isActive ? 'base-primry-black' : ''"
                >
                  {{ link.label }}
                </v-sheet>
              </template>

              <v-list class="rounded-0 pa-0 base-primry-black">
                <v-list-item
                  v-for="item in link.menuItems"
                  :key="item.id"
                  class="base-primry-black"
                >
                  <v-list-item-title class="text-caption base-primry-black">{{
                    item.label
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>

          <!-- /Desktop Navigation -->

          <!-- Mobile Navigation -->

          <template v-else>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon
              variant="text"
              @click.stop="drawer = !drawer"
              class="rounded-0 ma-auto"
            ></v-app-bar-nav-icon>
          </template>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          temporary
          class="custom-nav-drawer"
        >
          <v-expansion-panels
            elevation="0"
            class="d-md-none rounded-0 custom-exp-panels"
            variant="accordion"
            static="true"
          >
            <v-expansion-panel
              v-for="link in links"
              :key="link.id"
              class="rounded-0"
            >
              <v-expansion-panel-title
                expand-icon="mdi-plus"
                collapse-icon="mdi-minus"
                class="text-caption"
              >
                {{ link.label }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="base-primry-black">
                <v-list class="text-left pa-0">
                  <v-list-item
                    v-for="item in link.menuItems"
                    :key="item.id"
                    link
                    class="text-caption pa-0"
                  >
                    {{ item.label }}
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-navigation-drawer>

        <!-- /Mobile Navigation -->

        <v-main>
          <v-card-text class="pa-0">
            <v-container fluid class="pa-0 ma-0">
              <slot name="navigationContent"></slot>
            </v-container>
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { links } from "@/config";

export default {
  name: "NavHeader",
  setup() {
    const drawer = ref(false);
    const icons = ref([
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
    ]);
    const { mdAndUp } = useDisplay();

    return {
      drawer,
      links,
      mdAndUp,
      icons,
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
.custom-nav-drawer {
  border: 0 !important;
}
.custom-exp-panels {
  :deep(.v-expansion-panel-title--active) {
    background-color: #1d1d1d !important;
    color: #fafafa !important;
  }
}
</style>
