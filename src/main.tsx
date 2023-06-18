
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import i18n from './i18.ts';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n} key={"lang_provider"}>
          <App />
          <ToastContainer />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>,
 
)
