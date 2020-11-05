import React, { FC } from 'react'
import Router from './routes'
import { StylesProvider } from '@material-ui/core/styles'

const App: FC = () => (
  <StylesProvider injectFirst={true}>
    <Router />
  </StylesProvider>
)

export default App
