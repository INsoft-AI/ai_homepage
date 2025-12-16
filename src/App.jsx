import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Impact from './components/Impact';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import ConsultationForm from './components/ConsultationForm';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Impact />
        <Solutions />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consultation" element={<ConsultationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
