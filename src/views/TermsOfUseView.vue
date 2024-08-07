<template>
  <div class="privacy-policy">
    <v-container class="pt-6 pb-8 pt-md-10 pb-md-16 pl-8 pr-8">
      <v-row>
        <v-col cols="12">
          <div class="text-h4 text-md-h3">Terms of Use</div>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="12" md="6">
          <div class="text-subtitle-1 text-md-h6">
            <p>
              By accessing this website, you consent to abide by these terms.
              Please review them thoroughly.
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
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TermsOfUseView",
  setup() {
    const sections = ref([
      {
        title: "General Information",
        subtitle:
          "This site provides information for general purposes only. Despite our efforts for accuracy, discrepancies may occur for which Spellbound apologizes.",
      },
      {
        title: "Intellectual Property",
        subtitle:
          "The content on this site is copyright protected. You may print copies for personal use but may not frame or link beyond the home page without explicit permission.",
      },
      {
        title: "Liability",
        subtitle:
          "Spellbound provides this website 'as is' and is not liable for inaccuracies. We are not responsible for any indirect or consequential damages arising from your use of this site",
      },
      {
        title: "Site Usage",
        subtitle:
          "We reserve the right to modify or discontinue any aspect of this site without notice and may deny access to any user in breach of these terms.",
      },
      {
        title: "Indemnification",
        subtitle:
          "You agree to indemnify Spellbound against any claims arising from your misuse of this site.",
      },
      {
        title: "Updates to Terms",
        subtitle:
          "We may revise these terms occasionally, and recommend revisiting this page to stay informed of any changes.",
      },
      {
        title: "Jurisdiction",
        subtitle:
          "These terms are governed by the laws of India, with Bengaluru courts having exclusive jurisdiction over disputes.",
      },
      {
        title: "Severability",
        subtitle:
          "In case any clause or any segment of the terms mentioned in these terms & conditions shall be recognised as invalid, unlawful, or unenforceable by any competent authority to any extent, such term shall to that extent be severed from the remaining terms which shall continue to be valid and enforceable to the complete extent permitted by law.",
      },
    ]);
    return {
      sections,
    };
  },
};
</script>

<style lang="scss" scoped></style>
