<template>
  <v-footer class="pa-0">
    <v-container fluid class="custom-footer base-primry-black pa-0 pt-12">
      <v-row class="hidden-sm-and-down">
        <v-col cols="2" class="text-left d-flex pl-10">
          <img
            alt="logo"
            src="https://lh3.googleusercontent.com/d/1eerjMgjAP9wjOAjdySBkGwRn-DAANVsm=w1000"
            height="50"
          />
        </v-col>

        <v-col col="8">
          <v-row>
            <v-col
              cols="3"
              sm="4"
              md="3"
              v-for="link in links"
              :key="link.id"
              class="text-left"
            >
              <div class="pl-4 pr-4 font-weight-medium text-body-1">
                {{ link.label }}
              </div>
              <v-list dense class="base-primry-black">
                <router-link
                  v-for="item in link.menuItems"
                  :key="item.id"
                  :to="item.url"
                  class="text-decoration-none text-black text-body-1 text-gray"
                  ><v-list-item
                    link
                    class="base-primry-black text-body-1 text-gray"
                  >
                    {{ item.label }}
                  </v-list-item></router-link
                >
              </v-list>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="2" class="pt-0">
          <div class="d-flex">
            <template v-for="social in socials" :key="social.icon">
              <a
                :href="social.url"
                target="_blank"
                class="text-decoration-none text-white"
              >
                <v-btn
                  :icon="social.icon"
                  class="rounded-0"
                  variant="text"
                ></v-btn>
              </a>
            </template>
          </div>

          <div class="d-flex text-subtitle-2 mb-4 mt-3">
            Let’s bring your story to life.
          </div>
          <!-- Desktop Form -->
          <v-form @submit.prevent="submitDesktopForm" ref="desktopForm">
            <div class="d-flex">
              <v-text-field
                v-model="emailDesktop"
                :error-messages="emailDesktopError"
                label="E-mail ID"
                variant="underlined"
                density="compact"
                class="custom-input"
                @input="validateEmailDesktop"
              >
                <template v-slot:label>
                  E-mail ID
                  <span class="required-asterisk">*</span>
                </template>
              </v-text-field>
            </div>
            <div class="d-flex mt-2">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    class="me-4 elevation-1"
                    type="submit"
                    v-bind="props"
                    :color="isHovering ? '#003D33' : ''"
                  >
                    submit
                  </v-btn>
                </template>
              </v-hover>
            </div>
          </v-form>
        </v-col>
      </v-row>

      <v-expansion-panels
        elevation="0"
        class="d-md-none rounded-0 custom-exp-panels"
        variant="accordion"
        :static="true"
      >
        <v-expansion-panel
          v-for="link in links"
          :key="link.id"
          class="rounded-0 base-primry-black"
        >
          <v-expansion-panel-title
            expand-icon="mdi-plus"
            collapse-icon="mdi-minus"
            class="text-caption"
          >
            {{ link.label }}
          </v-expansion-panel-title>
          <v-expansion-panel-text class="base-primry-black">
            <v-list class="text-left pa-0">
              <router-link
                v-for="item in link.menuItems"
                :key="item.id"
                :to="item.url"
                class="text-decoration-none text-black"
                ><v-list-item
                  link
                  class="text-caption pa-0 base-primry-black pl-6 pr-6"
                >
                  {{ item.label }}
                </v-list-item></router-link
              >
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-row v-if="!mdAndUp" class="pl-2 pr-2">
        <v-col cols="12" class="pb-0">
          <template v-for="social in socials" :key="social.icon">
            <a
              :href="social.url"
              target="_blank"
              class="text-decoration-none text-white"
            >
              <v-btn
                :icon="social.icon"
                class="rounded-0"
                variant="text"
              ></v-btn>
            </a>
          </template>
        </v-col>
        <v-col cols="12">
          <div class="d-flex text-subtitle-2 mb-4 mt-3 pr-4 pl-4">
            Let’s bring your story to life.
          </div>
          <!-- Mobile Form -->
          <v-form @submit.prevent="submitMobileForm" ref="mobileForm">
            <div class="d-flex pa-0 pr-4 pl-4">
              <v-text-field
                v-model="emailMobile"
                :error-messages="emailMobileError"
                label="E-mail ID"
                variant="underlined"
                density="compact"
                class="custom-input"
                @input="validateEmailMobile"
              >
                <template v-slot:label>
                  E-mail ID
                  <span class="required-asterisk">*</span>
                </template>
              </v-text-field>

              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-btn
                    class="elevation-1 ml-8"
                    type="submit"
                    density="comfortable"
                    v-bind="props"
                    :color="isHovering ? '#003D33' : ''"
                  >
                    submit
                  </v-btn>
                </template>
              </v-hover>
            </div>
          </v-form>
        </v-col>
      </v-row>

      <v-row class="ma-0 mt-10">
        <v-col cols="12" class="pa-0 d-flex align-end justify-center">
          <div class="text-subtitle-2">
            <template v-for="(info, index) in infoLinks" :key="index">
              <span v-if="index !== 0" class="ml-2 mr-2">|</span
              ><router-link
                :to="info.url"
                class="text-decoration-none text-white"
                >{{ info.label }}</router-link
              >
            </template>
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0 mt-4">
        <v-col cols="12" class="pa-0 d-flex align-end justify-center">
          <div class="text-subtitle-2">
            © 2024 Spellbound. All rights reserved.
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0 mt-4">
        <v-col
          cols="12"
          class="pa-0 d-flex align-end justify-center text-center pt-2 pb-6 pb-md-2"
        >
          <div class="text-subtitle-2 text-gray">
            Site Crafted and Managed by SS Communications<br />For support or
            inquiries, contact us at hellosscommunications@gmail.com |
            +91-7303262306
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { ref } from "vue";
import { links } from "@/config";
import { useDisplay } from "vuetify";

