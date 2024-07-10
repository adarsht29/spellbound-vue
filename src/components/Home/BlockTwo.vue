<template>
  <v-parallax class="custom-parallax">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" v-for="it in items" :key="it.id">
          <div class="my-text parallax-content text-left">
            <h2 class="font-weight-thin">
              {{ it.sLabel }}
              <span class="font-weight-regular text-capitalize">{{
                it.mLabel
              }}</span>
            </h2>
            <p
              v-for="sIt in it.subItems"
              :key="sIt.id"
              class="font-weight-light"
            >
              {{ sIt.label }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BlockTwo",
  setup() {
    const items = ref([
      {
        id: 1,
        sLabel: "We believe in",
        mLabel: "PEOPLE ARCHITECTURE",
        subItems: [
          {
            id: 11,
            label:
              "A conviction that the values of people and the values of design are one and the same.",
          },
          {
            id: 12,
            label: "A celebration of diversity and prosperity across cultures.",
          },
          {
            id: 13,
            label:
              "A shared sense of empathy that is inclusive of flexibility and built to adapt.",
          },
          {
            id: 14,
            label: "A responsibility to generate impact beyond design.",
          },
        ],
      },
      {
        id: 2,
        sLabel: "We are",
        mLabel: "WOODS BAGOT",
        subItems: [
          { id: 21, label: "We span 17 studios across 6 regions." },
          { id: 22, label: "We do not adhere to a signature style." },
          { id: 23, label: "We are a multi-authorship practice." },
          {
            id: 24,
            label: "We specialize in Architecture, Interiors & Masterplanning.",
          },
        ],
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-text {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}
.custom-parallax {
  background-color: #000;
}
.parallax-content {
  color: white !important;
}
</style>
