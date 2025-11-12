import About from "./components/About";
import Contact from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
