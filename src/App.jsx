import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";

import { Projects } from "./components/Projects/Projects";


function App() {
  return (
     <div >
      <Header/>
      <Hero/>
      <About/>
     
      <Experience />
      <Projects />
      <Contact />
      </div>
  );
}

export default App;
