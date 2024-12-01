import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Education } from "./components/Education";
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Experience />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Skills />
      <TechStack />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
