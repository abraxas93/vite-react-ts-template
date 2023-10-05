import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'

const appContainer = document.getElementById('root');

if (!appContainer) {
  throw new Error('Container not found. App cannot be mounted');
}

ReactDOM.createRoot(appContainer).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