export default {
  setup() {
    const socials = [
      {
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/company/spellbound-homes",
      },
      {
        icon: "mdi-instagram",
        url: "https://www.instagram.com/spellbound_india",
      },
    ];
    const infoLinks = [
      {
        label: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        label: "Cookie Policy",
        url: "/cookie-policy",
      },
      {
        label: "Terms of Use",
        url: "/terms-of-use",
      },
    ];
    const { mdAndUp } = useDisplay();

    // State and validation for desktop form
    const emailDesktop = ref("");
    const emailDesktopError = ref("");

    const validateEmailDesktop = () => {
      emailDesktopError.value =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          emailDesktop.value
        )
          ? ""
          : "Please provide a valid e-mail.";
    };

    const submitDesktopForm = async () => {
      validateEmailDesktop();
      if (!emailDesktopError.value) {
        const form = new FormData();
        form.append("entry.1669803056", emailDesktop.value.value);

        try {
          await fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSe7Aj6EuAJ2r5fNoI7jTlE1J6BAC2dQMTlEVu6bnyx2rMYR3w/formResponse",
            {
              method: "POST",
              mode: "no-cors",
              body: form,
            }
          );

          // Provide feedback to the user
          alert("Form submitted successfully!");

          // Optionally reset the form data
          emailDesktop.value = "";
        } catch (error) {
          alert("An error occurred while submitting the form.");
        }
      }
    };

    // State and validation for mobile form
    const emailMobile = ref("");
    const emailMobileError = ref("");

    const validateEmailMobile = () => {
      emailMobileError.value =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          emailMobile.value
        )
          ? ""
          : "Please provide a valid e-mail.";
    };

    const submitMobileForm = async () => {
      validateEmailMobile();
      if (!emailMobileError.value) {
        const form = new FormData();
        form.append("entry.1669803056", emailMobile.value);

        try {
          await fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSe7Aj6EuAJ2r5fNoI7jTlE1J6BAC2dQMTlEVu6bnyx2rMYR3w/formResponse",
            {
              method: "POST",
              mode: "no-cors",
              body: form,
            }
          );

          // Provide feedback to the user
          alert("Form submitted successfully!");

          // Optionally reset the form data
          emailMobile.value = "";
        } catch (error) {
          alert("An error occurred while submitting the form.");
        }
      }
    };

    return {
      links,
      socials,
      mdAndUp,
      infoLinks,
      emailDesktop,
      emailDesktopError,
      validateEmailDesktop,
      submitDesktopForm,
      emailMobile,
      emailMobileError,
      validateEmailMobile,
      submitMobileForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-exp-list-item {
  font-size: 12px;
  padding-left: 22px;
  padding-inline: 0 !important;
}
:deep(.v-expansion-panel) {
  margin-top: 0 !important;
  min-height: auto !important;
}
:deep(.v-expansion-panel) .v-expansion-panel-title {
  min-height: auto !important;
}
:deep(.v-expansion-panels) .v-expansion-panel--active:not(:first-child)::after,
.v-expansion-panel--active + .v-expansion-panel::after {
  opacity: 1 !important;
}
.custom-exp-panels {
  :deep(.v-expansion-panel-title--active) {
    background-color: #1d1d1d !important;
    color: #fafafa !important;
  }
  :deep(.v-expansion-panel-text__wrapper) {
    padding-left: 0;
    padding-right: 0;
  }
}
.required-asterisk {
  color: rgb(255, 0, 0);
  font-weight: bold;
}
</style>
