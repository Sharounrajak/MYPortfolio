import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Divider,
  Link,
  Chip,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  LocationOn,
  Phone,
  FavoriteRounded,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", target: "about" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  const socialLinks = [
    { 
      icon: <GitHub />, 
      href: "https://github.com/Sharounrajak", 
      label: "GitHub",
      color: "#333" 
    },
    { 
      icon: <LinkedIn />, 
      href: "www.linkedin.com/in/contact-sarun-rajak", 
      label: "LinkedIn",
      color: "#0077b5" 
    },
    { 
      icon: <Twitter />, 
      href: "https://twitter.com/your-handle", 
      label: "Twitter",
      color: "#1da1f2" 
    },
    { 
      icon: <Email />, 
      href: "mailto:sharounrajak123@email.com", 
      label: "Email",
      color: "#ea4335" 
    },
  ];

  const techStack = [
    "React", "Node.js", "Express", "Material-UI", "JavaScript", "TypeScript"
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "rgba(33, 150, 243, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(33, 150, 243, 0.02) 0%, rgba(21, 203, 243, 0.02) 100%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Footer Content */}
          <Box sx={{ py: { xs: 6, md: 8 } }}>
            <Grid container spacing={{ xs: 4, md: 6 }}>
              {/* Brand Section */}
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <Box sx={{ mb: { xs: 3, md: 0 } }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        fontWeight: 700,
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                        mb: 2,
                        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SR
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        mb: 3,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                      }}
                    >
                      Full Stack MERN Developer passionate about creating 
                      innovative digital solutions. Always excited to turn 
                      ideas into reality through code.
                    </Typography>

                    <Chip
                      icon={<LocationOn sx={{ fontSize: "1rem" }} />}
                      label="Available for Remote Work"
                      color="success"
                      variant="outlined"
                      sx={{
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        border: "1px solid #4caf50",
                        fontWeight: 600,
                        "& .MuiChip-icon": { color: "#4caf50" },
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>

              {/* Quick Links */}
              <Grid item xs={12} sm={6} md={2}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      fontFamily: '"Inter", sans-serif',
                      color: "text.primary",
                    }}
                  >
                    Navigation
                  </Typography>
                  
                  <Stack spacing={2}>
                    {quickLinks.map((link) => (
                      <ScrollLink
                        key={link.target}
                        to={link.target}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{ cursor: "pointer" }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            fontSize: { xs: "0.95rem", md: "1rem" },
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: "primary.main",
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          {link.name}
                        </Typography>
                      </ScrollLink>
                    ))}
                  </Stack>
                </motion.div>
              </Grid>

              {/* Contact Info */}
              <Grid item xs={12} sm={6} md={3}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      fontFamily: '"Inter", sans-serif',
                      color: "text.primary",
                    }}
                  >
                    Get in Touch
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <LocationOn sx={{ fontSize: "1.2rem", color: "text.secondary" }} />
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        Butwal, Nepal
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Phone sx={{ fontSize: "1.2rem", color: "text.secondary" }} />
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        +977-9824499690
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Email sx={{ fontSize: "1.2rem", color: "text.secondary" }} />
                      <Typography
                        variant="body2"
                        component="a"
                        href="mailto:sharounrajak123@email.com"
                        sx={{
                          color: "text.secondary",
                          textDecoration: "none",
                          "&:hover": { color: "primary.main" },
                          transition: "color 0.3s ease",
                        }}
                      >
                        sharounrajak123@email.com
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </Grid>

              {/* Social Links & Tech Stack */}
              <Grid item xs={12} md={3}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      fontFamily: '"Inter", sans-serif',
                      color: "text.primary",
                    }}
                  >
                    Connect & Tech
                  </Typography>
                  
                  {/* Social Media */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1.5,
                        fontSize: "0.9rem",
                      }}
                    >
                      Follow me on:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {socialLinks.map((social) => (
                        <motion.div
                          key={social.label}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconButton
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: "text.secondary",
                              bgcolor: "rgba(33, 150, 243, 0.1)",
                              "&:hover": {
                                bgcolor: social.color,
                                color: "white",
                              },
                              transition: "all 0.3s ease",
                              width: 40,
                              height: 40,
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>

                  {/* Tech Stack */}
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 1.5,
                        fontSize: "0.9rem",
                      }}
                    >
                      Built with:
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {techStack.slice(0, 4).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: "rgba(33, 150, 243, 0.1)",
                            color: "primary.main",
                            fontSize: "0.7rem",
                            height: 24,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          {/* Bottom Section */}
          <Divider sx={{ borderColor: "rgba(33, 150, 243, 0.1)" }} />
          
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                py: 4,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: { xs: "0.85rem", md: "0.9rem" },
                }}
              >
                © {currentYear} Sharoun Rajak. Made with
                <FavoriteRounded sx={{ fontSize: "1rem", color: "#f44336" }} />
                in Nepal
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.8rem", md: "0.85rem" },
                  }}
                >
                  Back to top
                </Typography>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    onClick={scrollToTop}
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      width: 36,
                      height: 36,
                      "&:hover": {
                        bgcolor: "primary.dark",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <KeyboardArrowUp sx={{ fontSize: "1.2rem" }} />
                  </IconButton>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;