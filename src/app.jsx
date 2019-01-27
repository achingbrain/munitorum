import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Page from './pages/page'
import { hot } from 'react-hot-loader'
import configureStore from './store/configure-store'
import i18n from 'i18next'
import { withI18n, reactI18nextModule } from 'react-i18next'
import * as localisation from './localisation'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: localisation,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  })

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    useNextVariants: true
  }
})

const App = () => {
  return (
    <Provider store={configureStore()}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Route path='/' component={Page} />
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

export default hot(module)(withI18n()(App))
