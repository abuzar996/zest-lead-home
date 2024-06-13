/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      xxs: "120px",
      xs: "320px",
      xmms: "330px",
      xmrs: "374px",
      xms: "410px",
      smx: "500px",
      sm: "  640px",
      smm: "700px",
      md: "768px",
      mdx: "850px",
      mddx: "870px",
      lg: "1124px",
    },
    extend: {
      keyframes: {
        starter: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "starting-point": "starter 2s linear 1",
      },
    },
  },
  plugins: [],
};
