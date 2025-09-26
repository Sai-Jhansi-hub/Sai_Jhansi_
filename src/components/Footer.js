// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2, // padding top & bottom
        textAlign: "center", // center text
        borderTop: "1px solid #ddd", // light border on top
        mt: 4, // margin above footer
      }}
    >
      {/* Dynamic year with your name */}
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Sai Jhansi. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
