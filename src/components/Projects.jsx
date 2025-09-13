import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";

const Projects = () => {
  const projectsData = [
    {
      title: "DevBoard",
      description: "🚧 Devboard, your own personalized dashboard to show your skills and projects",
      status: "In Progress",
      demoLink: "",
      codeLink: "https://github.com/your-repo/devboard"
    },
    {
      title: "FINVISOR",
      description: "📊 Finvisor, your own personal finance dashboard with latest finance news, insights and data.",
      status: "In Progress",
      demoLink: "",
      codeLink: "https://github.com/your-repo/finvisor"
    },
    {
      title: "Portfolio Website",
      description: "💼 Personal portfolio website built with React, Material-UI, and modern animations",
      status: "Completed",
      demoLink: "#",
      codeLink: "https://github.com/your-repo/portfolio"
    },
    {
      title: "More Projects Coming",
      description: "🔮 Stay tuned for exciting upcoming projects and innovations!",
      status: "Coming Soon",
      demoLink: "",
      codeLink: ""
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontFamily: 'Roboto Mono, monospace',
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
                mb: { xs: 2, md: 3 },
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: { xs: -8, md: -12 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: 80, md: 120 },
                  height: { xs: 3, md: 4 },
                  bgcolor: "primary.main",
                  borderRadius: 2,
                },
              }}
            >
              My Works
            </Typography>
            
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: 400,
                mt: { xs: 3, md: 4 },
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              A collection of projects that showcase my skills in full-stack development,
              UI/UX design, and modern web technologies.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid 
            container 
            spacing={{ xs: 3, sm: 4, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {projectsData.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                lg={4}
                xl={3}
                key={`${project.title}-${index}`}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  style={{ width: "100%" }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    status={project.status}
                    demoLink={project.demoLink}
                    codeLink={project.codeLink}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ 
            textAlign: "center", 
            mt: { xs: 6, md: 10 },
            py: { xs: 4, md: 6 },
            borderRadius: 3,
            bgcolor: "rgba(33, 150, 243, 0.05)",
            border: "1px solid",
            borderColor: "rgba(33, 150, 243, 0.2)",
          }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: 2,
                color: "text.primary",
              }}
            >
              Interested in my work?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.125rem" },
                mb: { xs: 3, md: 4 },
                maxWidth: "500px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              I'm always excited to discuss new opportunities and collaborate on 
              interesting projects. Let's build something amazing together!
            </Typography>

            <Box sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 3 },
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Typography
                component="a"
                href="#contact"
                sx={{
                  display: "inline-block",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 2 },
                  bgcolor: "primary.main",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(33, 150, 243, 0.3)",
                  },
                }}
              >
                Get In Touch
              </Typography>
              
              <Typography
                component="a"
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-block",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 2 },
                  border: "2px solid",
                  borderColor: "primary.main",
                  color: "primary.main",
                  textDecoration: "none",
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                View GitHub
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;