import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav />
      <main>
      <Main />
      <About />
      <Footer />
      </main>
    </div>
  );
}

export default App;
