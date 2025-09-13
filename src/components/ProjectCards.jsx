import { Card, CardContent, Typography, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const MotionCard = motion(Card);

const ProjectCard = ({ title, description, status, demoLink, codeLink }) => {
  const statusColor = {
    Live: "success",
    "In Progress": "warning",
    "Coming Soon": "default",
  };

  return (
       <Tilt
      glareEnable={true}
     glareMaxOpacity={0.4}
     // glareColor="#00f5ff"
      glarePosition="all"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1}
      transitionSpeed={2500}
    >   
    <MotionCard
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      sx={{
        maxWidth: 350,
        borderRadius: "16px",
        overflow: "hidden",
        m: 2,
     
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Chip
          label={status}
          color={statusColor[status]}
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            disabled={status !== "Live"}
            href={demoLink}
            target="_blank"
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            href={codeLink}
            target="_blank"
            disabled={!codeLink}
          >
            Code
          </Button>
        </div>
      </CardContent>
    </MotionCard>
    </Tilt>
  );
};

export default ProjectCard;
