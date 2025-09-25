import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import { Typography, Paper, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

const experiences = [
  {
    role: "AI Programmer (Self-Guided Projects)",
    duration: "2023–Present",
    icon: <StarIcon />,
    description: "Working on self-guided AI/ML projects, building models and pipelines."
  },
  {
    role: "Mentor (FAU First-Year Connections)",
    duration: "2023–2024",
    icon: <SchoolIcon />,
    description: "Guided first-year students, organized mentorship sessions, and workshops."
  },
  {
    role: "Full Stack Developer",
    duration: "2021–2022",
    icon: <WorkIcon />,
    description: "Developed web applications using React, Node.js, and MongoDB."
  },
  {
    role: "Machine Learning Developer (TheSmartBridge)",
    duration: "2020",
    icon: <StarIcon />,
    description: "Built ML models for predictive analytics and data pipelines."
  },
];

const TimelinePage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        🌍 Timeline
      </Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              {exp.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">{exp.icon}</TimelineDot>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">{exp.role}</Typography>
                <Typography variant="body2">{exp.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimelinePage;
