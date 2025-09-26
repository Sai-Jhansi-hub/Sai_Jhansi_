// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; // React Router for navigation
import {
  ThemeProvider,   // Provides Material-UI theme to the entire app
  createTheme,     // Function to create a custom theme
  CssBaseline,     // Resets and normalizes browser styles
  GlobalStyles,    // Allows adding global CSS styles
  Box,             // MUI Box component for layout
} from "@mui/material";

import Navbar from "./components/Navbar";   // Navbar component
import Home from "./components/Home";       // Home page component
import About from "./components/About";     // About page component
import Projects from "./components/Projects"; // Projects page component
import Timeline from "./components/Timeline"; // Timeline page component
import Contact from "./components/Contact";   // Contact page component
import Footer from "./components/Footer"; //  import Footer

// Create a default Material-UI theme
const theme = createTheme();

function App() {
  return (
    // Wraps the app with the theme provider
    <ThemeProvider theme={theme}>
      {/* Normalizes CSS across browsers */}
      <CssBaseline />

      {/* Global animated background applied to body and #root */}
      <GlobalStyles
        styles={{
          body: {
            margin: 0, // Removes default body margin
            minHeight: "100vh", // Ensures full height
            fontFamily: "Roboto, sans-serif", // Global font
            background:
              "linear-gradient(-45deg, #ee7752, #F5FFFA, #E6FFFA, #23d5ab)", // Gradient background
            backgroundSize: "400% 400%", // Enlarges background for animation
            animation: "gradientBG 8s ease infinite", // Background animation
          },
          "#root": {
            minHeight: "100vh", // Ensures React root spans full height
            background: "transparent", // Prevents root from blocking background
            display: "flex", // use flexbox to push footer down
            flexDirection: "column",
          },
          "@keyframes gradientBG": {
            "0%": { backgroundPosition: "0% 50%" },   // Start position
            "50%": { backgroundPosition: "100% 50%" }, // Middle position
            "100%": { backgroundPosition: "0% 50%" }, // End position
          },
        }}
      />

      {/* Navbar component always visible at the top */}
      <Navbar />

      {/* Main page content, positioned above background */}
      <Box sx={{ position: "relative", zIndex: 1, p: { xs: 2, md: 4 } }}>
        <Routes>
          <Route path="/" element={<Home />} />         {/* Home route */}
          <Route path="/about" element={<About />} />   {/* About route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects route */}
          <Route path="/timeline" element={<Timeline />} /> {/* Timeline route */}
          <Route path="/contact" element={<Contact />} />   {/* Contact route */}
        </Routes>
      </Box>
          {/* Footer is always at the bottom */}
      <Footer />
    </ThemeProvider>
  );
}

export default App; // Exports App component
