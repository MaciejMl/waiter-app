import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/layout/Home/Home';
import Table from './components/features/Table/Table';
import NotFound404 from './components/views/NotFound404/NotFound404';
import Header from './components/views/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/views/Footer/Footer';
import TableAdd from './components/features/AddTable/TableAdd';

const App = () => (
  <Container>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tables/:Id' element={<Table />} />
      <Route path='/tables/add' element={<TableAdd />} />
      <Route path='/*' element={<NotFound404 />} />
    </Routes>
    <Footer />
  </Container>
);

export default App;
