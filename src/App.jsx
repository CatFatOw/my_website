import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Hero from './Hero/Hero';
import About from './About/About';
import Achievement from './Achievement/Achievement';
import Facts from './FastFacts/Facts';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<><Hero /><About /></>} />
          <Route path='/achievement' element={<Achievement />} />
          <Route path='/facts' element={<Facts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
