/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'header': '#212336',
            'main': '#23263a',
            'accent': '#FF4A57'
        }
    },
  },
  plugins: [],
}

