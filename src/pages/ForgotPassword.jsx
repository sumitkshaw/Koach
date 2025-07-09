import { useState,useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Logo from "../assets/image3.png";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [buttonText, setButtonText] = useState("Send code");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setButtonText("sending...")
      setTimeout(() => {
        setButtonText("Code Sent!");
      }, 3000);

      // Here you would typically send the reset email
      // setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  useEffect(() => {
    if (/\d/.test(code)) {
      setButtonText("Verify Code");
    }
  }, [code]);

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="absolute top-8 left-8 flex flex-col items-start">
          <button
            onClick={() => navigate("/login")}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Logo */}
          <div className="mt-2">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />{" "}
            {/* Adjust height if needed */}
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#000080] mb-4">
            Forgot your password?
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
            Please enter your registered Email address 
            <br />
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 px-3 py-2 border border-[#9EACCE] rounded-md bg-[#FEFEFE] text-[#2D488F] placeholder-[#2D488F]"
            />
          </div>
          {isSubmitted && 
             <input
              type="Number"
              placeholder="Enter Verification Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-14 px-3 py-2 border border-[#9EACCE] rounded-md bg-[#FEFEFE] text-[#2D488F] placeholder-[#2D488F]"
            /> 
          }

          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className="w-full h-12 bg-[#F5E649] text-[#000080] font-bold text-lg rounded-md shadow-md hover:bg-[#f3e10f] transition-colors"
          >
            {buttonText}
          </button>
          
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-200 flex-grow"></div>
            <span className="px-4 text-gray-400 text-sm font-medium">or</span>
            <div className="border-t border-gray-200 flex-grow"></div>
          </div>

          <a
            href="/login"
            className="inline-block text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:underline"
          >
            Remember password? Login
          </a>
        </div>
      </div>
    </div>
  );
}
