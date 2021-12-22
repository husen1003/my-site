import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative'>
      <Router>
        <Navbar />
        <Banner />
        <About />
        <MyWork />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
