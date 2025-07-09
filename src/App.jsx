import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import MetricSection from "./components/MetricSection";
import KoachJourney from "./components/koachJourney";
import About from "./pages/About"
import AboutSection from "./components/AboutSection";
import JoinSection from "./components/JoinSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPassword from "./pages/ForgotPassword";
import CirclesPage from "./pages/CirclesPage";
import Welcome from "./pages/onBoardingPages/Welcome"
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import NotFound from "./pages/NotFound";

// mentor pages
import Community1 from "./pages/onBoardingPages/mentorPages/Community1"
import Community2 from "./pages/onBoardingPages/mentorPages/Community2"
import Community3 from "./pages/onBoardingPages/mentorPages/Community3"
import Community4 from "./pages/onBoardingPages/mentorPages/Community4"
import Community5 from "./pages/onBoardingPages/mentorPages/Community5"
import Community6 from "./pages/onBoardingPages/mentorPages/Community6"
import Community7 from "./pages/onBoardingPages/mentorPages/Community7"
import AboutMe from "./pages/onBoardingPages/mentorPages/AboutMe"
import MentorBio from "./pages/onBoardingPages/mentorPages/Bio"
import Plans from "./pages/onBoardingPages/mentorPages/Plans"

//mentee pages
import MenteeBio from "./pages/onBoardingPages/menteePages/Bio"
import Community from "./pages/onBoardingPages/menteePages/Community"
import MenteeCommunity5 from "./pages/onBoardingPages/menteePages/Community5"
import MenteeCommunity6 from "./pages/onBoardingPages/menteePages/Community6"
import MenteeCommunity7 from "./pages/onBoardingPages/menteePages/Community7"
import Community8 from "./pages/onBoardingPages/menteePages/Community8"
import Community9 from "./pages/onBoardingPages/menteePages/Community9"


function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup", "/forgot-password", "/welcome"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!shouldHideNavbar && <Navigation />}
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
        <Route path="/circles" element={<CirclesPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />  
        <Route path="/welcome" element={<PrivateRoute><Welcome /></PrivateRoute>} />

        <Route path="/mentor/community1" element={<PrivateRoute><Community1 /></PrivateRoute>} />
        <Route path="/mentor/community2" element={<PrivateRoute><Community2 /></PrivateRoute>} />
        <Route path="/mentor/community3" element={<PrivateRoute><Community3 /></PrivateRoute>} />
        <Route path="/mentor/community4" element={<PrivateRoute><Community4 /></PrivateRoute>} />
        <Route path="/mentor/community5" element={<PrivateRoute><Community5 /></PrivateRoute>} />
        <Route path="/mentor/community6" element={<PrivateRoute><Community6 /></PrivateRoute>} />
        <Route path="/mentor/community7" element={<PrivateRoute><Community7 /></PrivateRoute>} />
        <Route path="/mentor/AboutMe" element={<PrivateRoute><AboutMe /></PrivateRoute>} />
        <Route path="/mentor/Bio" element={<PrivateRoute><MentorBio /></PrivateRoute>} />
        <Route path="/mentor/plans" element={<PrivateRoute><Plans /></PrivateRoute>} />

        <Route path="/mentee/Bio" element={<PrivateRoute><MenteeBio /></PrivateRoute>} />
        <Route path="/mentee/community" element={<PrivateRoute><Community /></PrivateRoute>} />
        <Route path="/mentee/community5" element={<PrivateRoute><MenteeCommunity5 /></PrivateRoute>} />
        <Route path="/mentee/community6" element={<PrivateRoute><MenteeCommunity6 /></PrivateRoute>} />
        <Route path="/mentee/community7" element={<PrivateRoute><MenteeCommunity7 /></PrivateRoute>} />
        <Route path="/mentee/community8" element={<PrivateRoute><Community8 /></PrivateRoute>} />
        <Route path="/mentee/community9" element={<PrivateRoute><Community9 /></PrivateRoute>} />

        {/* wrong route   */}
        <Route path="*" element={<NotFound />} />
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
