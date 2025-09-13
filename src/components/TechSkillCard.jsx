import { Card, CardContent, Typography, Box } from "@mui/material";
import { Code, Database, Globe, GitBranch } from "lucide-react";
import Tilt from "react-parallax-tilt";

const skills = [
  { icon: <Code size={32} />, title: "Frontend", desc: "React, Hooks, Router, MUI, Tailwind" },
{ icon: <Database size={32} />, title: "Backend", desc: "Node.js, Express(LEARNING), Firebase basics" },
  { icon: <Globe size={32} />, title: "APIs", desc: "REST APIs, Firebase Auth, Third-party APIs" },
  { icon: <GitBranch size={32} />, title: "Version Control", desc: "Git & GitHub" },
];

export default function TechSkillCards() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
      gap={3}
      mt={6}
    >
      {skills.map((skill, index) => (
         <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      //glareColor="#00f5ff"
      glarePosition="all"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={2500}
    >   
        <Card
          key={index}
          sx={{
            height: "100%",
            p: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            },
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" gap={2} color={"inherit"}>
              {skill.icon}
              <Typography variant="h6" fontWeight="bold" fontFamily={'Roboto Mono, monospace'} color="inherit">
                {skill.title}
              </Typography>
            </Box>
            <Typography variant="body2" color="inherit" mt={1} fontFamily={'Roboto Mono, monospace'}>
              {skill.desc}
            </Typography>
          </CardContent>
        </Card>
        </Tilt>
      ))}
    </Box>
  );
}
