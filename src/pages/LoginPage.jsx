import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image3.png";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import start from '../assets/signup/start_Journey.png';


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Email login success:", userCredential.user);

      navigate("/");
    } catch (error) {
      console.log(error.code)
        if (error.code === "auth/user-not-found") {
          setError("No account found with this email.");
        } else if (error.code === "auth/invalid-credential") {
          setError("invalid-credentials");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many failed attempts. Try again later.");
        } else {
          setError("Something went wrong. Please try again.");
        }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Google login success:", user);

      navigate("/welcome");
    } catch (error) {
      setError("❌ Google login error:", error);
    }
  };

  const handleLinkedInLogin = () => {
    console.log("Login with LinkedIn");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen ">
          {/* Left Panel */}
          <div className="md:w-2/5 relative md:h-auto h-1/3 w-full bg-gradient-to-r from-[#245FF8] to-[#2D488F] flex flex-col items-center px-2 md:p-12">
            <img 
              src={logo} 
              alt="Koach Logo"
              className="absolute lg:w-[211px] w-1/4 left-6 top-6"
            />
            <h2 className="mt-20 mb-3 md:mt-20 text-white font-bold text-md md:text-4xl max-w-xl leading-tight">
              You're clicks away from igniting your career potential.
            </h2>
            <img 
              src={start}
              alt="Start your journey"
              className="md:w-full w-1/3 h-auto object-cover"
            />
          </div>
    
          {/* Right Panel */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-md">
              <h1 className="text-4xl md:text-5xl font-bold text-[#000080] leading-tight mt-5 mb-5 text-center">
                Log In
              </h1>
              
              {/* <p className="text-lg md:text-xl text-[#000080] mb-6 text-center">
                Let's get your 30 day free trial started!
              </p> */}
    
              <div className="space-y-4 mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-3 py-2 border border-[#9EACCE] rounded-md bg-[#FEFEFE] text-[#2D488F] placeholder-[#2D488F]"
                />
                
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full h-10 px-3 py-2 border border-[#9EACCE] rounded-md bg-[#FEFEFE] text-[#2D488F] placeholder-[#2D488F]"
                />
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    
                <button onClick={handleLogin} className="w-full h-12 bg-[#F5E649] text-[#000080] font-bold text-lg rounded-md shadow-md hover:bg-[#f3e10f] transition-colors">
                  Log In
                </button>
                <div className="text-right mt-4">
              <button
                onClick={() => navigate("/forgot-password")}
                className="text-blue-600 hover:underline font-medium"
              >
                Forgot Password?
              </button>
            </div>
              </div>
              
    
              <div className="text-center mb-4">
                <p className="text-[#090E1C] text-base">
                  Don't have an account? <a onClick={()=>{navigate("/signup")}} className="text-[#2D488F] hover:cursor-pointer">Sign UP</a>
                </p>
              </div>
    
              <div className="flex items-center justify-center gap-5 mb-6">
                <div className="h-[1px] bg-[#D7D7D7] flex-1"></div>
                <span className="text-[#090E1C] text-base">or</span>
                <div className="h-[1px] bg-[#D7D7D7] flex-1"></div>
              </div>
    
              <div className="space-y-4 mb-6">
                <button 
                  onClick={() => handleGoogleLogin(navigate)}
                  className="w-full z-40 h-11 border border-[#2D488F] rounded-md flex items-center justify-center gap-3 text-[#2D488F] font-bold hover:bg-gray-50 transition-colors"
                >
                  {/* Google Icon SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Log In with Google
                </button>
    
                <button className="w-full z-100 h-11 border border-[#2D488F] rounded-md flex items-center justify-center gap-3 text-[#2D488F] font-bold hover:bg-gray-50 transition-colors"
                  onClick={handleLinkedInLogin}
                >
                  {/* LinkedIn Icon SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/>
                  </svg>
                  Log In with LinkedIn
                </button>
              </div>
    
              <p className="text-xs md:text-sm text-[#2D488F] text-center font-semibold">
                By continuing, you agree to our Terms of Use and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
  );
}