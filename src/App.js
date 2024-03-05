import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About.jsx";

import "./App.css"
import Contact from "./pages/contact.jsx";
import Footer from "./components/footer.jsx";
import Location from "./components/location.jsx";
// import ServiceSlider from "./components/ServiceSlider.jsx";
// import Work from "./components/work.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      {/* <Work/> */}
      {/* <ServiceSlider/> */}
      <Contact/>
      <Location/>
      <Footer/>
    </div>

  
)};
 


export default App;
