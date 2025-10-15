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
import SchoolIcon from "@mui/icons-material/School";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

// Experiences array
const experiences = [
  {
    company: "NobleSoft Sol.,",
    location: "Langhorne, PA, USA",
    role: "Jr. Software Engineer",
    duration: "Nov 2024 - Present",
    icon: <WorkspacesIcon />,
    description:
      "TECH STACK: Python, Data analysis, Big Data, ML, Agile, AWS, Business Analysis, Git."
  },
  {
    company: "Independent Learning & Research",
    role: "Data Scientist & Frontend Developer",
    duration: "Aug 2023 - Present",
    side: "left",
    icon: <LaptopMacIcon />,
    description: "Working on AI/ML projects, ETL pipelines, and frontend."
  },
  {
    company: "Zenspace IT LLC,",
    role: ".Net Developer",
    location: "Charlotte, NC, USA",
    duration: "Feb 2024 - Oct 2024",
    icon: <WorkspacesIcon />,
    description:
      "TECH STACK: React.js, .NET Core, Agile, AWS, Business Analysis, Git."
  },
  {
    company: "FAU First-Year Connect,",
    role: "Mentor for first year gen",
    location: "Boca Raton, FL, USA",
    duration: "Sept 2023 - May 2024",
    side: "left",
    icon: <SchoolIcon />,
    description:
      "Guided first-year students, organized mentorship sessions."
  },
  {
    company: "Cognizant Technology Sol.,",
    role: "Programmer Analyst Trainee",
    location: "Hyderabad, TS, India",
    duration: "Nov 2021 - Jul 2022",
    icon: <WorkspacesIcon />,
    description: "TECH STACK: React, MongoDB, Agile."
  },
  {
    company: "Cognizant Technology Sol.,",
    role: "Programmer Analyst Trainee (Intern)",
    location: "Hyderabad, TS, India",
    duration: "Jul 2021 - Oct 2021",
    side: "left",
    icon: <WorkOutlineIcon />,
    description: "TECH STACK: React, MongoDB, SQL."
  },
  {
    company: "SmartBridge Sol.,",
    role: "Machine Learning Developer",
    location: "Hyderabad, TS, India",
    duration: "Jun 2020 - Jul 2020",
    side: "right",
    icon: <WorkOutlineIcon />,
    description: "TECH STACK: Python, ML."
  }
];

const TimelinePage = () => {
  return (
    <Timeline
      position="right" // force all items to align vertically
      sx={{
        p: { xs: 2, md: 4 },
        "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 }
      }}
    >
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          {/* Duration */}
          <TimelineOppositeContent
            sx={{
              m: "auto 0",
              fontSize: "0.9rem",
              color: "text.secondary",
              minWidth: 0,
              pr: 2,
              textAlign: "right"
            }}
          >
            {exp.duration}
          </TimelineOppositeContent>

          {/* Icon + vertical connector */}
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "#008080", color: "white" }}>
              {exp.icon}
            </TimelineDot>
            {index !== experiences.length - 1 && (
              <TimelineConnector sx={{ bgcolor: "#008080", minHeight: "50px" }} />
            )}
          </TimelineSeparator>

          {/* Timeline content */}
          <TimelineContent sx={{ py: 2, px: 2 }}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 3,
                maxWidth: 450,
                backgroundColor: "white",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
              }}
            >
              {/* Company + Location inline */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 1,
                  flexWrap: "wrap"
                }}
              >
                {exp.company && (
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    {exp.company}
                  </Typography>
                )}
                {exp.location && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    {exp.location}
                  </Typography>
                )}
              </Box>

              {/* Role */}
              {exp.role && (
                <Typography sx={{ fontSize: 16, fontWeight: 500, mt: 0.5 }}>
                  {exp.role}
                </Typography>
              )}

              {/* Description */}
              <Typography
                sx={{ fontSize: "0.9rem", color: "text.secondary", mt: 0.5 }}
              >
                {exp.description}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelinePage;
