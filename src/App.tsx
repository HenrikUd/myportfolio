import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import "animate.css/animate.min.css";
import { useRef } from 'react';






function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <>
    <Home />
    <Navbar projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef}/>
    <Projects ref={projectsRef} />
    <About ref={aboutRef} />
    <Contact ref={contactRef}/>
    </>
  );
}

export default App;
