import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fff',
          dark: '#21282e',
        },
        secondary: {
          light: '#21282e',
          dark: '#00E0FF',
        },
        tertiary: {
          light: '#21282e',
          dark: '#C4C4C4',
        },
      },
    },
  },
  plugins: [],
}
export default config
