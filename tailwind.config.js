/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          purple: "#c4b5fd",
          purpledeep: "#8b5cf6",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #c4b5fd 0%, #22d3ee 100%)",
        "gradient-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.22), transparent)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(196, 181, 253, 0.15)",
        "glow-cyan": "0 0 30px rgba(34, 211, 238, 0.2)",
      },
    },
  },
  plugins: [],
};
