import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import MetricSection from "./components/MetricSection";
import KoachJourney from "./components/koachJourney";
import Contact from "./components/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/Faq";
import AboutSection from "./components/AboutSection";
import JoinSection from "./components/JoinSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPassword from "./pages/ForgotPassword";
import CirclesPage from "./pages/CirclesPage";
import Welcome from "./Dashboard/Welcome";
import { AuthProvider } from "./utils/AuthContext";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/forgot-password", "/welcome"];
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/circles" element={<CirclesPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<FAQ />} />


        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent /> 
      </AuthProvider>
    </Router>
  );
}

export default App;
