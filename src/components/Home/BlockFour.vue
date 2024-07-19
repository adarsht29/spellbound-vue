<template>
  <v-container fluid class="custom-container">
    <!-- Common Header -->
    <v-row>
      <v-col cols="12">
        <div class="text-h4 ma-6 mt-2 mb-1 text-center font-weight-bold">
          See how global cities are adapting to the future
        </div>
      </v-col>
    </v-row>

    <v-sheet elevation="0">
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows="false"
      >
        <v-slide-group-item v-for="(card, index) in cards" :key="index">
          <v-card class="ma-2 rounded-0" width="470">
            <v-img :src="card.image" cover></v-img>
            <div class="pa-2">
              <p class="font-weight-black small-text">
                {{ card.smallText }}
              </p>
              <p class="large-text">{{ card.largeText }}</p>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "BlockFour",
  data() {
    return {
      cards: [
        {
          title: "Card 1",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Dahua 1935",
        },
        {
          title: "Card 2",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Funan",
        },
        {
          title: "Card 3",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Dahua 1935",
        },
        {
          title: "Card 4",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Funan",
        },
        {
          title: "Card 5",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Dahua 1935",
        },
        {
          title: "Card 6",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Funan",
        },
        {
          title: "Card 7",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Dahua 1935",
        },
        {
          title: "Card 8",
          image:
            "https://www.sa.photojaanic.com/blog/wp-content/uploads/sites/2/2017/08/inspiring-indian-photography-communities-1080x720.jpg",
          smallText: "Journal",
          largeText: "Adaptive Reuse: Funan",
        },
      ],
    };
  },
};
</script>

<style scoped>
.small-text {
  font-size: 11px;
}
.large-text {
  font-size: 20px;
}
.custom-slide-group {
  margin: 0 10px;
}
.custom-container {
  background-color: #fff;
}
</style>
