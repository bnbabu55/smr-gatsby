module.exports = {
  darkMode: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // mode: "jit",
  purge: {
    preserveHtmlElements: true,
    mode: "layers",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./content/**/*.{js,jsx,ts,tsx,html,md,mdx}",
    ],
    options: {
      // safelist: {
      //   greedy: [/swiper/],
      // },
      keyframes: true,
      // fontFace: true,
      variables: true,
      rejected: true,
    },
  },
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "Helvetica", "sans-serif"],
        MontserratSemiBold: ["MontserratSemiBold", "Helvetica", "sans-serif"],
        MontserratBold: ["MontserratBold", "Helvetica", "sans-serif"],
        LatoLight: ["LatoLight", "Helvetica", "sans-serif"],
        Lato: ["Lato", "Helvetica", "sans-serif"],
        LatoBold: ["LatoBold", "Helvetica", "sans-serif"],
        Raleway: ["Raleway", "Helvetica", "sans-serif"],
        RalewayBold: ["RalewayBold", "Helvetica", "sans-serif"],
        BebasNeue: ["BebasNeue", "Helvetica", "sans-serif"],
        NothingYouCouldDo: ["NothingYouCouldDo", "Monaco", "monospace"],
      },
      height: {
        "almost-screen": "calc(-16rem + 100vh)",
      },
      colors: {
        themeYellow: "#fdde03",
        themeOrange: {
          100: "#ffa800",
          200: "#fc9902",
          300: "#dd8107",
          700: "#7c3f02",
        },
        themeBlue: {
          100: "#00497a",
          200: "#0476ac",
          text: "#00497a",
        },
        themeGray: {
          50: "#cfcfcf",
          100: "#434343",
          200: "#2f2f2f",
          300: "#2a2a2a",
          400: "#202020",
          500: "#171717",
          600: "#0e0e0e",
        },
        themeSilver: "#C0C0C0",
        facebookBlue: "#4267B2",
        linkedInBlue: "#0072b1",
        themeDarkGray: "#222222",
        themeLightGray: "#aeaeae",
        themeLightGray1: "#f4f4f4",
        themeLightGray2: "#b5b5b5",
        themeSocialGray: "#939393",
        themeCopyGray: "#6e6e6e",
        themeDarkBrown: "#2b0404",
        themeBrown: "#a63f00",
      },
      boxShadow: {
        themeShadow: "0 0px 20px rgba(0, 0, 0, 0.72)",
      },
      ringColor: ["hover", "active", "focus"],
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#ffa800",
              "&:hover": {
                color: "#e69700",
              },
              textDecoration: "none !important",
            },
          },
        },
      },
      backgroundImage: theme => ({
        // "case-bg": "url('/images/case-bg.jpg')",
        // "news-bg": "url('/images/news-bg.jpg')",
      }),
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  variants: {
    extend: {
      // backgroundColor: ["active"],
      // textColor: ["active"],
    },
  },
  plugins: [
    require("tailwindcss"),
    require("precss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
