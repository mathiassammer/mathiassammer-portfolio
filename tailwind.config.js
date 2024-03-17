/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            50: "#fef2f2",
            100: "#fee2e2",
            300: "#fca5a5",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b"
          },
          gray: {
            100: "#f3f4f6",
            700: "#495057",
            800: "#212529",
          },
        }
      },
      screens: {
        'smartphone': '575px',
        // => @media (min-width: 575px) { ... }
        'tablet': '955px',
        // => @media (min-width: 575px) { ... }
      }
    },
  },
  plugins: [],
}

