import React from "react";
import Lottie from "lottie-react";
import animationData from "../lotties/hero.json"; // Replace with your Lottie animation
import { Box, Typography, Avatar, Grid, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        //background: "linear-gradient(135deg, #cbeeedff, #e1cdddff, #2c5364)",
        color: "white",
        p: { xs: 2, sm: 3, md: 6 }, // responsive padding
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Side - Profile + Text */}
          <Grid
            item
            xs={12}
            md={6}
            textAlign={{ xs: "center", md: "left" }} // center on mobile, left on desktop
          >
            {/* Profile Image */}
            <Avatar
              src="/sai.jpg"
              alt="Sai Jhansi"
              sx={{
                width: { xs: 120, sm: 150, md: 180 },
                height: { xs: 120, sm: 150, md: 180 },
                mb: { xs: 2, md: 3 },
                mx: { xs: "auto", md: 0 },
                "&:hover": { transform: "scale(1.05)" },
                transition: "transform 0.3s",
              }}
            />

            {/* Name */}
            <Typography
              variant="h3"
              fontWeight="medium"
              gutterBottom
              
              sx={{
                fontFamily: "'Brush Script MT', cursive",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                color: "#514b0cff",
              }}
            >
              Hi, I’m Sai Jhansi
            </Typography>

            {/* Tagline */}
            <Typography
              sx={{
                fontFamily: "'Pacifico', cursive",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                maxWidth: { xs: "100%", md: "600px" },
                mb: { xs: 3, md: 4 },
                lineHeight: 1.6,
                color: "#186929ff",
              }}
            >
              <span style={{ color: "#0cadf7ff" }}>AI/ML</span> |{" "}
              <span style={{ color: "#ea32deff" }}>Open data lake house</span> |{" "}
              <span style={{ color: "#dead0bff" }}>Python</span> |{" "}
              <span style={{ color: "#fa4008ff" }}>AWS</span> |{" "}
              <span style={{ color: "#b20dcfff" }}>Software Development</span> |{" "}
              <span style={{ color: "#05870cff" }}>Data → Design</span> |{" "}
              <span style={{ color: "#eb0954ff" }}>Value Creation</span>
            </Typography>
          </Grid>

          {/* Right Side - Lottie Animation */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Lottie
              animationData={animationData}
              loop
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                filter: "drop-shadow(0px 0px 12px rgba(255,255,255,0.4))",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
