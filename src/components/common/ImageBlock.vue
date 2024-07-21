<template>
  <!-- <v-parallax
    :src="require(`@/assets/${block.image}`)"
    class="parallax-image text-white"
    height="100%"
  >
    <v-hover v-slot="{ isHovering, props }">
      <v-row
        v-bind="props"
        v-if="singleBlock"
        class="flex-column fill-height justify-center align-left"
      >
        <template v-if="isHovering">
          <div class="text-h3 font-weight-thin mb-4">{{ block.title }}</div>
          <div class="text-h5 font-weight-thin mb-4">{{ block.body }}</div>
          <div>
            <v-btn class="rounded-0" variant="outlined"> View Project </v-btn>
          </div>
        </template>
      </v-row>
      <v-row
        v-bind="props"
        v-else
        class="flex-column fill-height justify-center align-left"
      >
        <template v-if="isHovering"> jkj </template>
      </v-row>
    </v-hover>
  </v-parallax> -->

  <v-parallax
    :src="require(`@/assets/${block.image}`)"
    class="text-white"
    height="100%"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col class="text-left" cols="12" md="8">
        <div class="text-content">
          <p class="text-h2">{{ block.title }}</p>
          <p class="text-h6">
            {{ block.body }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "ImageBlock",
  props: {
    block: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    singleBlock: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  letter-spacing: -1px;
}
</style>
