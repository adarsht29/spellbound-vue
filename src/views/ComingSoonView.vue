<template>
  <v-container fluid>
    <v-row
      class="d-flex align-center h-90 justify-center text-center"
      no-gutters
    >
      <v-col>
        <v-icon
          large
          color="#003D33"
          class="spin-animation bounce animated-icon"
          >mdi-rocket</v-icon
        >

        <div class="display-3 fade-in text-h2 font-weight-bold">
          Coming Soon
        </div>
        <div class="fade-in-delayed text-h5">
          We're working hard to launch our new projects. Stay tuned!
        </div>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              class="mt-10 pulse"
              :color="isHovering ? '' : '#003D33'"
              v-bind="props"
              @click="notifyMe"
              >Notify Me</v-btn
            >
          </template>
        </v-hover>
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
  color: #555;
  margin: rem-calc(20) 0;
}
p {
  font-size: 1.2rem;
  color: #777;
}
.h-90 {
  height: 90vh;
}
</style>
