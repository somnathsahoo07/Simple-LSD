import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Building2, 
  Users,
  CheckCircle,
  LogOut 
} from "lucide-react";
import { 
  TextField, 
  Autocomplete, 
  Button, 
  Typography,
  Chip,
  AppBar,
  Toolbar,
  Box
} from "@mui/material";
import toast from "react-hot-toast";
import SpotlightCard from "../components/SpotlightCard";
import { useNavigate } from "react-router-dom";
import { logOut } from "../services/authService";
import "../styles/globals.css";

const Home = () => {
  const navigate = useNavigate();
  const locations = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];
  const roles = ["Software Engineer", "Data Scientist", "Product Manager", "UI/UX Designer"];

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleSearch = () => {
    toast.success("Searching for jobs...", {
      style: {
        border: "1px solid #00a6f4",
        padding: "16px",
        color: "#ffffff",
        backgroundColor: "#252424",
      },
    });
  };

  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "Bangalore",
      salary: "₹20-30 LPA",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Mumbai",
      salary: "₹25-35 LPA",
      skills: ["Product Strategy", "Agile", "Leadership"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-800">
      <AppBar position="sticky" sx={{ 
        backgroundColor: 'transparent', 
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #22d3ee33'
      }}>
        <Toolbar>
          
          <Typography variant="h6" sx={{ color: '#22d3ee', fontWeight: 'bold', marginRight: '2rem' }}>
            Simple-LSD
          </Typography>
          <Box sx={{ display: 'flex', gap: '1.5rem', flexGrow: 1 }}>
            <Button sx={{ color: 'white' }}>Jobs</Button>
            <Button sx={{ color: 'white' }}>Companies</Button>
            <Button sx={{ color: 'white' }}>Services</Button>
          </Box>

          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button sx={{ color: 'white' }}>
              For Employers
            </Button>
            <Button
              onClick={handleLogout}
              endIcon={<LogOut size={18} />}
              sx={{ 
                color: '#f87171', 
                '&:hover': { 
                  color: '#ef4444',
                  '& svg': { transform: 'translateX(2px)' }
                },
                '& svg': { transition: 'transform 0.2s' }
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-cyan-500 text-transparent bg-clip-text">
            Find Your Dream Job
          </h1>
          <p className="text-gray-300 text-xl">
            5 lakh+ jobs for you to explore
          </p>
        </div>

      
        <SpotlightCard className="max-w-4xl mx-auto p-6" spotlightColor="#22d3ee1a">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Autocomplete
              options={roles}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    <div className="flex items-center">
                      <Search className="w-4 h-4 mr-2" />
                      <span>Skills / Designations</span>
                    </div>
                  }
                  sx={{
                    '& .MuiInputLabel-root': { color: 'rgb(148 163 184)' },
                    '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.2)' },
                      '&:hover fieldset': { borderColor: 'rgba(148, 163, 184, 0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#22d3ee' }
                    }
                  }}
                />
              )}
            />
            <Autocomplete
              options={locations}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Location</span>
                    </div>
                  }
                  sx={{
                    '& .MuiInputLabel-root': { color: 'rgb(148 163 184)' },
                    '& .MuiInputBase-input': { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(148, 163, 184, 0.2)' },
                      '&:hover fieldset': { borderColor: 'rgba(148, 163, 184, 0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#22d3ee' }
                    }
                  }}
                />
              )}
            />
            <Button
              variant="contained"
              className="bg-cyan-500 hover:bg-cyan-600 h-14"
              fullWidth
              onClick={handleSearch}
            >
              Search Jobs
            </Button>
          </div>
        </SpotlightCard>

        
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 to-cyan-500 text-transparent bg-clip-text">
            Featured Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map((job, index) => (
              <SpotlightCard
                key={index}
                className="p-6 hover:transform hover:scale-105 transition-all duration-300"
                spotlightColor="#22d3ee0d"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <Typography variant="h6" className="text-cyan-400 font-bold">
                      {job.title}
                    </Typography>
                    <Typography className="text-gray-300 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </Typography>
                    <Typography className="text-gray-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </Typography>
                    <Typography className="text-gray-400 flex items-center gap-2 mt-2">
                      <Briefcase className="w-4 h-4" />
                      {job.salary}
                    </Typography>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      className="bg-cyan-500/10"
                      sx={{ 
                        color: 'white',
                        '&:hover': { backgroundColor: 'rgba(6, 182, 212, 0.2)' }
                      }}
                    />
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Building2, label: "1000+ Companies", color: "text-cyan-400" },
            { icon: Briefcase, label: "500k+ Jobs", color: "text-sky-400" },
            { icon: Users, label: "2M+ Users", color: "text-blue-400" },
            { icon: CheckCircle, label: "10k+ Success Stories", color: "text-green-400" },
          ].map((stat, index) => (
            <SpotlightCard
              key={index}
              className="p-6 text-center"
              spotlightColor="#22d3ee0d"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
              <Typography className="text-gray-300">{stat.label}</Typography>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
