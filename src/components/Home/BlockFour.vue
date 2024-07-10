<template>
  <v-container fluid class="custom-container">
    <!-- Common Header -->
    <v-row>
      <v-col cols="12">
        <div class="text-h5 ma-6 text-left">
          See how global cities are adapting to the future
        </div>
      </v-col>
    </v-row>

    <!-- Scrollable Cards -->
    <v-slide-group>
      <v-slide-item
        v-for="(card, index) in cards"
        :key="index"
        class="custom-slide-group"
      >
        <v-card class="rounded-0">
          <v-parallax>
            <v-img :src="card.image" width="400"> </v-img>
          </v-parallax>
          <v-card-text>{{ card.smallText }}</v-card-text>
          <v-card-text class="large-text">{{ card.largeText }}</v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
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
.large-text {
  font-size: 18px;
}
.custom-slide-group {
  margin: 0 10px;
}
.custom-container {
  background-color: #fff;
}
</style>
