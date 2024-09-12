import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import InvoicesControl from './pages/InvoicesControl';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#/projects" element={<Projects />} />
        <Route path="/#/contact" element={<Contact />} />
        <Route path="/#/invoicescontrol" element={<InvoicesControl />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
