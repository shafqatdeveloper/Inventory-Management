/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Pic: "url('https://cdn.pixabay.com/photo/2023/05/14/19/42/sky-7993656_1280.jpg')",
        Image:
          "url('https://cdn.pixabay.com/photo/2015/05/15/01/48/computer-767776_1280.jpg')",
      },
    },
  },
  plugins: [],
};
