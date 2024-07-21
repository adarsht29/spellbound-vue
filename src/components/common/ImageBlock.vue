<template>
  <v-parallax
    :src="require(`@/assets/${block.image}`)"
    class="text-white"
    height="100%"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col v-if="singleBlock" class="text-left" cols="12" md="8">
        <div class="text-content">
          <p class="text-h2">{{ block.title }}</p>
          <p class="text-h6">
            {{ block.body }}
          </p>
        </div>
      </v-col>

      <v-col v-else class="text-left" cols="12" md="10">
        <div class="text-content">
          <p class="text-subtitle-1 text-uppercase font-weight-bold">
            {{ block.title }}
          </p>
          <p class="text-subtitle-2 text-uppercase font-weight-thin">
            {{ block.subtitle }}
          </p>
          <p class="text-body mt-6">
            {{ block.body }}
          </p>
          <div class="mt-6">
            <router-link
              :to="block.url"
              class="text-decoration-none router-btn"
            >
              <v-btn
                variant="outlined"
                class="rounded-0 text-overline text-uppercase"
              >
                View Project
              </v-btn>
            </router-link>
          </div>
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
.router-btn {
  color: inherit;
}
</style>
