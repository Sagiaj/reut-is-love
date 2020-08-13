<template>
  <v-container grid-list-lg>
    <v-row justify="center" class="background">
      <v-col align="center">
        <v-parallax :src="parallaxSrc" style="max-width: 100%;">
          <v-row justify="end">
            <v-col align="end" align-self="end">
              <h1>The story of my Lush life</h1>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-timeline>
      <span v-for="(content, year) in years" :key="year">
        <!-- <v-divider height="200px" style="margin-bottom: 20px;" /> -->
        <v-timeline-item large>
          <template v-slot:opposite>
            <h1
              :class="`font-weight-bold ${content.color}--text`"
              v-text="year"
            ></h1>
          </template>
          <v-badge color="primary">
            <h3 slot="badge">{{ content.main }}</h3>
            <v-icon large color="primary"></v-icon>
          </v-badge>
        </v-timeline-item>
        <v-timeline-item
          v-for="(event, i) in content.events"
          :key="i"
          :color="year.color"
          small
        >
          <v-lazy
            v-model="years[year].events[i].active"
            :options="{
              threshold: 0.5
            }"
            min-height="200"
            :transition="transitions[i % 4]"
          >
            <span>
              <v-card
                class="mx-auto"
                max-width="400"
                color="primary"
                style="direction: rtl;"
              >
                <v-card-title>{{ event.title }}</v-card-title>
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="event.image.src"
                >
                </v-img>

                <v-card-subtitle class="pb-0">{{
                  event.subtitle || ""
                }}</v-card-subtitle>

                <!-- <v-card-text class="text--primary">
                  <div>{{ event.text }}</div>
                </v-card-text> -->
              </v-card>
              <v-row justify="center" v-if="event.text">
                <v-col align="center" cols="10" md="6">
                  <v-alert type="" :value="true" outlined>
                    {{ event.text }}
                  </v-alert>
                </v-col>
              </v-row>
            </span>
          </v-lazy>
        </v-timeline-item>
      </span>
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
import colors from "vuetify/es5/util/colors";
export default {
  name: "TimelineView",
  methods: {
    async generateRandomImg() {
      const ceil = Math.ceil(Math.random() * 10000);
      const imageIdx = ceil % this.images.length;
      this.randomSurpriseImg = this.images[imageIdx];
    }
  },
  computed: {},
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
      years: {
        2017: {
          main: "כאן הכל התחיל",
          color: colors.brown.lighten3,
          events: [
            {
              active: false,
              title: "מיתוג החתונה של הכלה היחידה בלאש :)",
              image: {
                src: "images/my-wedding-2017.jpg",
                height: "",
                width: ""
              },
              text: "Art déco לאש מזמינה אתכם למסיבה קלאסית של שנות ה20 😉"
            }
          ]
        },
        2018: {
          main: "לאש נולדה רשמית!",
          color: colors.brown.lighten3,
          events: [
            {
              active: false,
              title: "משפט כשאין מה להגיד",
              image: {
                src: "images/sentence-april-2018.jpg",
                height: "",
                width: ""
              },
              text: "#saturday ! less words, more fun 😎"
            },
            {
              active: false,
              title: "מיתוג אירוע של טל ואורן",
              image: {
                src: "images/wedding-may-2018.jpg",
                height: "",
                width: ""
              },
              text: ""
            },
            {
              active: false,
              title: "Branding makes concept",
              image: {
                src: "images/branding-makes-concept-april-2018.jpg",
                height: "",
                width: ""
              },
              text: "הכיף מתחיל במקום שיש בו מיתוג"
            },
            {
              active: false,
              title: "Urban",
              image: {
                src: "images/urban-july-2018.jpg",
                height: "",
                width: ""
              },
              text: ""
            },
            {
              active: false,
              title: "Ray Raymond",
              image: {
                src: "images/raymond-august-2018.jpg",
                height: "",
                width: ""
              },
              text: "Simple with a twist"
            },
            {
              active: false,
              title: "אנחנו באוויר!",
              image: {
                src: "images/site-almost-up-september-2018.jpg",
                height: "",
                width: ""
              },
              text:
                "כל מי שאוהב/ת מיתוג להרים את היד! ו... ללחוץ על הלינק בביו💃"
            }
          ]
        },
        2019: {
          main: "לאש מתפתחת ומתמקדת",
          color: colors.brown.lighten3,
          events: [
            {
              active: false,
              title: "מתן שקד - קולקציית פופאפ",
              image: {
                src: "images/matan-shaked-june-2019.jpg",
                height: "",
                width: ""
              },
              text: "קולקציית פופ אפ בהשראת @matanshaked"
            },
            {
              active: false,
              title: "הרצאה ראשונה!",
              image: {
                src: "images/giveaway-august-2019.jpg",
                height: "",
                width: ""
              },
              text:
                '"איך יוצרים פיד חלומי באינסטגרם?" הרצאה של שעה שתלמד אתכם את כל השלבים שצריך לעשות כדי לייצר פיד מושלם כמו של הגדולים.'
            },
            {
              active: false,
              title: "מאיה וכרמית",
              image: {
                src: "images/maya-carmit-august-2019.jpg",
                height: "",
                width: ""
              },
              text:
                "הלוגו מורכב מצורות שנמצאות באותיות הראשונות של השמות שלהן. צורות גרפיות תמיד יוצרות מבניות כלשהי וזה בדיוק מה שרצינו להראות בלוגו. 2 משולשים לאות M, ומשולש לאות A.🔺 יש עוד אלמנט בלוגו שיש לו משמעות- מזהים מהו? ."
            },
            {
              active: false,
              title: "Madmoiselle",
              image: {
                src: "images/madmoiselle-september-2019.jpg",
                height: "",
                width: ""
              },
              text:
                "עיצוב לוגו ומיתוג למדמואזל 👒 בוטיק של מותגים צרפתיים בלב תל אביב."
            },
            {
              active: false,
              title: "התחלנו לתת טיפים",
              image: {
                src: "images/branding-tip-october-2019.jpg",
                height: "",
                width: ""
              },
              text: `אל תפחדו. לפעמים הלב רוצה משהו והראש עוצר אותו. תחשבו טוב אם אתם נמנעים מלעשות צעד רק כי אתם מפחדים ואם זו הסיבה התעלמו ממנה ותקפצו למים. מדהים כמה מהר תשימו לב שתמיד ידעתם לשחות :)`
            },
            {
              active: false,
              title: "לאש מיישמת את הטיפ שנתתי לכם!",
              image: {
                src: "images/corrin-gideon-october-2019.jpg",
                height: "",
                width: ""
              },
              text: `עיצוב לוגו לקורין גדעון 💕 מה שמייחד את קורין זה השיער המתולתל הטבעי והחיוך המדבק! ידעתי ישר שזה מה שאני רוצה שיופיע בלוגו. מכיוון שכדאי להשאיר לוגו נקי ובלי יותר מידי פרטים, הפיתרון צריך להיות פשוט ובקווים מנימליסטיים 😏 אז מה דעתכם? דומה לה?`
            }
          ]
        },
        2020: {
          main: "שנת אסטרטגיה ויזואלית על מלא",
          color: colors.brown.lighten3,
          events: [
            {
              active: false,
              title: "יום הולדת, איך נקרא לזה - מיוחדת...",
              image: {
                src: "images/birthday-may-2020.jpg",
                height: "400px",
                width: "300px"
              },
              text:
                "תמיד חשבתי שזה מתבטא באהבה שמקיפה אותי, אבל לא זה לא. זה מתבטא באהבה שנמצאת לצידי ובאהבה שאני נותנת לעצמי. "
            },
            {
              active: false,
              title: "5 דברים שלמדתי בדרך הקשה",
              image: {
                src: "images/5-lessons-july-2020.jpg",
                height: "400px",
                width: "300px"
              },
              text:
                "אז אל תעשו את הטעות שלי, ותגיעו למצב שאתם צריכים ״שבועיים חופש״ כדי להתאפס על כל הזמן האבוד.." +
                "תודה מיוחדת ל @yuvalina.studio שנתנה לי פוש לתת בראש למשימות! אלופה!❤️"
            }
          ]
        }
      },
      parallaxSrc: "images/parallax-source.jpg"
    };
  }
};
</script>

<style>
[class*="transition"] {
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
}

.v-parallax .v-parallax__image-container img {
  bottom: -100% !important;
}
</style>
