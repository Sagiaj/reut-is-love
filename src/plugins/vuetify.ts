import Vue from "vue";
import Vuetify from "vuetify";
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md"
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.brown.lighten4,
        secondary: colors.pink.lighten5
      }
    }
  }  
});
