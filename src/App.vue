<template>
  <v-app id="inspire">
    <NavHeader>
      <template v-slot:navigationContent>
        <router-view />
      </template>
    </NavHeader>
    <NavFooter class="footer" />
    <v-btn
      icon
      class="whatsapp-widget"
      href="javascript:void(0);"
      color="green"
      @click="openWhatsApp()"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import { ref } from "vue";
import NavHeader from "@/components/NavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";

export default {
  name: "App",
  components: {
    NavHeader,
    NavFooter,
  },
  setup() {
    const phoneNumber = ref("+919897882511");
    const message = ref(
      "Hello Spellbound, I'm interested in discussing interior design services for my [home/office/restaurant]. Could you please provide more information on your services?"
    );

    const openWhatsApp = () => {
      const whatsappLink = `https://wa.me/${
        phoneNumber.value
      }?text=${encodeURIComponent(message.value)}`;
      window.open(whatsappLink, "_blank");
    };

    return {
      phoneNumber,
      message,
      openWhatsApp,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/mixins.scss";
@import "@/styles/common.scss";
</style>

<style lang="scss" scoped>
.whatsapp-widget {
  position: fixed;
  bottom: 40px;
  right: 16px;
  z-index: 1000;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.whatsapp-widget:hover {
  background-color: #20b857;
}
</style>
