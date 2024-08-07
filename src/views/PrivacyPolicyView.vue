<template>
  <div class="privacy-policy">
    <v-container class="pt-6 pb-8 pt-md-10 pb-md-16 pl-8 pr-8">
      <v-row>
        <v-col cols="12">
          <div class="text-h4 text-md-h3">Privacy Policy</div>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="12" md="6">
          <div class="text-subtitle-1 text-md-h6">
            <p>
              <b>Your privacy is paramount to Spellbound</b>, and we are
              committed to safeguarding your personal information. This privacy
              notice informs you of our practices when processing your personal
              data during your interactions with our website, such as visiting,
              subscribing to our newsletter, or inquiring about our services.
            </p>
            <p>
              Spellbound enforces stringent technical and organizational
              security measures to protect your personal data against
              unauthorized access, accidental loss, damage, destruction, theft,
              or disclosure.
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
            <template v-if="section.body.length > 0">
              <template
                v-for="(section1, index1) in section.body"
                :key="index1"
              >
                <div
                  class="text-subtitle-1 text-md-h6 font-weight-bold"
                  :class="index1 !== 0 ? 'mt-6' : ''"
                >
                  {{ section1.title }}
                </div>
                <ul class="text-subtitle-1 text-md-h6 mt-3 ml-8 ml-md-9">
                  <li v-for="(section2, index2) in section1.body" :key="index2">
                    <span class="font-weight-bold">{{ section2.title }}</span>
                    <span v-if="section2.title">:</span>
                    <span v-html="section2.body"></span>
                  </li>
                </ul>
              </template>
            </template>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PrivacyPolicyView",
  setup() {
    const sections = ref([
      {
        title: "1. What personal data do we collect and why?",
        subtitle: "",
        body: [
          {
            title: "1. Visiting Spellbound's Website",
            body: [
              {
                title: "URL",
                body: "<a href='/'>https://www.spellbound.homes</a>",
              },
              {
                title: "",
                body: "We collect data such as your general location, page visit durations, device type, and any referring links. Your IP address is also collected, albeit in obfuscated form.",
              },
              {
                title: "Purpose",
                body: "To ensure optimal functionality of our website.",
              },
              {
                title: "Legal Basis",
                body: "Section 6(1) of the Data Protection Act and Article 6(1)(f) of the GDPR, serving our legitimate interest to monitor site traffic.",
              },
            ],
          },
          {
            title: "2. Newsletter Subscription",
            body: [
              {
                title: "",
                body: "Upon your consent, we process your contact details (name and email) to send newsletters.",
              },
              {
                title: "Legal Basis",
                body: "Section 6(1) of the Data Protection Act and Article 6(1)(a) of the GDPR. You may withdraw consent by contacting us as detailed in section 6.",
              },
            ],
          },
          {
            title: "3. Cookies",
            body: [
              {
                title: "",
                body: 'We employ "Google Analytics" cookies to track website usage.',
              },
              {
                title: "",
                body: "Review our cookie policy for details and visit Google's privacy practices for more on their data handling.",
              },
            ],
          },
          {
            title: "4. Interactions with Suppliers, Vendors, and Customers",
            body: [
              {
                title: "",
                body: "We collect necessary personal information such as name, organization, role, contact number, and email.",
              },
              {
                title: "Purpose",
                body: "To fulfill our contractual obligations.",
              },
            ],
          },
          {
            title: "5. Do Not Track (DNT)",
            body: [
              {
                title: "",
                body: "We honor Do Not Track signals set in your browser, allowing you to opt out of tracking by websites.",
              },
            ],
          },
        ],
      },
      {
        title: "2. Data Recipients",
        subtitle:
          "Our external hosts and processors like Netlify and Wix handle personal data under strict data protection agreements to prevent unauthorized sharing.",
        body: [],
      },
      {
        title: "3. Data Retention and Deletion",
        subtitle:
          "Personal data is retained only as long as necessary and typically deleted within 24 months of collection unless required longer by law.",
        body: [],
      },
      {
        title: "4. Your Rights",
        subtitle:
          "Data protection law provides you with an array of rights regarding our processing of your personal data. In this context, you are entitled to the right to request access to the personal data concerning you that we process. Moreover, you may request that we alter or delete the personal data or restrict the processing of your personal data if you think it is inaccurate. Furthermore, you have the right to raise an objection against the processing based on our legitimate interests on a legal basis. We are required to assess and take action accordingly on your request.",
        body: [],
      },
      {
        title: "5. Contact Information",
        subtitle:
          "Any inquiries about our privacy practices should be directed to contact@spellbound.homes or our office at Spellbound Atelier Pvt. Ltd. 1st Floor, No. 14/2, 40th Cross, 8th Main 5th Block Jayanagar, Bangalore-560041",
        body: [],
      },
      {
        title: "6. Additional Notes",
        subtitle:
          "To maintain clarity, please note that this privacy notice does not apply to the processing of personal data regarding candidates, employees, or consultants.<br /><br />This privacy notice supplements, but does not replace, other policies/notices and terms that apply to any specific service made available by Spellbound Atelier Pvt. Ltd<br /><br />The privacy notice may be updated over a period of time, and we suggest that you check this page regularly to stay updated on any alterations made by us.<br /><br />This privacy notice is effective as of 06.08.2024",
        body: [],
      },
    ]);
    return {
      sections,
    };
  },
};
</script>

<style lang="scss" scoped></style>
