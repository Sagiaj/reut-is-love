<template>
  <v-container grid-list-lg>
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <v-lazy
          v-model="activeComponents[i].value"
          :options="{
            threshold: 0.5
          }"
          min-height="200"
          :transition="transitions[i % 4]"
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>

          <v-card class="mx-auto" max-width="336" color="primary">
            <v-card-title>Card title</v-card-title>

            <v-card-text>
              THIS IS A TEST TEXT
            </v-card-text>
          </v-card>
        </v-lazy>
      </v-timeline-item>
    </v-timeline>
    <v-speed-dial v-model="fab" fab="false" bottom right direction="left" fixed>
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
          @click.native="generateRandomImg"
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <div v-else>
            זיכרון הפתעה!
          </div>
        </v-btn>
      </template>
      <v-lazy v-model="surpriseImageIsActive">
        <v-responsive>
          <v-img height="200" width="200" :src="randomSurpriseImg">
            hi
          </v-img>
        </v-responsive>
      </v-lazy>
    </v-speed-dial>
  </v-container>
</template>

<script>
export default {
  name: "TimelineView",
  methods: {
    async generateRandomImg() {
      const result = await fetch({
        url: "https://source.unsplash.com/1600x900/?beach"
      });
      const read = result.body.getReader();
      const content = await read.read();
      this.randomSurpriseImg = content.value.toString();
      console.log("res", content.value.toString());
      return result;
    }
  },
  computed: {},
  beforeMount() {
    for (const year of this.years) {
      this.activeComponents.push({ year, value: false });
    }
  },
  data() {
    return {
      fab: false,
      randomSurpriseImg: "",
      surpriseImageIsActive: false,
      activeComponents: [],
      transitions: [
        "slide-y-transition",
        "slide-x-transition",
        "slide-y-reverse-transition",
        "slide-x-reverse-transition"
      ],
      years: [
        {
          color: "cyan",
          year: "1960"
        },
        {
          color: "green",
          year: "1970"
        },
        {
          color: "pink",
          year: "1980"
        },
        {
          color: "amber",
          year: "1990"
        },
        {
          color: "orange",
          year: "2000"
        },
        {
          color: "pink",
          year: "1980"
        },
        {
          color: "amber",
          year: "1990"
        },
        {
          color: "orange",
          year: "2000"
        },
        {
          color: "pink",
          year: "1980"
        },
        {
          color: "amber",
          year: "1990"
        },
        {
          color: "orange",
          year: "2000"
        },
        {
          color: "pink",
          year: "1980"
        },
        {
          color: "amber",
          year: "1990"
        },
        {
          color: "orange",
          year: "2000"
        },
        {
          color: "pink",
          year: "1980"
        },
        {
          color: "amber",
          year: "1990"
        },
        {
          color: "orange",
          year: "2000"
        },
        {
          color: "pink",
          year: "1980"
        },
        {
          color: "amber",
          year: "1990"
        },
        {
          color: "orange",
          year: "2000"
        }
      ]
    };
  }
};
</script>

<style scoped>
[class*="transition"] {
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
}
</style>
