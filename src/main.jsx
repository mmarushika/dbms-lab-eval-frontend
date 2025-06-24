import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import './index.css'
import App from './App.jsx'

import { QuestionProvider } from './context/QuestionContext.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </BrowserRouter>,
)
