import { aliases, mdi } from "vuetify/iconsets/mdi";

export const vuetifyConfig = {
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    // Update defaults for components here
    // VAppBar: {
    //   style: `border-bottom: 1px solid red;`,
    // },
  },
  theme: {
    defaultTheme: "light",
    // Customize theme colors here
    themes: {
      light: {
        colors: {
          // primary: "red",
          // secondary: "blue",
          // background: "light-gray",
        },
      },
    },
  },
};
