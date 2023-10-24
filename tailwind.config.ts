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
          'custom-text': '#11120D'
      },
      backgroundColor: {
        'custom-skyblue': '#5C687F',
        'custom-whitepurple': '#D6CDDB',
        'custom-darkpurple': '#343144',
        'custom-whiteish': '#F1F2ED',
        'custom-blue': '#060d17',
        'custom-purple': '#413b5f;',
        'custom-second-purple': '#696286;',
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
export default config
