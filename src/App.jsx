import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./Pages/Navigation";
import Hero from "./Pages/Hero";
import MetricSection from "./Pages/MetricSection";
import KoachJourney from "./Pages/koachJourney";
import About from "./Pages/about"; 
import AboutSection from "./Pages/AboutSection";
import JoinSection from "./Pages/JoinSection";
import Testimonials from "./Pages/Testimonials";
import Footer from "./Pages/Footer";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ForgotPassword from "./Pages/ForgotPassword";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/forgot-password"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {!shouldHideNavbar && <Navigation />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MetricSection />
              <KoachJourney />
              <AboutSection />
              <Testimonials />
              <JoinSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
