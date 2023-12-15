import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        middle: 'var(--middle-color)',

        light_bg: 'rgb(255 255 255)',
        light_tag_skin: 'rgb(253 236 226)',
        light_tag_sky: 'rgb(241 242 244)',
        light_bg_skin: 'rgb(253 238 241)',
        light_bg_card: 'rgb(254 242 242)',
        light_bg_button: 'rgb(251 146 60)',
        light_notification_bg: 'rgb(31 41 55)',
        light_bg_gray: 'rgb(209 213 219)',
        light_bg_dark_gray: 'rgb(31 41 55)',

        dark_bg: 'rgb(0 0 0)',                    // Black background color
        dark_tag_skin: 'rgb(130 100 75)',         // Darker skin-toned color for tags
        dark_tag_sky: 'rgb(24 24 24)',             // Darker sky-blue color for tags (consider using purple instead)
        dark_bg_skin: 'rgb(35 33 32)',             // Darker skin-toned color for the background
        dark_bg_card: 'rgb(25 25 25)',             // Darker card-colored background
        dark_bg_button: 'rgb(85 44 176)',          // Purple button-colored background
        dark_notification_bg: 'rgb(11 14 18)',     // Darker background color for notifications
        dark_bg_gray: 'rgb(50 50 50)',             // Darker gray background
        dark_bg_dark_gray: 'rgb(11 14 18)'         // Darker dark gray background



      }, 
    },
  },
  plugins: [],
}
export default config
