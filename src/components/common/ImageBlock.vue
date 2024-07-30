<template>
  <div
    ref="lazyLoadTrigger"
    class="parallax-container"
    :class="{ 'is-visible': isVisible }"
  >
    <v-parallax
      v-if="isVisible"
      :src="block.image"
      class="text-white custom-parallax"
      height="100%"
    >
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-row
            class="h-100 custom-parallax-content ma-0"
            :class="[
              singleBlock ? 'single-block' : '',
              isHovering ? 'hovered' : '',
            ]"
            alignContent="center"
            justify="center"
          >
            <v-col v-if="singleBlock" class="text-left" cols="12" md="8">
              <div
                class="text-content"
                v-bind="props"
                :class="isHovering ? '' : 'text-transparent'"
              >
                <div class="text-h4 font-weight-medium header-font">
                  {{ block.title }}
                </div>
                <div class="text-h6 mt-4" v-html="block.body"></div>
              </div>
            </v-col>
            <v-col v-else class="text-left" cols="12" md="10">
              <div
                class="text-content"
                v-bind="props"
                :class="isHovering ? '' : 'text-transparent'"
              >
                <p class="text-subtitle-1 text-uppercase font-weight-bold">
                  {{ block.title }}
                </p>
                <p class="text-subtitle-2 text-uppercase font-weight-thin">
                  {{ block.subtitle }}
                </p>
                <p class="text-body mt-6" v-html="block.body"></p>
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
        </template>
      </v-hover>
    </v-parallax>
    <div v-else class="spacer">Scroll to load parallax</div>
  </div>
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
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    this.createObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    createObserver() {
      const options = {
        root: null,
        threshold: 0.2,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.observer.unobserve(this.$refs.lazyLoadTrigger);
          }
        });
      }, options);

      this.observer.observe(this.$refs.lazyLoadTrigger);
    },
  },
};
</script>

<style lang="scss" scoped>
.parallax-container {
  min-height: 40vh;
  height: 100%;
  overflow: hidden;
  transition: transform 1s ease, opacity 1s ease;
  transform: translateY(40px); /* Start position, slight vertical offset */
  opacity: 0;
}

.parallax-container.is-visible {
  transform: translateY(0);
  opacity: 1;
}

.router-btn {
  color: inherit;
}

.custom-parallax-content.single-block {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0) !important;
}

.custom-parallax-content.hovered {
  background-image: linear-gradient(rgb(0 0 0/40%) 0 0) !important;
}
</style>
