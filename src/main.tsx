import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import '../src/assets/css/normalize.css'
import '../src/assets/css/custom.css'
import '../src/assets/css/skeleton.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
