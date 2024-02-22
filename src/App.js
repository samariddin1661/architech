import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About.jsx";

import "./App.css"
import ServiceSlider from "./components/ServiceSlider.jsx";
import Work from "./components/work.jsx";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      {/* <ServiceSlider/> */}
    </div>

  
)};
 


export default App;
