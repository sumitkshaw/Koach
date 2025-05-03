import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Pages/Navigation";
import Hero from "./Pages/Hero";
import MetricSection from "./Pages/MetricSection";
import KoachJourney from "./Pages/koachJourney";
import About from "./Pages/about"; 
import AboutSection from "./Pages/AboutSection";
import JoinSection from "./Pages/JoinSection";
import Testimonials from "./Pages/Testimonials";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation/>
         <Routes>
          <Route path="/" element={<>
            <Hero />
            <MetricSection/>
            <KoachJourney/>
            <AboutSection/>
            <Testimonials/>
            <JoinSection/>
            <Footer/>
          </>} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
