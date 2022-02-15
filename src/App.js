import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Works from './Components/Works';

function App() {
  return (
    <div className="App">
      <div className='cv-container'> 

        <div className='narbav-container col-3'>
          <Navbar />
        </div>
        <div className='content-container col-9'>
          <Home />
          <About />
          <Services />
          <Experience />
          <Works />
          <Blog />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
