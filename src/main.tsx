import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppRouterProvider } from './routing/router';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouterProvider>
      <App />
    </AppRouterProvider>
  </React.StrictMode>
);
