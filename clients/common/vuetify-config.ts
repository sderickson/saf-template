import { aliases, mdi } from "vuetify/iconsets/mdi";

export const vuetifyConfig = {
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          // primary: "#ef8080",
          // secondary: '#your-secondary-color',
          // accent: '#your-accent-color',
        },
      },
    },
  },
};
