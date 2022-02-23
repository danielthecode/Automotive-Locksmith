import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import DocumentMeta from "react-document-meta";

function App() {

  const meta = {
    title: "Car Key Experts | Your Home For All Your Car Key Serivces",

    description: "Fast and Reliable Mobile Service, Experienced Technician and Competitive Prices set us apart as the go to for all you car key services",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "car key, car key experts, vehicle lockout, car key programming, lost car key, stolen car key, car key cutting, car key repair"
      }
    }
  };

  return (
    <div className='appContainer'>
      <>
      <DocumentMeta {...meta} />
      </>
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
