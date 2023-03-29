import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import About from './pages/About/About';
import Success from './pages/Success/Success';
import Services from './pages/Services/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <h1 className='text-Principal text-5xl w-full h-20 flex items-center justify-center'><Link to={'/'}>Veksten;</Link></h1>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/success' element={<Success/>}/>
  </Routes>
  <ContactForm/>
  <Footer />
  </BrowserRouter>
  </>
);

