/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ghana flag palette, carried over from the original site
        ghanafc: {
          primary: '#b91c1c',   // red
          secondary: '#166534', // green
          accent: '#eab308',    // gold
          dark: '#1f2937',
          light: '#f3f4f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
