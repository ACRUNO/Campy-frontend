import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store/index';
import axios from 'axios';

axios.defaults.baseURL= 'http://localhost:3001'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Auth0Provider domain='dev-pxuenzxdcfyoadkw.us.auth0.com' clientId='MqHATjuTUW4q3hlJw9LgG4lYEh5nxXbu' redirectUri={'http://localhost:3000/login'}>
      <Provider store={store}>    
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
