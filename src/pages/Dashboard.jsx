import React, { useState } from "react";
import { logOut } from "../services/authService";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "../components/SpotlightCard";
import { 
  LogOut, 
  LayoutDashboard, 
  Settings, 
  User, 
  Home,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!", {
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
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed", {
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

  const menuItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-800">
      
      <SpotlightCard
        className={`h-screen sticky top-0 transition-all duration-300 ${
          isExpanded ? "w-64" : "w-20"
        }`}
        spotlightColor="rgba(0, 229, 255, 0.1)"
      >
        <div className="p-4 relative h-full">
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -right-3 top-6 bg-cyan-500 rounded-full p-1 hover:bg-cyan-600 transition-colors duration-200 z-50"
          >
            {isExpanded ? (
              <ChevronLeft className="h-4 w-4 text-white" />
            ) : (
              <ChevronRight className="h-4 w-4 text-white" />
            )}
          </button>

          
          <div className={`transition-all duration-300 ${
            !isExpanded ? "opacity-0 scale-0" : "opacity-100"
          }`}>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-cyan-500 text-transparent bg-clip-text">
              MyApp
            </h2>
          </div>

          
          <nav className="space-y-4 mt-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.path)}
                className="flex items-center w-full p-2 rounded-lg transition-all duration-200 group hover:bg-cyan-500/10"
              >
                <div className={`flex items-center ${!isExpanded ? "justify-center w-full" : ""}`}>
                  <item.icon 
                    className="h-5 w-5 text-cyan-400 transition-transform group-hover:scale-110" 
                  />
                  {isExpanded && (
                    <span className="ml-3 text-gray-300 group-hover:text-cyan-400">
                      {item.label}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </nav>

          
          <div className="absolute bottom-4 w-full left-0 px-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-2 rounded-lg transition-all duration-200 group hover:bg-red-500/10"
            >
              <div className={`flex items-center ${!isExpanded ? "justify-center w-full" : ""}`}>
                <LogOut 
                  className="h-5 w-5 text-red-400 transition-transform group-hover:scale-110" 
                />
                {isExpanded && (
                  <span className="ml-3 text-red-400 group-hover:text-red-500">
                    Logout
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </SpotlightCard>

      
      <SpotlightCard
        className="flex-1 m-4"
        spotlightColor="rgba(0, 229, 255, 0.1)"
      >
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-cyan-500 text-transparent bg-clip-text">
            Dashboard Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard
              className="p-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              spotlightColor="rgba(0, 229, 255, 0.05)"
            >
              <h3 className="text-xl font-semibold text-cyan-400">Statistics</h3>
              <p className="text-gray-400 mt-2">Spot for the stats</p>
            </SpotlightCard>
            
            <SpotlightCard
              className="p-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              spotlightColor="rgba(0, 229, 255, 0.05)"
            >
              <h3 className="text-xl font-semibold text-cyan-400">Activities</h3>
              <p className="text-gray-400 mt-2"> Spot for Recent activities</p>
            </SpotlightCard>
            
            <SpotlightCard
              className="p-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              spotlightColor="rgba(0, 229, 255, 0.05)"
            >
              <h3 className="text-xl font-semibold text-cyan-400">Reports</h3>
              <p className="text-gray-400 mt-2">Spot for reports overview</p>
            </SpotlightCard>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Dashboard;