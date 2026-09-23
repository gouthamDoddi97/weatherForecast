/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  safelist: [
    'md:flex-col',
    'md:items-start',
    'md:justify-start',
    'md:space-y-2',
    'md:space-x-0',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
