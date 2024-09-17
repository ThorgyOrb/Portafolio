import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import InvoicesControl from './pages/InvoicesControl';
import { createGlobalStyle } from 'styled-components';
import Certification from './pages/Certification';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

`;
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invoicescontrol" element={<InvoicesControl />} />
        <Route path="/certification" element={<Certification/>} />
      </Routes>
    </Router>
  );
}

export default App;
