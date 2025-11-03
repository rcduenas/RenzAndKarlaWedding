import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const customTheme = {
  dark: false,
  colors: {
    background: '#FAF9F7',
    surface: '#FFFFFF',
    primary: '#B7C7AF', // sage green
    secondary: '#F7CAC9', // blush pink
    accent: '#C7D3BF',
    info: '#90A955',
  },
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // ✅ tell Vuetify to use MDI icons
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: { customTheme },
  },
})
