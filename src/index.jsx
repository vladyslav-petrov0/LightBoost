import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser.js';
import { store } from './store.js';
import { Provider as StoreProvider } from 'react-redux';

import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
