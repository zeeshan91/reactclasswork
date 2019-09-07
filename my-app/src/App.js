import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
<React.Fragment>
  <Header />
  <Slider />
  <About />
  <Portfolio />
 <Footer /> 
  
  <Form />
  
</React.Fragment>

  );
}

export default App;
