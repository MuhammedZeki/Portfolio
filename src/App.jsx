import "./App.css";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/navbar";
import Projects from "./sections/Projects";
const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
