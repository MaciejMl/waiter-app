import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/layout/Home/Home';
import Table from './components/features/Table/Table';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tables/:tableId' element={<Table />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
