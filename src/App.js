import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import MediaLinks from './component/MediaLinks';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <MediaLinks/>
    </div>
  );
}

export default App;
