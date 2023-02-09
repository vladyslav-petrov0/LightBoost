import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';
import HomePage from '../../pages/Home';

// stylesheet
import '../../utils/scss/normalizer.scss';
import '../../utils/scss/reset.scss';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
