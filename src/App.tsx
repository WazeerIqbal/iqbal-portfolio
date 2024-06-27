import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Feature from './components/Feature';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Wordpressprojects from './components/Wordpressprojects';
import About from './Pages/About';
import './App.css';

function App() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

    }
  }
  return (

    <>
      <Header  scrollToSection={scrollToSection} />
      <Routes>



        <Route
          path="/"
          element={
            <>
              <main>
                <section id="home">
                  <Herosection />
                </section>
                <section id="software-tech">
                  <Feature />
                </section>
                <section id="projects">
                  <Projects />

                </section>
                <section>
                  <Wordpressprojects />
                </section>
              </main>
            </>
          }
        />
        <Route path="/about" element={<About />} />


      </Routes>
      <Footer scrollToSection={scrollToSection}/>
    </>

  );
}

export default App;
