import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Chip,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ✅ Projects Data (same as yours)
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Frontend",
    description: "My personal portfolio built with React, MUI.",
    image: "/profile.jpg",
    repo: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Predicting churn using Python & ML models(classification algorithms).",
    image: "/ml.jpeg",
    repo: "https://github.com/Sai-Jhansi-hub/AI-/blob/main/customer_churn_prediction%20using%20classification%20algorithms(supervised%20learning).ipynb",
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Predicting churn using Python & ML models(regression algorithms).",
    image: "/ml.jpeg",
    repo: "https://github.com/Sai-Jhansi-hub/AI-/blob/main/customer_churn_prediction%20using%20regressor%20algorithms(supervised%20algorithms).ipynb",
  },
  {
    id: 4,
    title: "Loan & Iris Data Analysis",
    category: "Machine Learning",
    description:
      "Applied unpredictive ML models to discover hidden patterns.",
    image: "/ml.jpeg",
    repo: "https://github.com/Sai-Jhansi-hub/AI-/blob/main/loan_prediction%20using%20k-means(unsupervised%20learning).ipynb",
  },
  {
    id: 5,
    title: "Open Data Lakehouse",
    category: "Data Engineering",
    description:
      "Preprocessed structured, semi-structured, and unstructured data using PySpark & Iceberg.",
    image: "/opendata.jpeg",
    repo: "https://github.com/Sai-Jhansi-hub/data_engg",
  },
  {
    id: 6,
    title: "Chatbot using Deep Learning",
    category: "Deep Learning",
    description: "Chatbot project built using deep learning.",
    image: "/chatbot.jpeg",
    repo: "https://github.com/Sai-Jhansi-hub/AI-/blob/main/chatbot_using_deep_learning_techniques.ipynb",
  },
  {
    id: 7,
    title: "Image Classifiers",
    category: "Deep Learning",
    description:
      "Developed Neural Network classifiers using TensorFlow/Keras.",
    image: "/dl.jpg",
    repo: "https://github.com/Sai-Jhansi-hub/ms_projects/blob/main/Image%20Classifiers%20Using%20Neural%20Networks%20and%20the%20MNIST%20and%20Fashion%20MNIST%20Datasets.ipynb",
  },
  {
    id: 8,
    title: "Clustering Analysis on Multiple Datasets",
    category: "Machine Learning",
    description:
      "Implemented k-means, DBSCAN, and hierarchical clustering.",
    image: "/ml.jpeg",
    repo: "https://github.com/Sai-Jhansi-hub/ms_projects/blob/main/Intro_to_data_science_final_project.py",
  },
  {
    id: 9,
    title: "Audio Description of Images",
    category: "Deep Learning",
    description:
      "Generated audio descriptions of images.",
    image: "/dl.jpg",
  },
  {
    id: 10,
    title: "Home Automation using Arduino",
    category: "IoT / Embedded Systems",
    description:
      "Controlled household appliances like lights, fans, ACs, speakers using a smartphone app.",
    image: "/automation.jpg",
  },
  {
    id: 11,
    title: "University Admission Prediction",
    category: "Machine Learning",
    description:
      "Predicted admission chances with 98% accuracy using Linear Regression.",
    image: "/ml.jpeg",
  },

];

// ✅ Carousel Responsiveness
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

// ✅ Custom Arrows
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      left: "10px",
      top: "40%",
      transform: "translateY(-50%)",
      background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
      border: "none",
      borderRadius: "50%",
      padding: "12px",
      cursor: "pointer",
      zIndex: 10,
      color: "#fff",
      fontSize: "18px",
      boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
    }}
  >
    ◀
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      right: "10px",
      top: "40%",
      transform: "translateY(-50%)",
      background: "linear-gradient(135deg, #42e695, #3bb2b8)",
      border: "none",
      borderRadius: "50%",
      padding: "12px",
      cursor: "pointer",
      zIndex: 10,
      color: "#fff",
      fontSize: "18px",
      boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
    }}
  >
    ▶
  </button>
);

const Projects = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3500}
        keyBoardControl
        showDots
        arrows
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              maxWidth: 350,
              m: 2,
              borderRadius: 3,
              boxShadow: 4,
              "&:hover": { boxShadow: 8, transform: "scale(1.02)" },
              transition: "0.3s",
            }}
          >
            {/* Image */}
            <CardMedia
              component="img"
              height="180"
              image={project.image}
              alt={project.title}
            />

            {/* Content */}
            <CardContent>
              {/* Category as Chip */}
              <Chip
                label={project.category}
                size="small"
                sx={{
                  background: "linear-gradient(135deg, #e73c7e, #23a6d5)",
                  color: "white",
                  fontWeight: "bold",
                  mb: 1,
                }}
              />

              {/* Title */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#020805ff" }}
              >
                {project.title}
              </Typography>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {project.description}
              </Typography>

              {/* View Project as link */}
              {project.repo && (
                <Link
                  href={project.repo}
                  target="_blank"
                  underline="hover"
                  sx={{ fontWeight: "bold", color: "#1976d2" }}
                >
                  🔗 View Project
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default Projects;
