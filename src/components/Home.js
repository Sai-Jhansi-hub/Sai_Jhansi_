// src/components/Home.js

// Import React (required to define React components)
import React from "react";

// Import Lottie React wrapper to render Lottie animations
import Lottie from "lottie-react";

// Import the JSON animation file used in the hero section
import animationData from "../lotties/hero.json"; // Replace with your Lottie animation

// Import Material UI layout and UI primitives used in this component
import { Box, Typography, Avatar, Grid, Container } from "@mui/material";

// Default exported functional component for the Home (hero) page
export default function Home() {
  return (
    // Outer Box: acts as the main page wrapper and applies full-screen layout
    <Box
      sx={{
        minHeight: "100vh", // ensure the section fills the viewport height
        display: "flex", // use flexbox for centering content
        alignItems: "center", // vertically center children
        justifyContent: "center", // horizontally center children
        // background intentionally commented out here (global background is handled in App)
        color: "white", // default text color inside this wrapper
        p: { xs: 2, sm: 3, md: 6 }, // responsive padding for different screen sizes
      }}
    >
      {/* Container centers content and constrains maximum width */}
      <Container maxWidth="lg">
        {/* Grid container organizes the hero into two responsive columns */}
        <Grid
          container
          spacing={4} // space between grid items
          alignItems="center" // vertically align grid items
          justifyContent="center" // center grid contents horizontally
        >
          {/* Left Side - Profile and descriptive text */}
          <Grid
            item
            xs={12} // full width on extra-small screens
            md={6} // half width on medium and larger screens
            textAlign={{ xs: "center", md: "left" }} // center text on mobile, left-align on desktop
          >
            {/* Avatar: profile image with responsive sizing and hover transform */}
            <Avatar
              src="/profile.jpg" // image placed in public/profile.jpg
              alt="Sai Jhansi Kongara" // accessibility text
              title="Sai Jhansi Kongara"
              sx={{
                width: { xs: 120, sm: 150, md: 180 }, // responsive width
                height: { xs: 120, sm: 150, md: 180 }, // responsive height
                mb: { xs: 2, md: 3 }, // bottom margin varies by breakpoint
                mx: { xs: "auto", md: 0 }, // center on mobile, align left on desktop
                "&:hover": { transform: "scale(1.05)" }, // subtle scale on hover
                transition: "transform 0.3s", // smooth hover transition
              }}
            />

            {/* Name heading: large cursive-styled name with responsive sizing */}
            <Typography
              variant="h3" // semantic size for the heading
              fontWeight="medium" // font weight
              gutterBottom // adds margin-bottom consistent with typography spacing
              sx={{
                fontFamily: "'Brush Script MT', cursive", // cursive font for a personal touch
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }, // responsive font sizes
                color: "#1c0453ff", // name color
              }}
            >
              Hi, I’m Sai Jhansi Kongara
            </Typography>

            {/* Tagline: short list of specialties with colored spans */}
            <Typography
              sx={{
                fontFamily: "'Pacifico', cursive", // cursive font for the tagline
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, // responsive text size
                maxWidth: { xs: "100%", md: "600px" }, // constrain width on larger screens
                mb: { xs: 3, md: 4 }, // responsive bottom margin
                lineHeight: 1.6, // comfortable line height
                color: "#186929ff", // default tagline color
              }}
            >
              {/* Each skill/keyword is wrapped with an inline span colored individually */}
              <span style={{ color: "#0cadf7ff" }}>AI/ML</span> |{" "}
              <span style={{ color: "#ea32deff" }}>Open data lake house</span> |{" "}
              <span style={{ color: "#dead0bff" }}>Python</span> |{" "}
              <span style={{ color: "#fa4008ff" }}>AWS</span> |{" "}
              <span style={{ color: "#b20dcfff" }}>Software Development</span> |{" "}
              <span style={{ color: "#05870cff" }}>Data → Design</span> |{" "}
              <span style={{ color: "#eb0954ff" }}>Value Creation</span>
            </Typography>
          </Grid>

          {/* Right Side - Lottie animation to visually support the hero */}
          <Grid
            item
            xs={12} // full width on extra-small screens
            md={6} // half width on medium+ screens
            sx={{
              display: "flex", // use flexbox to center the animation
              justifyContent: "center", // horizontally center
              alignItems: "center", // vertically center
            }}
          >
            {/* Lottie animation component with responsive sizing and subtle drop shadow */}
            <Lottie
              animationData={animationData} // animation JSON imported above
              loop // keep animation looping
              style={{
                width: "60%", // relative width inside the grid cell
                maxWidth: "200px", // cap the animation size on large screens
                height: "auto", // preserve aspect ratio
                filter: "drop-shadow(0px 0px 12px rgba(255,255,255,0.4))", // visual depth
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
