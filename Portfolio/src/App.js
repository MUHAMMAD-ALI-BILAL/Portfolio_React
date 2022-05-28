import Navbar from './components/Navbar';
import First from "./components/first";
import Services from './components/services';
import About from "./components/About";
import Contact from './components/Contactform';
import Portfolio from './components/portfolio';
import Projects from "./components/Projects";
import React from "react";
import './App.css';

function App() {
  return (
  <>

  {/* <main id="home"> */}
         {/* <Navbar/> */}
         <section className = "home" id = "home">
         <Navbar/>
          <First/>
        </section>

        <section className = "services" id = "services">
        <Services/>
        </section>

        <section className = "about" id = "about">
          <About/>
        </section>

        <section className = "portfolio" id = "portfolio">
          <Portfolio/>
        </section>

        <section className = "Projects" id = "Projects">
          <Projects/>
        </section>
          
        <section className = "contact" id = "contact">
        <Contact/>
        </section>
         
    {/* </main> */}

 </>
  )
  }

export default App;
