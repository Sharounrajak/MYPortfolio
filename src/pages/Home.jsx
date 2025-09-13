// HomePage.jsx
import { Box, Typography, Stack, IconButton, Container } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import TypeWriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import Contact from "../pages/ContactPage";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      
      
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: { xs: "90vh", md: "100vh" },
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 4, md: 0 },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center", position: "relative" }}>
          {/* Animated Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <Typography 
              variant="h6" 
              component="p"
              sx={{ 
                mb: { xs: 1, md: 2 }, 
                color: "text.secondary", 
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                fontWeight: 300,
              }}
            >
              Hi, I'm
            </Typography>

            {/* Name with Typewriter Effect */}
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  fontWeight: "600",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "6rem" },
                  lineHeight: { xs: 1.2, md: 1.1 },
                  background: "linear-gradient(45deg, #6799c2ff 30%, #21CBF3 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  "& .typewriter": {
                    display: "inline-block",
                  },
                }}
              >
                <TypeWriter
                  options={{
                    wrapperClassName: "typewriter",
                    strings: ["Sharoun Rajak"],
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    delay: 100,
                    deleteSpeed: 50,
                    pauseFor: 3000,
                  }}
                />
              </Typography>
            </Box>

            {/* Subtitle */}
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                mb: { xs: 3, md: 4 }, 
                color: "text.primary",
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                fontWeight: 400,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Full Stack MERN Developer
            </Typography>

            {/* Status and CTA Section */}
            <Box sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, sm: 3 },
              mt: { xs: 4, md: 6 }
            }}>
              {/* Available Status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#4caf50",
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontWeight: 500,
                    px: { xs: 2, sm: 3 },
                    py: 1,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "#4caf50",
                    bgcolor: "rgba(76, 175, 80, 0.1)",
                  }}
                >
                  🚀 Open for Work
                </Typography>
              </motion.div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Typography
                  component="button"
                  onClick={() => navigate("/ContactPage")}
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    color: "white",
                    cursor: "pointer",
                    backgroundColor: "primary.main",
                    border: "none",
                    padding: { xs: "12px 24px", md: "16px 32px" },
                    borderRadius: 2,
                    fontWeight: 600,
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(33, 150, 243, 0.3)",
                    },
                    "&:active": {
                      transform: "translateY(0)",
                    },
                  }}
                >
                  📩 Get in Touch
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>

        {/* Social Icons - Responsive positioning */}
   
          <Stack
            direction={{ xs: "row", md: "column" }}
            spacing={1}
            sx={{
              position: { xs: "static", md: "absolute" },
              bottom: { xs: "auto", md: 40 },
              left: { xs: "auto", md: 20 },
              mt: { xs: 4, md: 0 },
              zIndex: 10,
            }}
          >
            <IconButton 
              color="inherit" 
              href="https://github.com" 
              target="_blank"
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "primary.main",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <GitHub sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "#0077b5",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <LinkedIn sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "#1da1f2",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Twitter sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
            </IconButton>
          </Stack>
        
      </Box>

      {/* Sections with proper spacing */}
      <Box 
        component="section"
        id="about" 
        sx={{ 
          bgcolor: "background.default",
          py: { xs: 6, md: 8 }
        }}
      >
        <About />
      </Box>

      <Box 
        component="section"
        id="projects" 
        sx={{ 
          bgcolor: "background.paper",
          py: { xs: 6, md: 8 }
        }}
      >
        <Projects />
      </Box>

      <Box 
        component="section"
        id="contact" 
        sx={{ 
          bgcolor: "background.default",
          py: { xs: 6, md: 8 }
        }}
      >
        <Contact />
      </Box>
      <Footer/>
    </>
  );
}