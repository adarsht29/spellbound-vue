<template>
  <v-container fluid class="ma-0 pa-0">
    <video
      :key="require(`@/assets/${image}`)"
      autoplay
      muted="true"
      width="100%"
      class="d-block video"
      loop
    >
      <source :src="require(`@/assets/${image}`)" type="video/mp4" />
    </video>
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "BlockOne",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  setup() {
    const customHeight = ref(700);
    onMounted(() => {
      customHeight.value =
        Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        ) - 50;
    });
    return {
      customHeight,
    };
  },
};
</script>

<style lang="scss" scoped></style>
