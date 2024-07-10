<template>
  <v-container fluid class="d-flex align-center justify-center pa-0 ma-0">
    <v-img alt="logo" :src="require('../assets/bespellbound_logo.jpg')"></v-img>

    <v-menu v-for="link in links" :key="link.id" open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          :text="link.label"
          variant="text"
          size="x-large"
          rounded="0"
          class="nav-link"
        ></v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in link.menuItems" :key="item.id">
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <v-responsive max-width="160">
      <v-btn variant="text" rounded="0" class="ms-3" icon="mdi-magnify"></v-btn>
    </v-responsive>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavHeader",
  setup() {
    const links = ref([
      {
        id: 1,
        label: "Architectures",
        menuItems: [
          { id: 1, label: "1 Item 1" },
          { id: 2, label: "Item 2" },
          { id: 3, label: "Item 3" },
          { id: 4, label: "Item 4" },
        ],
      },
      {
        id: 2,
        label: "Interiors",
        menuItems: [
          { id: 1, label: "2 Item 1" },
          { id: 2, label: "Item 2" },
          { id: 3, label: "Item 3" },
          { id: 4, label: "Item 4" },
        ],
      },
      {
        id: 3,
        label: "Adaptive-Reuse",
        menuItems: [
          { id: 1, label: "3 Item 1" },
          { id: 2, label: "Item 2" },
          { id: 3, label: "Item 3" },
          { id: 4, label: "Item 4" },
        ],
      },
      {
        id: 4,
        label: "News and Views",
        menuItems: [
          { id: 1, label: "4 Item 1" },
          { id: 2, label: "Item 2" },
          { id: 3, label: "Item 3" },
          { id: 4, label: "Item 4" },
        ],
      },
      {
        id: 5,
        label: "About",
        menuItems: [
          { id: 1, label: "5 Item 1" },
          { id: 2, label: "Item 2" },
          { id: 3, label: "Item 3" },
          { id: 4, label: "Item 4" },
        ],
      },
    ]);

    return {
      links,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  font-size: 14px;
  font-weight: 400;
}
</style>
