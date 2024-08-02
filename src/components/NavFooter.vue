<template>
  <v-footer class="pa-0">
    <v-container fluid class="custom-footer base-primry-black pt-16">
      <v-row class="hidden-sm-and-down">
        <v-col cols="2" class="text-left d-flex pl-10">
          <img
            alt="logo"
            src="https://lh3.googleusercontent.com/d/1eerjMgjAP9wjOAjdySBkGwRn-DAANVsm=w1000"
            height="50"
          />
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
              <div class="pl-4 pr-4 font-weight-medium text-body-1">
                {{ link.label }}
              </div>
              <v-list dense class="base-primry-black">
                <router-link
                  v-for="item in link.menuItems"
                  :key="item.id"
                  :to="item.url"
                  class="text-decoration-none text-black text-body-1 text-gray"
                  ><v-list-item
                    link
                    class="base-primry-black text-body-1 text-gray"
                  >
                    {{ item.label }}
                  </v-list-item></router-link
                >
              </v-list>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="2" class="pt-0">
          <div class="d-flex">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              class="rounded-0"
              variant="text"
            ></v-btn>
          </div>

          <div class="d-flex text-subtitle-2 mb-4 mt-3">
            Let’s bring your story to life.
          </div>

          <div class="d-flex">
            <v-text-field
              label="E-mail ID"
              variant="underlined"
              density="compact"
              class="custom-input"
            ></v-text-field>
          </div>
          <div class="d-flex">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-btn
                  class="me-4 elevation-1"
                  type="submit"
                  v-bind="props"
                  :color="isHovering ? '#003D33' : ''"
                >
                  submit
                </v-btn>
              </template>
            </v-hover>
          </div>
        </v-col>
      </v-row>

      <v-expansion-panels
        elevation="0"
        class="d-md-none rounded-0 custom-exp-panels"
        variant="accordion"
        :static="true"
      >
        <v-expansion-panel
          v-for="link in links"
          :key="link.id"
          class="rounded-0 base-primry-black"
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
              <router-link
                v-for="item in link.menuItems"
                :key="item.id"
                :to="item.url"
                class="text-decoration-none text-black"
                ><v-list-item link class="text-caption pa-0 base-primry-black">
                  {{ item.label }}
                </v-list-item></router-link
              >
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-row class="ma-0 mt-10">
        <v-col cols="3" class="pa-0 d-flex align-end">
          <div class="text-subtitle-2">
            © 2024 Spellbound. All rights reserved.
          </div>
        </v-col>
        <v-col
          cols="6"
          class="pa-0 d-flex align-end justify-center text-center"
        >
          <div class="text-subtitle-2 text-gray">
            Site Crafted and Maintained by SS Communications<br />For support or
            inquiries, contact us at hellosscommunications@gmail.com |
            +91-7303262306
          </div>
        </v-col>
        <v-col cols="3" class="pa-0 d-flex align-end justify-end">
          <div class="text-subtitle-2">Privacy Policy</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { links } from "@/config";

export default {
  setup() {
    const icons = ["mdi-linkedin", "mdi-instagram"];
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
