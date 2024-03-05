// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About.jsx";

import "./App.css"
// import Contact from "./pages/contact.jsx";
// import Footer from "./components/footer.jsx";
// import Location from "./components/location.jsx";
import { lazy } from "react";
// import ServiceSlider from "./components/ServiceSlider.jsx";
// import Work from "./components/work.jsx";

const Navbar = lazy(()=>import("./components/Navbar.jsx"))
const About = lazy(()=>import("./pages/About.jsx"))
const Home = lazy(()=>import("./pages/Home.jsx"))
const Contact = lazy(()=>import("./pages/contact.jsx"))
const Footer = lazy(()=>import("./components/footer.jsx"))
const Location = lazy(()=>import("./components/location.jsx"))


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
