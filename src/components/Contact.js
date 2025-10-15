import React from "react";
import { Paper, Typography, Grid, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactPage = () => {
  // Common style for all links with smaller font
  const linkStyle = {
    textDecoration: "underline", // always underlined
    color: "#1976d2",           // standard clickable blue
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "0.9rem",         // smaller font size
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 2, md: 5 },
        maxWidth: 900,
        mx: "auto",
        borderRadius: 3,
      }}
    >
      {/* Header */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#320696ff" }}
      >
        Contact Me
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 4, fontSize: "1.1rem" }}
      >
        I’m always excited to connect! Whether you want to collaborate on AI/ML
        projects, discuss ideas, or just say hi, feel free to reach out.
      </Typography>

      {/* Contact Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Gmail */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
            <IconButton sx={{ fontSize: 50, color: "#D44638" }}>
              <EmailIcon fontSize="medium" />
            </IconButton>
            <br />
            <Link href="mailto:iamsaijhansikongara@gmail.com" sx={linkStyle}>
              Gmail
            </Link>
          </Paper>
        </Grid>

        {/* GitHub */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
            <IconButton sx={{ fontSize: 50, color: "#070711ff" }}>
              <GitHubIcon fontSize="medium" />
            </IconButton>
            <br />
            <Link
              href="https://github.com/Sai-Jhansi-hub"
              target="_blank"
              rel="noopener"
              sx={linkStyle}
            >
              GitHub
            </Link>
          </Paper>
        </Grid>

        {/* LinkedIn */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
            <IconButton sx={{ fontSize: 50, color: "#0a66c2" }}>
              <LinkedInIcon fontSize="medium" />
            </IconButton>
            <br />
            <Link
              href="https://www.linkedin.com/in/sai-jhansi-831a871a4/"
              target="_blank"
              rel="noopener"
              sx={linkStyle}
            >
              LinkedIn
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactPage;
