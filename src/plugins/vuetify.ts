import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#013243",
    accent: "#FE906D",
    secondary: "#8098A1",
    background: "#F2F6F7",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark,
    },
  },
  defaults: {
    VBtn: {
      color: "primary",
    },
  },
});
