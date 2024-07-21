<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-parallax
      v-bind="props"
      :src="require(`@/assets/${block.image}`)"
      class="parallax-image text-white"
      height="100%"
    >
      <v-row
        v-if="isHovering"
        class="flex-column fill-height justify-center align-left"
      >
        <div class="text-h3 font-weight-thin mb-4">{{ block.title }}</div>
        <div class="text-h5 font-weight-thin mb-4">{{ block.body }}</div>
        <div>
          <v-btn class="rounded-0" variant="outlined"> View Project </v-btn>
        </div>
      </v-row>
    </v-parallax>
  </v-hover>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "CommonImageBlock",
  props: {
    block: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup() {
    const customHeight = ref(700);
    onMounted(() => {
      customHeight.value =
        Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        ) + 50;
    });
    return {
      customHeight,
    };
  },
};
</script>

<style lang="scss" scoped></style>
