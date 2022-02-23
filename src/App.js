import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {
  return (
    <div className='appContainer'>
      <>
        <Hero/>
      </>
      <>
        <Services/>
      </>
      <>
        <About/>
      </>
      <>
        <Contact/>
      </>
    </div>
  );
}

export default App;
