import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import i18n from './i18.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n} key={"lang_provider"}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
