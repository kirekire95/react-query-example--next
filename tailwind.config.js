const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

const brandColor = colors.indigo

module.exports = {
  // Add support for dark mode, toggled via a class:
  // https://tailwindcss.com/docs/dark-mode
  darkMode: "class",
  // Inform Tailwind of where our classes will be defined:
  // https://tailwindcss.com/docs/optimizing-for-production
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mediaQueryOne: {
          max: "390px"
        }
      },
      container: theme => {
        return {
          center: true,
          padding: {
            DEFAULT: theme("spacing.6"),
            sm: theme("spacing.7"),
            lg: theme("spacing.8"),
            xl: theme("spacing.9")
          }
        }
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        md: ["18px", "26px"],
        mdlg: ["19px", "27px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        unset: "unset"
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba\(0, 0, 0, 0.05\)",
        "ecPrimary-1": "0 0 2px 2px rgba\(0, 0, 0, 0.05\)",
        "ecPrimary-2": "0 0 2px 2px rgba\(0, 0, 0, 0.10\)",
        "ecPrimary-3": "0 0 2px 2px rgba\(0, 0, 0, 0.15\)",
        "ecPrimary-4": "0 0 2px 2px rgba\(0, 0, 0, 0.20\)",
        "ecSecondary-1": "0 4px 6px -1px rgba\(0, 0, 0, 0.05\)",
        "ecSecondary-2": "0 4px 6px -1px rgba\(0, 0, 0, 0.10\)",
        "ecSecondary-3": "0 4px 6px -1px rgba\(0, 0, 0, 0.15\)",
        "ecSecondary-4": "0 4px 6px -1px rgba\(0, 0, 0, 0.20\)",
        inner: "inset 0 2px 4px 0 rgba\(0, 0, 0, 0.06\)",
        none: "none"
      },
      brightness: {
        10: 0.1,
        20: 0.2,
        30: 0.3,
        40: 0.4
      },
      height: {
        inherit: "inherit",
        footerHeight: "10vh",
        navbarHeight: "10vh",
        layoutHeight: "calc\(100vh - var\(--footer-height\) - var\(--navbar-height\)\)",
        unset: "unset"
      },
        minHeight: {
        layoutHeight: "calc\(100vh - var\(--footer-height\) - var\(--navbar-height\)\)",
        inherit: "inherit",
        unset: "unset"
      },
      maxHeight: {
        inherit: "inherit",
        layoutHeight: "calc\(100vh - var\(--footer-height\) - var\(--navbar-height\)\)",
        unset: "unset"
      },
      width: {
        inherit: "inherit",
        unset: "unset"
      },
      gridTemplateColumns: {
        twoColumns: "repeat\(2, 1fr\)",
        threeColumns: "repeat\(3, 1fr\)",
        sixColumns: "repeat\(6, 1fr\)",
        eightColumns: "repeat\(8, 1fr\)",
        autoFitLarge: "repeat\(auto-fit, minmax\(6rem, 6rem\)\)",
        specialTwoColumns: "1fr 0.1fr",
        specialThreeColumns: "0.5fr 1fr 0.5fr"
      },
      colors: {
        inherit: "inherit",
        primaryLight: colors.gray[50],
        primaryLight2: colors.gray[100],
        primaryLight3: colors.gray[200],
        primaryDark: "hsl\(212,22%,15%\)",
        primaryDark2: "hsl\(212,32%,12%\)",
        primaryDark3: "hsl\(212,32%,8%\)",
        primaryPlaceholder: colors.gray[500],
        // NOTE: We modify the gray color, as the default Tailwind gray color is heavily saturated
        // with blue, which makes it look strange in dark mode. This gray color is more balanced,
        // and works better for sites supporting dark mode.
        gray: colors.gray,
        // Add a new "brand" color to all Tailwind utilities, so that we can easily change it.
        brand: brandColor
      },
      // Modify the default ring color so that it matches the brand color:
      ringColor: {
        DEFAULT: brandColor["500"]
      }
    }
  },
  variants: {
    extend: {
      translate: ["active"]
    }
  },
  // Add some basic Tailwind plugins to add additional features:
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp")
  ]
}
