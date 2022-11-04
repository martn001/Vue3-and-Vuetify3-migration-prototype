import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#013243",
        accent: "#FE906D",
        secondary: "#8098A1",
        background: "#F2F6F7",
      },
    },
  },
});
