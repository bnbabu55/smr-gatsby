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
        themeOrange: {
          100: "#ffa800",
          200: "#fc9902",
          400: "#b95e02",
          700: "#7c3f02",
        },
        themeBlue: {
          100: "#049aff",
          200: "#0476ac",
          600: "#00497a",
        },
        themeGray: {
          50: "#cfcfcf",
          200: "#2f2f2f",
          300: "#2a2a2a",
          400: "#202020",
          500: "#171717",
        },
        facebookBlue: "#4267B2",
        linkedInBlue: "#0072b1",
        themeDarkBrown: "#2b0404",
      },
      boxShadow: {
        themeShadow: "0 0px 20px rgba(0, 0, 0, 0.72)",
      },
      ringColor: ["hover", "active", "focus"],
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#b95e02",
              "&:hover": {
                color: "#7c3f02",
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
