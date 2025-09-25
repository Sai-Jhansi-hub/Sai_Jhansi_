// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  GlobalStyles,
  Box,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 🌈 Global Animated Background */}
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            minHeight: "100vh",
            fontFamily: "Roboto, sans-serif",
            background:
              "linear-gradient(-45deg, #ee7752, #F5FFFA, #E6FFFA, #23d5ab)",
            backgroundSize: "400% 400%",
            animation: "gradientBG 15s ease infinite",
          },
          "@keyframes gradientBG": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      />

      {/* Navbar always visible */}
      <Navbar />

      {/* ✅ Page Routes (cards remain the same inside each page) */}
      <Box sx={{ position: "relative", zIndex: 1, p: { xs: 2, md: 4 } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
