/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          sky: '#7EAED9',      // Lighter sky blue
          sand: '#F5F1E8',     // Very light sand/off-white
          stone: '#BEB7A4',    // Light neutral stone
          clay: '#CB8E66',     // Warm terracotta/clay
          earth: '#986B48',    // Rich earth tone
          accent: '#E8747C',   // Desert flower pink
          sage: '#A8B88C',     // Muted sage green
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}