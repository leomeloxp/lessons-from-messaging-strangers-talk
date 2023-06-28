/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Helvetica Neue', 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'Playfair Display', 'serif'],
      mono: ['Dank Mono', 'Operator Mono', 'Inconsolata', 'Courier', 'monospace'],
    },

    extend: {},
  },
  plugins: [],
  important: true,
};
