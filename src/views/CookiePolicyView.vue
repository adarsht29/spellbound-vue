<template>
  <div class="cookie-preference">
    <v-container class="pt-6 pb-8 pt-md-10 pb-md-16 pl-8 pr-8">
      <v-row>
        <v-col cols="12">
          <div class="text-h4 text-md-h3">Cookie Policy</div>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="12" md="6">
          <div class="text-subtitle-1 text-md-h6">
            <p>
              Spellbound Atelier Pvt. Ltd., located at 1st Floor, No. 14/2, 40th
              Cross, 8th Main 5th Block Jayanagar, Bangalore-560041 (Business
              registration number: 29ABHCS9663A1Z0), uses cookies to gather and
              process information about visitors and their usage of our
              services.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <template v-for="(section, index) in sections" :key="index">
          <v-col cols="12" md="4">
            <div class="text-subtitle-1 text-md-h6 font-weight-bold">
              {{ section.title }}
            </div>
          </v-col>
          <v-col cols="12" md="7" offset-md="1">
            <div
              v-if="section.subtitle"
              class="text-subtitle-1 text-md-h6"
              v-html="section.subtitle"
            ></div>
            <ul
              v-if="section.body.length > 0"
              class="text-subtitle-1 text-md-h6 mt-3 ml-8 ml-md-9"
            >
              <li
                v-for="(section1, index1) in section.body"
                :key="index1"
                v-html="section1"
              ></li>
            </ul>
            <div
              v-if="section.subtitle1"
              class="text-subtitle-1 text-md-h6 mt-6"
              v-html="section.subtitle1"
            ></div>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CookiePolicyView",
  setup() {
    const sections = ref([
      {
        title: "What is a Cookie?",
        subtitle:
          "A cookie is a compact data file that is transferred to your device (e.g. your phone or your computer) for the purpose of keeping records. For example, with the help of a cookie, the website can recognize your browser, while another one could store your preferences and other information.<br /><br />The two categories of cookies used on the website are “persistent cookies” and “session cookies”. Session cookies will usually expire once you close your browser, while persistent cookies will remain intact on your device after you close your browser and can be put to use again the next time you access the website. The cookies placed by the website will expire at the latest 2 years post your last visit to the website if you do not delete them before such time.<br /><br />The website utilises an array of cookies and associated technologies for tracking regarding a number of purposes, including the following:",
        body: [
          "To enable, facilitate and streamline the working of the website across multiple web pages, devices, and browser sessions.",
          "To ease your access to and use of the website and add a sense of seamlessness.",
          "To monitor and analyse the performance, operation, and effectiveness of the website, so that we can enhance and optimise it.",
        ],
        subtitle1: "",
      },
      {
        title: "How We Use Cookies",
        subtitle:
          'This website uses cookies and associated technologies to retrieve and process information regarding the user\'s use of the website.<br /><br />We may also allow our partners to put cookies in place on your device. Our partners’ cookies aim at obtaining information to help them provide services to us. Cookies placed by our partners include the following: "Google Analytics" uses cookies to understand how you use our website.',
        body: [],
        subtitle1: "",
      },
      {
        title: "How you can control cookies",
        subtitle:
          "Your browser may permit you to set how it regulates cookies, like declining all cookies or giving you the option to decide whether to accept each cookie. Please note that some parts of the website may not work in accordance with the intent or may not work at all without putting cookies to use. For further assistance on how to delete or disable cookies, please look into clause 5.",
        body: [],
        subtitle1: "",
      },
      {
        title: "How you can disable cookies",
        subtitle:
          "If you want to go forward and disable the use of cookies by the website and/or other websites or if you wish to delete cookies that are already placed, we suggest that you follow the given guidelines depending on your browser. ",
        body: [
          "Chrome: Guidance for <a href='https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform=Desktop'>Google Chrome</a>",
          "Safari: <a href='https://support.apple.com/en-us/HT201265'>Guidance for Safari</a> (iPhone and iPad)",
          "Safari: <a href='https://support.apple.com/en-gb/guide/safari/sfri11471/mac'>Guidance for Safari</a> (mac)",
        ],
        subtitle1:
          'If your browser is not mentioned above or if a link does not help you in accordance with what you need, we suggest you visit the Help section of your browser’s toolbar or look for "cookies" in connection with the name of your web browser on the internet. If you have any queries regarding our use of cookies, please reach out to us at contact@spellbound.homes',
      },
    ]);
    return {
      sections,
    };
  },
};
</script>

<style lang="scss" scoped></style>
