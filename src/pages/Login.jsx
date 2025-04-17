import React, { useState } from "react";
import SpotlightCard from "../components/SpotlightCard";
import Input from "../components/Input";
import { ExternalLink, Lock, LogIn, Mail, ScanFace, Eye, EyeClosed } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields", {
        style: {
          border: "1px solid #ff6467",
          padding: "16px",
          color: "#ffffff",
          backgroundColor: "#252424",
        },
        iconTheme: {
          primary: "#fb2c36",
          secondary: "#FFFFFF",
        },
      });
      return;
    }
    try {
      await logIn(email, password);
      toast.success("Login successful!", {
        style: {
          border: "1px solid #00a6f4",
          padding: "16px",
          color: "#ffffff",
          backgroundColor: "#252424",
        },
        iconTheme: {
          primary: "#00a6f4",
          secondary: "#FFFFFF",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.", {
        style: {
          border: "1px solid #ff6467",
          padding: "16px",
          color: "#ffffff",
          backgroundColor: "#252424",
        },
        iconTheme: {
          primary: "#fb2c36",
          secondary: "#FFFFFF",
        },
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-800 relative overflow-hidden">
        <SpotlightCard
          className="custom-spotlight-card w-xl mx-5"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-sky-400 to-cyan-500 text-transparent bg-clip-text flex items-center justify-center gap-2">
              <span>
                <ScanFace className="size-7 text-cyan-400 inline-block " />{" "}
              </span>
              <span>Login</span>
            </h2>
            <form autoComplete="off">
              <Input
                icon={Mail}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <Input
                  icon={Lock}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeClosed className="text-cyan-400" />
                  ) : (
                    <Eye className="text-cyan-400" />
                  )}
                </div>
              </div>
              <button
                className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition duration-200 flex items-center justify-center gap-2"
                onClick={handleLogin}
              >
                <span className="font-bold">Login</span>
                <span>
                  <LogIn size={20} className="" />
                </span>
              </button>
            </form>
          </div>
          <div className="px-8 py-4 bg-transparent bg-opacity-50 flex justify-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-sky-400 font-bold hover:underline"
              >
                <span>
                  {" "}
                  Register <ExternalLink className="inline-block size-4" />
                </span>
              </Link>
            </p>
          </div>
        </SpotlightCard>
      </div>
    </>
  );
};

export default Login;
