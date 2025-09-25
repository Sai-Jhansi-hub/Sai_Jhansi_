import React from "react";
import { Box, Paper, Typography, Grid, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactPage = () => {
  return (
      <Paper elevation={4} sx={{ p: { xs: 2, md: 5 }, maxWidth: 900, mx: "auto", borderRadius: 3 }}>
        {/* Header */}
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Contact Me
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: '1.1rem' }}>
          I’m always excited to connect! Whether you want to collaborate on AI/ML projects, discuss ideas, or just say hi, feel free to reach out.
        </Typography>

        {/* Contact Grid */}
        <Grid container spacing={4} justifyContent="center">
          {/* Email */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <IconButton color="primary" sx={{ fontSize: 50 }}>
                <EmailIcon fontSize="large" />
              </IconButton>
             <br/>
              <Link href="mailto:sai.jhansi@gmail.com" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                sai.jhansi@gmail.com
              </Link>
            </Paper>
          </Grid>

          {/* GitHub */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <IconButton color="primary" sx={{ fontSize: 50 }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <br/>
              <Link href="https://github.com/Sai-Jhansi-hub" target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                Sai-Jhansi-hub
              </Link>
            </Paper>
          </Grid>

          {/* LinkedIn */}
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <IconButton color="primary" sx={{ fontSize: 50 }}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <br/>
              <Link href="https://www.linkedin.com/in/sai-jhansi/" target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                linkedin.com/in/sai-jhansi
              </Link>
            </Paper>
          </Grid>

          
        </Grid>
      </Paper>
  );
};

export default ContactPage;
