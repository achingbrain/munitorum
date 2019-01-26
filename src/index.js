import './index.css'
import React from 'react'
import { render } from 'react-dom'
import App from './app'

const root = document.getElementById('app')

if (process.env.NODE_ENV === 'production') {
  render(<App />, root)
} else {
  const RedBox = require('redbox-react').default

  try {
    render(<App />, root)
  } catch (e) {
    render(<RedBox error={e} />, root)
  }
}
