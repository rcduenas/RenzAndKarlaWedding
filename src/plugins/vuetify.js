import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const customTheme = {
  dark: false,
  colors: {
    background: '#FAF9F7',
    surface: '#FFFFFF',
    primary: '#A8C3A1', // sage green
    secondary: '#F7CAC9', // blush pink
    accent: '#C7D3BF',
    info: '#90A955',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: { customTheme },
  },
})
