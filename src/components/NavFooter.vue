<template>
  <v-footer>
    <v-container fluid>
      <v-row class="hidden-sm-and-down">
        <v-col cols="2" class="text-left">
          <img alt="logo" :src="require('../assets/logo.png')" height="50" />
        </v-col>

        <v-col col="8">
          <v-row>
            <v-col
              cols="3"
              sm="4"
              md="3"
              v-for="link in links"
              :key="link.id"
              class="text-left"
            >
              <h4>{{ link.label }}</h4>
              <v-list dense>
                <v-list-item
                  v-for="item in link.menuItems"
                  :key="item.id"
                  link
                  class="pl-0 pr-0"
                >
                  {{ item.label }}
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="2" class="d-flex">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            class="rounded-0"
            variant="text"
          ></v-btn>
        </v-col>
      </v-row>

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
                class="text-caption pa-0 base-primry-black"
              >
                {{ item.label }}
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-footer>
</template>

<script>
import { links } from "@/config";

export default {
  setup() {
    const icons = [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
    ];
    return {
      links,
      icons,
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-exp-list-item {
  font-size: 12px;
  padding-left: 22px;
  padding-inline: 0 !important;
}
:deep(.v-expansion-panel) {
  margin-top: 0 !important;
  min-height: auto !important;
}
:deep(.v-expansion-panel) .v-expansion-panel-title {
  min-height: auto !important;
}
:deep(.v-expansion-panels) .v-expansion-panel--active:not(:first-child)::after,
.v-expansion-panel--active + .v-expansion-panel::after {
  opacity: 1 !important;
}
.custom-exp-panels {
  :deep(.v-expansion-panel-title--active) {
    background-color: #1d1d1d !important;
    color: #fafafa !important;
  }
}
</style>
