<template>
  <div class="contact">
    <v-container fluid class="pl-0 pr-0 pt-0">
      <v-parallax
        src="https://lh3.googleusercontent.com/d/1l3aHsUmz-iT7x27p8y-VTAlWLF7wiFtw=w1000"
        height="500"
      >
      </v-parallax>
      <v-container fluid class="overlay-container">
        <v-row align="center" justify="center">
          <v-col cols="12" md="9">
            <v-container fluid>
              <v-row>
                <v-col cols="7" class="pr-0">
                  <v-card class="pa-6 rounded-0 h-100 elevation-0">
                    <div class="text-h5 mb-4 text-primary-green">
                      Contact Us
                    </div>
                    <div class="text-subtitle mb-6">
                      Let’s bring your story to life.
                    </div>
                    <div class="form">
                      <form @submit.prevent="submit">
                        <v-row class="mt-0 mb-0">
                          <v-col cols="12" md="6" class="pt-0 pb-0">
                            <v-text-field
                              v-model="firstName.value.value"
                              :counter="10"
                              :error-messages="firstName.errorMessage.value"
                              label="First Name"
                              variant="underlined"
                              density="compact"
                              class="custom-input"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" class="pt-0 pb-0">
                            <v-text-field
                              v-model="lastName.value.value"
                              :counter="10"
                              :error-messages="lastName.errorMessage.value"
                              label="Last Name"
                              variant="underlined"
                              density="compact"
                              class="custom-input"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row class="mt-0 mb-0">
                          <v-col cols="12" md="6" class="pt-0 pb-0">
                            <v-text-field
                              v-model="email.value.value"
                              :error-messages="email.errorMessage.value"
                              label="E-mail ID"
                              variant="underlined"
                              density="compact"
                              class="custom-input"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" class="pt-0 pb-0">
                            <v-text-field
                              v-model="company.value.value"
                              :error-messages="company.errorMessage.value"
                              label="Company Name"
                              variant="underlined"
                              density="compact"
                              class="custom-input"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row class="mt-0 mb-0">
                          <v-col cols="12" md="6" class="pt-0 pb-0">
                            <v-text-field
                              v-model="designation.value.value"
                              :error-messages="designation.errorMessage.value"
                              label="Designation"
                              variant="underlined"
                              density="compact"
                              class="custom-input"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" class="pt-0 pb-0">
                            <v-text-field
                              v-model="phone.value.value"
                              :counter="7"
                              :error-messages="phone.errorMessage.value"
                              label="Phone No"
                              variant="underlined"
                              density="compact"
                              class="custom-input"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-text-field
                          v-model="message.value.value"
                          :counter="10"
                          :error-messages="message.errorMessage.value"
                          label="Type your message here"
                          variant="underlined"
                          density="compact"
                          class="custom-input"
                        ></v-text-field>

                        <v-select
                          v-model="purpose.value.value"
                          :error-messages="purpose.errorMessage.value"
                          :items="items"
                          label="Select"
                          variant="underlined"
                          density="compact"
                          class="custom-input"
                        ></v-select>

                        <div class="pt-3 pb-3">
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
                          <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                              <v-btn
                                class="elevation-1"
                                @click="handleReset"
                                v-bind="props"
                                :color="isHovering ? '#003D33' : ''"
                              >
                                clear
                              </v-btn>
                            </template>
                          </v-hover>
                        </div>
                      </form>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="5" class="pl-0">
                  <v-card
                    class="pa-6 rounded-0 h-100 text-body-2 text-white elevation-0"
                    color="#1d1d1d"
                  >
                    <div class="text-h5 mb-6">Address</div>
                    <p>
                      Spellbound Atelier Pvt. Ltd. 1st Floor, No. 14/2, 40th
                      Cross, 8th Main 5th Block Jayanagar, Bangalore-560041
                    </p>
                    <p>Karnataka 560025</p>
                    <v-divider class="mt-6 mb-6"></v-divider>
                    <v-row>
                      <v-col cols="12">
                        <p>
                          <a
                            href="tel:+91-11-4057-0808"
                            class="text-decoration-none text-white"
                            >Phone: +91 9844033222</a
                          >
                        </p>
                        <p>
                          <a
                            href="tel:+91-11-4052-7979"
                            class="text-decoration-none text-white"
                            >Phone: +91 9844033222</a
                          >
                        </p>
                      </v-col>
                      <v-col cols="12">
                        <p>
                          <a
                            href="mailto:business@spellbound.in"
                            class="text-decoration-none text-white"
                            >For general enquiries: contact@spellbound.homes
                          </a>
                        </p>
                        <p>
                          <a
                            href="mailto:media@spellbound.in"
                            class="text-decoration-none text-white"
                            >For media and other enquiries:
                            info@spellbound.homes</a
                          >
                        </p>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9784841113146!2d77.60633057431886!3d12.97322791484408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae175c7f4aeb63%3A0x51c9981a194ab271!2sSpellbound!5e0!3m2!1sen!2sin!4v1721598665099!5m2!1sen!2sin"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
