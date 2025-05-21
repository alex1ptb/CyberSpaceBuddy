// tailwind.config.js
module.exports = {
  darkMode: "class", // or 'media'
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
    "./services/**/*.ts",
    "./constants.ts",
    // Add other paths that include Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        "primary-start": "#009865",
        "primary-end": "#003763",
        "secondary-start": "#7E8396",
        "secondary-end": "#434E60",
        // You can add more specific shades if needed from your PDF
        // e.g., 'brand-blue': '#003763', 'brand-green': '#009865',
      },
      fontFamily: {
        sans: [
          "Morris",
          "ui-sans-serif",
          "system-ui" /* ...other fallback fonts */,
        ],
        // If Morris is only for headings, you might define it separately:
        // heading: ['Morris', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'), // If you use the typography plugin
    // require('@tailwindcss/forms'),    // If you use the forms plugin
  ],
};
