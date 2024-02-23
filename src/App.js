
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';



import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Skill from './Components/Skills/Skill';

function App() {
  return (
    <>
   <Navbar/>
   <main>
   <Home/>
   <About/>
   <Skill/>
   <Portfolio/>
   <Contact/>
   <Footer/>
   </main>
</>
  );
}

export default App;