export default {
  name: "ContactView",
  setup() {
    // Define validation functions
    const validateFirstName = (value) =>
      value?.length >= 2
        ? true
        : "First name needs to be at least 2 characters.";
    const validateLastName = (value) =>
      value?.length >= 2
        ? true
        : "Last name needs to be at least 2 characters.";
    const validateCompanyName = (value) =>
      value?.length >= 2
        ? true
        : "Company name needs to be at least 2 characters.";
    const validateDesignation = (value) =>
      value?.length >= 2
        ? true
        : "Designation needs to be at least 2 characters.";
    const validateMessage = (value) =>
      value?.length >= 2 ? true : "Message needs to be at least 2 characters.";
    const validatePhone = (value) =>
      value?.length > 9 && /^[0-9-]+$/.test(value)
        ? true
        : "Phone number needs to be at least 9 digits.";
    const validateEmail = (value) =>
      /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)
        ? true
        : "Must be a valid e-mail.";
    const validatePurpose = (value) => (value ? true : "Select an item.");

    // Initialize the form with validation functions
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        firstName: validateFirstName,
        lastName: validateLastName,
        phone: validatePhone,
        email: validateEmail,
        purpose: validatePurpose,
        company: validateCompanyName,
        designation: validateDesignation,
        message: validateMessage,
      },
    });

    // Use VeeValidate's `useField` to create field states
    const firstName = useField("firstName");
    const lastName = useField("lastName");
    const phone = useField("phone");
    const email = useField("email");
    const purpose = useField("purpose");
    const company = useField("company");
    const designation = useField("designation");
    const message = useField("message");

    // Sample items for the select dropdown
    const items = ref(["Business", "Media"]);

    // Define the submit function
    const submit = handleSubmit(async () => {
      // Create a FormData object and append form data
      const form = new FormData();
      form.append("entry.1426437528", firstName.value.value);
      form.append("entry.429583390", lastName.value.value);
      form.append("entry.1468827897", email.value.value);
      form.append("entry.1398678113", company.value.value);
      form.append("entry.715305321", designation.value.value);
      form.append("entry.2078673614", phone.value.value);
      form.append("entry.357352729", message.value.value);
      form.append("entry.1471353204", purpose.value.value);

      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSfyUnIrJD26vgZXnFfF_ZKdm4giPtXg3BosO80FAsMwTlWfmg/formResponse",
          {
            method: "POST",
            mode: "no-cors",
            body: form,
          }
        );

        // Provide feedback to the user
        alert("Form submitted successfully!");

        // Optionally reset the form data
        firstName.value.value = "";
        lastName.value.value = "";
        email.value.value = "";
        company.value.value = "";
        designation.value.value = "";
        phone.value.value = "";
        message.value.value = "";
        purpose.value.value = "";
      } catch (error) {
        alert("An error occurred while submitting the form.");
      }
    });

    // Return the properties and methods to the template
    return {
      firstName,
      lastName,
      phone,
      email,
      purpose,
      company,
      designation,
      message,
      items,
      submit,
      handleReset,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-parallax {
  position: relative;
  overflow: hidden; /* Ensure content does not overflow outside the parallax container */
}
.custom-input {
  font-size: 14px !important;
  :deep(.v-field):not(.v-field--active) {
    label {
      font-size: 14px !important;
    }
    input {
      font-size: 14px !important;
    }
  }
  :deep(.v-field.v-field--active) {
    label {
      font-size: 8px !important;
      transform: translateY(-10px) !important;
    }
  }
  :deep(.v-messages__message) {
    font-size: 8px !important;
  }
  :deep(.v-input__details) {
    padding-top: 2px !important;
    align-items: flex-start !important;
  }
}
.overlay-container {
  margin-top: -18%;
}
.text-subtitle {
  font-size: 18px;
}
</style>
