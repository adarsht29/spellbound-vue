<template>
  <v-container fluid class="mt-10">
    <v-row class="justify-center">
      <v-col cols="12" md="9">
        <div class="text-left">
          <div
            v-if="block.title"
            v-html="block.title"
            class="font-weight-medium block-title"
          ></div>
          <div
            v-if="block.subtitle"
            v-html="block.subtitle"
            class="block-subtitle mt-6"
          ></div>
        </div>
        <v-img
          v-if="block.image"
          :src="block.image"
          height="auto"
          class="mt-8"
        ></v-img>
        <div v-if="block.caption" class="text-left font-weight-bold mt-1">
          <div v-html="block.caption"></div>
        </div>
        <div v-if="block.body" class="text-left block-body mt-6">
          <div v-html="block.body"></div>
        </div>

        <v-col cols="12" v-for="b1 in block.blocks1" :key="b1.id" class="mt-4">
          <div class="text-left">
            <div
              v-if="b1.title"
              v-html="b1.title"
              class="font-weight-medium block1-title"
            ></div>
            <div
              v-if="b1.subtitle"
              v-html="b1.subtitle"
              class="block-subtitle mt-6"
            ></div>
          </div>
          <v-img
            v-if="b1.image"
            :src="b1.image"
            height="auto"
            class="mt-8"
          ></v-img>
          <div v-if="b1.caption" class="text-left font-weight-bold mt-1">
            <div v-html="b1.caption"></div>
          </div>
          <div v-if="b1.body" class="text-left block-body mt-6">
            <div v-html="b1.body"></div>
          </div>

          <v-col cols="12" v-for="b2 in b1.blocks2" :key="b2.id" class="mt-4">
            <div class="text-left">
              <div
                v-if="b2.title"
                v-html="b2.title"
                class="font-weight-medium block2-title"
              ></div>
              <div
                v-if="b2.subtitle"
                v-html="b2.subtitle"
                class="block-subtitle mt-6"
              ></div>
            </div>
            <v-img
              v-if="b2.image"
              :src="b2.image"
              height="auto"
              class="mt-8"
            ></v-img>
            <div v-if="b2.caption" class="text-left font-weight-bold mt-1">
              <div v-html="b2.caption"></div>
            </div>
            <div v-if="b2.body" class="text-left block-body mt-6">
              <div v-html="b2.body"></div>
            </div>

            <v-col cols="12" v-for="b3 in b2.blocks3" :key="b3.id" class="mt-4">
              <div class="text-left">
                <div
                  v-if="b3.title"
                  v-html="b3.title"
                  class="font-weight-medium block3-title"
                ></div>
                <div
                  v-if="b3.subtitle"
                  v-html="b3.subtitle"
                  class="block-subtitle mt-6"
                ></div>
              </div>

              <v-img
                v-if="b3.image"
                :src="b3.image"
                height="auto"
                class="mt-8"
              ></v-img>
              <div v-if="b3.caption" class="text-left font-weight-bold mt-1">
                <div v-html="b3.caption"></div>
              </div>

              <div v-if="b3.body" class="text-left block-body mt-6">
                <div v-html="b3.body"></div>
              </div>
            </v-col>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { chronicesBlogs } from "@/config";

export default {
  name: "IndividualChronicle",
  components: {},
  setup() {
    const route = useRoute();
    const segment = computed(() => {
      const pathSegments = route.path.split("/");
      return pathSegments[pathSegments.length - 1];
    });
    const block = computed(() => chronicesBlogs[segment.value]);

    return {
      segment,
      chronicesBlogs,
      block,
    };
  },
};
</script>

<style lang="scss" scoped>
.block-title {
  font-size: 40px !important;
  line-height: 1.2 !important;
}
.block1-title {
  font-size: 35px !important;
  line-height: 1.2 !important;
}
.block2-title {
  font-size: 30px !important;
  line-height: 1.2 !important;
}
.block3-title {
  font-size: 25px !important;
  line-height: 1.2 !important;
}
.block-subtitle {
  font-size: 20px !important;
}
.block-body {
  font-size: 20px !important;
}
:deep(.text-special) {
  color: #747474 !important;
  font-style: italic !important;
}
:deep(.text-normal) {
  color: #747474 !important;
}
:deep(ul) {
  margin-left: 40px !important;
}
</style>
