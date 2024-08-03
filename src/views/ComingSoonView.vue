<template>
  <v-container fluid>
    <v-row
      class="d-flex align-center h-screen justify-center text-center"
      no-gutters
    >
      <v-col>
        <v-icon
          large
          color="grey lighten-1"
          class="spin-animation bounce animated-icon"
          >mdi-rocket</v-icon
        >

        <h1 class="display-3 fade-in">Coming Soon</h1>
        <h2 class="fade-in-delayed">
          We're working hard to launch our new product. Stay tuned!
        </h2>
        <v-btn color="primary" class="mt-5 pulse" @click="notifyMe"
          >Notify Me</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ComingSoonView",
  methods: {
    goHome() {
      this.$router.push("/");
    },
    notifyMe() {
      alert("We'll notify you once we launch!");
    },
  },
};
</script>

<style lang="scss" scoped>
.animated-icon {
  font-size: 4rem;
}
.spin-animation {
  animation: spin 4s infinite linear;
}
.bounce {
  animation: bounce 2s infinite;
}
.fade-in {
  animation: fadeIn 2s ease-in-out forwards;
}
.fade-in-delayed {
  animation: fadeIn 2s ease-in-out 1s forwards;
}
.fade-in-more {
  animation: fadeIn 2s ease-in-out 2s forwards;
}
.pulse {
  animation: pulse 1.5s infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.display-3 {
  font-size: 3rem;
  color: #555;
  margin: 20px 0;
}
h2 {
  font-weight: normal;
  color: #888;
  margin-bottom: 30px;
}
p {
  font-size: 1.2rem;
  color: #777;
}
</style>
