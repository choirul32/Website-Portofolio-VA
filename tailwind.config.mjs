/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      // Palette sampled directly from SMM Portofolio.pdf
      colors: {
        canvas: "#FAF8F6",
        ink: "#2F2F2F",
        body: "#353535",
        muted: "#4E525A",
        soft: "#8B8579",
        line: "#E2DDD6",
        olive: "#293A13",
        "olive-2": "#475529",
        "olive-3": "#5A6151",
        brown: "#421E12",
        "brown-2": "#65392B",
        "brown-3": "#68453A",
        cream: "#FAF8F6",
      },
      fontFamily: {
        display: ['"Anton"', "Haettenschweiler", "Impact", "sans-serif"],
        sans: ['"Poppins"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        script: ['"Mrs Saint Delafield"', "cursive"],
      },
      maxWidth: {
        page: "1240px",
        prose: "70ch",
      },
      borderRadius: {
        case: "26px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
