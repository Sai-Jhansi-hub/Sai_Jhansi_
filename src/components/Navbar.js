// src/components/Navbar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import TimelineIcon from "@mui/icons-material/Timeline";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (state) => () => setOpen(state);

  // ✅ Navigation links
  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "About", path: "/about", icon: <InfoIcon /> },
    { label: "Projects", path: "/projects", icon: <WorkIcon /> },
    { label: "Timeline", path: "/timeline", icon: <TimelineIcon /> },
    { label: "Contact", path: "/contact", icon: <EmailIcon /> },
  ];

  // ✅ Social icons
  const socialIcons = [
    {
      icon: <GitHubIcon sx={{ color: "#000" }} />,
      link: "https://github.com/Sai-Jhansi-hub",
    },
    {
      icon: <LinkedInIcon sx={{ color: "#0A66C2" }} />,
      link: "http://linkedin.com/in/sai-jhansi-831a871a4",
    },
  ];

  return (
    <>
      {/* ✅ AppBar (Sticky Navbar) */}
      <AppBar
        position="sticky"
        sx={{
          background: "#004040", 
          backdropFilter: "blur(6px)", // glass effect
          color: "#E6F1FF",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)", // softer shadow
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* ✅ Brand Name (Portfolio) */}
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "inherit", }}
          >
            <Typography
              variant="h5"
              sx={{
fontFamily: "'Poppins', sans-serif",
                fontWeight: "medium",
                letterSpacing: 0.7,
                color: "#66FFCC", 
                
              }}
            >
              Portfolio
            </Typography>
          </NavLink>

          {/* ✅ Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navItems.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? "#FFD700" : "#fff", // gold when active
                  textDecoration: "none",
                  fontWeight: isActive ? "bold" : "normal",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                })}
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}

            {/* ✅ Social Icons */}
            {socialIcons.map((item, idx) => (
              <IconButton
                key={idx}
                component="a"
                href={item.link}
                target="_blank"
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>

          {/* ✅ Mobile Hamburger Menu */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#FFD700" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ✅ Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          {/* Drawer Header */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#630b37" }}
            >
              Portfolio
            </Typography>
          </Box>
          <Divider />

          {/* Nav Links */}
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  "&.active .MuiListItemText-root": { color: "#630b37" },
                }}
              >
                <ListItemIcon sx={{ color: "#630b37" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Divider />

          {/* ✅ Social Icons + Email */}
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 2 }}
          >
            {socialIcons.map((item, idx) => (
              <IconButton key={idx} component="a" href={item.link} target="_blank">
                {item.icon}
              </IconButton>
            ))}
            <IconButton component="a" href="mailto:yourmail@example.com">
              <EmailIcon sx={{ color: "#D44638" }} /> {/* Gmail red */}
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
