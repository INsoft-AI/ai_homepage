import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Impact from './components/Impact';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Impact />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
