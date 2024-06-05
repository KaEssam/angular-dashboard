/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        body: "#F3F4F8",
        body2: "#FBFAFF",
        text: "#8C97A8",
        text2: "#232360",
        text3: "#1EA7FF",
        text4: "#5453F6",
        primary: "#FF3366",
        secondary: "#5051F9",
        secondary2: "#EDECFE",
        placeholder: "#F3F7FA",
      },
      width: {
        sidebar: "870px",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  plugins: [],
};
