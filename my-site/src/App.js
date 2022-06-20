import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Description from './components/Description';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Description />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
