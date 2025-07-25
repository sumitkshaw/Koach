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
import Dashboard from "./components/dashboard/Dashboard";
import Goals from "./components/dashboard/Goals";
import Calendar from "./components/dashboard/Calendar";
import Messages from "./components/dashboard/Messages";
import Mentors from "./components/dashboard/Mentors";
import Welcome from "./Dashboard/Welcome";
import { AuthProvider } from "./utils/AuthContext";
import Dashmentor from "./components/dashboard-mentor/Dashmentor";
import Earnings from "./components/dashboard-mentor/Earnings"
import Mentees from "./components/dashboard-mentor/Mentees"
import Calen from "./components/dashboard-mentor/Calen"
import Message from "./components/dashboard-mentor/Message";


function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/forgot-password", "/welcome", "/dashboard",
     "/dashboard/goals", "/dashboard/sessions", "/dashboard/settings",
  "/dashboard/mentors", "/dashboard/mentees"];
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
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/goals" element={<Goals />} />
        <Route path="/dashboard/calendar" element={<Calendar />} />
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/mentors" element={<Mentors />} />
        <Route path="/dashboard_mentor" element={<Dashmentor/>} />
        <Route path="/dashboard_mentor/earnings" element={<Earnings />} />
        <Route path="/dashboard_mentor/calendar" element={<Calen />} />
        <Route path="/dashboard_mentor/messages" element={<Message />} />
        <Route path="/dashboard_mentor/mentees" element={<Mentees />} />

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
