import React from "react";
import { Box, Typography, Paper, Grid, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ScienceIcon from "@mui/icons-material/Science";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const AboutPage = () => {
  return (

      <Paper elevation={4} sx={{ p: { xs: 2, md: 5 }, maxWidth: 900, mx: "auto", borderRadius: 3 }}>
        
      

        {/* Intro Paragraph */}
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
          AI/ML enthusiast with a Master’s in <strong>Computer & Information Sciences</strong> and a Certification in <strong>Value Creation (FAU)</strong>. 
          I have a strong foundation in Electronics & Communication Engineering. Skilled in <strong>Python</strong>, <strong>AI frameworks</strong>, <strong>open data lake house</strong>, software development, and <strong>AWS</strong>.
          I enjoy transforming data into intelligent solutions while integrating business strategy, value creation, and design thinking.
        </Typography>
 <Typography variant="h6" align="center">
          💻 GitHub: 
          <a href="https://github.com/Sai-Jhansi-hub" target="_blank" rel="noopener" style={{ marginLeft: 5, color: '#1976d2', textDecoration: 'none' }}>
            Sai-Jhansi-hub
          </a>
        </Typography>
        <br/>
        {/* Skills / Highlights */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <CodeIcon fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>Software & AI</Typography>
              <Typography variant="body2">Python, AI/ML, open data lake house,  Software Development,<br/> AWS</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <DataObjectIcon fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>Data & Analytics</Typography>
              <Typography variant="body2">Data analysis, Visualization, PySpark, IceBerg, <br/>AI for business insights</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <EmojiObjectsIcon fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>Innovation</Typography>
              <Typography variant="body2">Experimenting with ChatGPT for intelligent automation</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <SchoolIcon fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>Learning & Growth</Typography>
              <Typography variant="body2">Ethical & Responsible AI: fairness, accountability,<br/>transparency</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
              <AutoAwesomeIcon fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>Creative Integration</Typography>
              <Typography variant="body2">Blending Canva + Data for digital growth and visualization</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* GitHub Link */}
       
      </Paper>
   
  );
};

export default AboutPage;

