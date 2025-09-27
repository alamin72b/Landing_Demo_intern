import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Container id="home">
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
