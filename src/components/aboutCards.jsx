import { Card, CardContent, Typography, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const AboutCard = ({ title, description, status }) => {
  const statusColor = {
    Live: "success",
    "In Progress": "warning",
    "Coming Soon": "default",
  };

  return (
 
    <MotionCard
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      sx={{
        maxWidth: 345,
        borderRadius: "16px",
         "&::before": {
      content: '""',
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      background: "linear-gradient(90deg, #6a11cb, #2575fc, #ff0080, #6a11cb)",
      backgroundSize: "400% 400%",
      borderRadius: "inherit",
      zIndex: 0,
      animation: "neonGlow 6s linear infinite",
    },
    "& > *": {
      position: "relative",
      zIndex: 1, // keeps content above glow
    },
      }}
    >
      
      <CardContent >
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        
      </CardContent>
      
    </MotionCard>
    
  );
};

export default AboutCard;
