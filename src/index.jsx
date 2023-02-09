import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser.js';
import { store } from './store.js';
import { Provider as StoreProvider } from 'react-redux';
import Lightboost from './services/Lightboost.js';
import { ServiceContext } from './context/ServiceContext.js';

import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const service = new Lightboost();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ServiceContext.Provider value={service}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ServiceContext.Provider>
    </StoreProvider>
  </React.StrictMode>
);
