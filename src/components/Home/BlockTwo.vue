<template>
  <v-parallax class="custom-parallax">
    <v-container fluid class="pa-10 pt-12 pb-12">
      <v-row justify="center">
        <v-col cols="8" v-for="it in items" :key="it.id">
          <div class="my-text parallax-content text-left">
            <h1 class="font-weight-bold mb-4">
              {{ it.sLabel }}
              <span
                class="font-weight-bold text-capitalize text"
                :class="`text-${it.id}`"
                >{{ it.mLabel }}</span
              >
            </h1>
            <p
              v-for="sIt in it.subItems"
              :key="sIt.id"
              class="font-weight-regular mb-1 custom-p"
            >
              {{ sIt.label }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "BlockTwo",
  setup() {
    const items = ref([
      {
        id: 1,
        sLabel: "We believe in",
        mLabel: "INTERIOR",
        subItems: [
          {
            id: 11,
            label:
              "A conviction that the values of people and the values of design are one and the same.",
          },
          {
            id: 12,
            label: "A celebration of diversity and prosperity across cultures.",
          },
          {
            id: 13,
            label:
              "A shared sense of empathy that is inclusive of flexibility and built to adapt.",
          },
          {
            id: 14,
            label: "A responsibility to generate impact beyond design.",
          },
        ],
      },
      {
        id: 2,
        sLabel: "We are",
        mLabel: "SPELLBOUND HOMES",
        subItems: [
          { id: 21, label: "We span 17 studios across 6 regions." },
          { id: 22, label: "We do not adhere to a signature style." },
          { id: 23, label: "We are a multi-authorship practice." },
          {
            id: 24,
            label: "We specialize in Architecture, Interiors & Masterplanning.",
          },
        ],
      },
    ]);

    onMounted(() => {
      class TextScramble {
        constructor(el) {
          this.el = el;
          this.chars = "!<>-_\\/[]{}—=+*^?#________";
          this.update = this.update.bind(this);
        }
        setText(newText) {
          const oldText = this.el.innerText;
          const length = Math.max(oldText.length, newText.length);
          const promise = new Promise((resolve) => (this.resolve = resolve));
          this.queue = [];
          for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
          }
          cancelAnimationFrame(this.frameRequest);
          this.frame = 0;
          this.update();
          return promise;
        }
        update() {
          let output = "";
          let complete = 0;
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }
              output += `<span class="dud">${char}</span>`;
            } else {
              output += from;
            }
          }
          this.el.innerHTML = output;
          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        }
        randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
      }

      const phrases1 = [
        "INTERIOR",
        "BRANDING",
        "DESIGN",
        "STRATEGY",
        "EXPERIENCE",
      ];

      const el1 = document.querySelector(".text-1");
      const fx1 = new TextScramble(el1);

      let counter1 = 0;
      const next1 = () => {
        fx1.setText(phrases1[counter1]).then(() => {
          setTimeout(next1, 1500);
        });
        counter1 = (counter1 + 1) % phrases1.length;
      };

      next1();

      const phrases2 = [
        "SPELLBOUND HOMES",
        "EXPERIENCED",
        "BEST IN BUSINESS",
        "OLDEST",
      ];

      const el2 = document.querySelector(".text-2");
      const fx2 = new TextScramble(el2);

      let counter2 = 0;
      const next2 = () => {
        fx2.setText(phrases2[counter2]).then(() => {
          setTimeout(next2, 1500);
        });
        counter2 = (counter2 + 1) % phrases2.length;
      };

      next2();
    });

    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-text {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}
.custom-parallax {
  background-color: #000;
}
.parallax-content {
  color: white !important;
}
.custom-p {
  font-size: 18px;
}
</style>
