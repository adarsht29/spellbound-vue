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
html * {
  font-family: "Calibri Light", "Calibri", "Arial", sans-serif !important;
}
.header-font {
  font-family: "Roboto", sans-serif !important;
  font-size: 32px !important;
}
.base-black {
  background: #000 !important;
  color: #fafafa !important;
}
.base-primry-black {
  background: #1d1d1d !important;
  color: #fafafa !important;
}
.base-primry-white {
  background: #fafafa !important;
  color: #1d1d1d !important;
}
.inter-font {
  font-family: "Inter" !important;
}
.text-primary-green {
  color: #003d33 !important;
}
.text-primary-red {
  color: #1d1d1d !important;
}
.text-gray {
  color: #9a9a9a !important;
}
.router-btn {
  color: inherit !important;
}
.section-header-font {
  font-family: "Calibri Light", "Calibri", "Arial", sans-serif !important;
  font-size: 28px !important;
}
.section-image-text-layout {
  padding-left: 60px !important;
  padding-right: 60px !important;
  padding-top: 80px !important;
}
.section-image-layout {
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 80px !important;
}
</style>

<style lang="scss" scoped>
.footer {
  margin-top: 80px;
}
.whatsapp-widget {
  position: fixed;
  bottom: 16px;
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
