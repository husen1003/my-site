import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <SmoothScroll />
        <Navbar />
        <Banner />
        <About />
      </Router>
    </div>
  );
}

export default App;
