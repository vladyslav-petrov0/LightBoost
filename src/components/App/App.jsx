import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';

// stylesheet
import '../../utils/scss/normalizer.scss';
import '../../utils/scss/reset.scss';
import './App.scss';

// fonts
import '../../assets/fonts/Montserrat-Regular.ttf';
import '../../assets/fonts/Montserrat-Bold.ttf';
import '../../assets/fonts/Montserrat-SemiBold.ttf';
import '../../assets/fonts/Montserrat-Medium.ttf';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
