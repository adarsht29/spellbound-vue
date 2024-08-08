<template>
  <v-dialog
    v-model="showCookieDialog"
    persistent
    width="100%"
    height="100%"
    class="cookie-dialog"
  >
    <v-card class="pt-4 pb-2 pl-2 pr-2 base-primry-black">
      <v-card-title class="text-h5 pl-6 pr-6"
        >Your privacy is important to us</v-card-title
      >
      <v-card-text>
        <p>
          Our website utilizes cookies to enhance your browsing experience and
          analyze site visits and usage. Would you like to continue and accept
          these cookies?
        </p>
        <p class="mt-4">For more information, please view our cookie policy.</p>
      </v-card-text>
      <v-card-actions class="pa-6">
        <v-btn
          color="#003d33"
          class="text-capitalize"
          variant="flat"
          @click="acceptCookies"
          >Yes, I Accept</v-btn
        >
        <v-btn
          class="text-capitalize ml-4"
          variant="flat"
          @click="declineCookies"
          >Decline</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      showCookieDialog: false,
    };
  },
  created() {
    this.checkCookiePreference();
  },
  methods: {
    checkCookiePreference() {
      const cookiePreference = localStorage.getItem("cookieAccepted");
      if (!cookiePreference) {
        this.showCookieDialog = true;
      }
    },
    acceptCookies() {
      localStorage.setItem("cookieAccepted", "true");
      this.showCookieDialog = false;
    },
    declineCookies() {
      localStorage.setItem("cookieAccepted", "false");
      this.showCookieDialog = false;
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
}
.v-overlay__scrim {
  background-color: transparent !important; /* Make the overlay background transparent */
}
.cookie-dialog {
  .v-card {
    max-width: 400px;
    display: grid;
  }
}
.cookie-dialog:deep(.v-overlay__content) {
  justify-content: flex-end !important;
  align-items: flex-end !important;
}
</style>
