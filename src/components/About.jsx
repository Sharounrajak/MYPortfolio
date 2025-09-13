import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import AboutCard from "./aboutCards";
import TechSkillCards from "./TechSkillCard";

const About = () => {
  return (
    <>
      {/* About Me Header Section */}
      <Box
        component="section"
        id="about"
        sx={{
          minHeight: { xs: "15vh", md: "17vh" },
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 3, md: 4 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "Roboto Mono, monospace",
              fontWeight: "medium",
              textDecoration: "underline",
              textDecorationColor: "primary.main",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
              textAlign: "center",
            }}
          >
            About Me
          </Typography>
        </motion.div>
      </Box>

      {/* Main Content Section */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "900px" },
                mx: "auto",
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 6 },
              }}
            >
              {/* Name Section */}
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
                  fontWeight: 600,
                  lineHeight: { xs: 1.2, md: 1.1 },
                  mb: { xs: 3, md: 4 },
                  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                I'm <br /> Sharoun Rajak
              </Typography>

              {/* Bio Paragraphs */}
              <Box sx={{ space: 3 }}>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontFamily: "GT America, sans-serif",
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
                    lineHeight: { xs: 1.6, md: 1.7 },
                    mb: { xs: 2.5, md: 3 },
                    fontWeight: 400,
                    color: "text.secondary",
                  }}
                >
                  A passionate developer with a love for creating innovative
                  solutions, love bringing ideas to life through code.
                </Typography>

                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.2rem" },
                    lineHeight: { xs: 1.6, md: 1.7 },
                    mb: { xs: 2.5, md: 3 },
                    color: "text.primary",
                  }}
                >
                  Started my journey 4 years ago in school, with C language, later got
                  interest in web development but after a lot of ups and downs and
                  financial issues, family issues, I can now finally pursue my passion
                  full-time.
                </Typography>

                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.2rem" },
                    lineHeight: { xs: 1.6, md: 1.7 },
                    mb: { xs: 4, md: 5 },
                    color: "text.primary",
                    fontWeight: 500,
                  }}
                >
                  I am currently open to job opportunities where I can contribute,
                  learn and grow. If you have a good opportunity that matches my
                  skills and experience then don't hesitate to contact me.
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Tech Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
              <Typography
                variant="h2"
                component="h3"
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 600,
                  mb: { xs: 3, md: 4 },
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: { xs: 60, md: 80 },
                    height: 3,
                    bgcolor: "primary.main",
                    borderRadius: 2,
                  },
                }}
              >
                Tech Skills
              </Typography>

              {/* Tech Skills Cards Container */}
              <Box
                sx={{
                  mt: { xs: 4, md: 6 },
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <TechSkillCards />
              </Box>
            </Box>
          </motion.div>

          {/* About Cards Section (if needed) */}
          {/* Uncomment if you want to include AboutCard component */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ mt: { xs: 6, md: 8 } }}>
              <AboutCard />
            </Box>
          </motion.div>
          */}
        </Box>
      </Container>
    </>
  );
};

export default About;