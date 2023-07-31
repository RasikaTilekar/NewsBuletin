import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const Domain = process.env.DOMAIN_NAME;
const Client_ID = process.env.CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Auth0Provider
      domain="dev-bz6ix2r6471incsa.us.auth0.com"
      clientId="5oO37Po1aFiwZrsbeo7vRFB816p7PhYI"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
