import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Stack,
  IconButton,
  Box,
  Divider,
  Chip,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Close,
  Email,
  LocationOn,
  Work,
  GitHub,
  LinkedIn,
  Download
} from "@mui/icons-material";
import { motion } from "framer-motion";

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Sidebar({ onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigationItems = [
    { label: 'About', target: 'about', icon: '👨‍💻' },
    { label: 'Projects', target: 'projects', icon: '🚀' },
    { label: 'Contact', target: 'contact', icon: '📧' }
  ];

  const skills = ['React', 'Node.js', 'Express'];

  const handleNavClick = (target) => {
    scrollToSection(target);
    onClose(); // Close sidebar after navigation
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card
        sx={{
          width: { xs: '90vw', sm: 400, md: 420 },
          maxWidth: 420,
          height: 'auto',
          maxHeight: { xs: '90vh', sm: 'auto' },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 2.5, sm: 3 },
          borderRadius: 3,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          bgcolor: "background.paper",
          position: "relative",
          border: "1px solid",
          borderColor: "rgba(33, 150, 243, 0.1)",
          overflow: 'auto',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: { xs: 8, sm: 12 },
            right: { xs: 8, sm: 12 },
            bgcolor: "rgba(0,0,0,0.05)",
            "&:hover": {
              bgcolor: "rgba(255,0,0,0.1)",
              color: "error.main",
            },
            transition: "all 0.3s ease",
          }}
        >
          <Close />
        </IconButton>

        {/* Profile Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Box sx={{ textAlign: "center", mb: 3, mt: 1 }}>
            <Avatar
              src="https://via.placeholder.com/150"
              sx={{
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
                mb: 2,
                mx: "auto",
                border: "4px solid",
                borderColor: "primary.main",
                boxShadow: "0 8px 25px rgba(33, 150, 243, 0.3)",
              }}
            />
            
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
                mb: 1,
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sharoun Rajak
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                mb: 0.5,
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              Full Stack MERN Developer
            </Typography>
            
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 1 }}>
              <LocationOn sx={{ fontSize: "1rem", color: "text.secondary" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                }}
              >
                Butwal, Nepal
              </Typography>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
              <Email sx={{ fontSize: "1rem", color: "text.secondary" }} />
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  wordBreak: "break-all",
                }}
              >
                sharounrajak123@email.com
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <Divider sx={{ width: "100%", mb: 3 }} />

        {/* Status Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Chip
            icon={<Work />}
            label="Open for Work"
            color="success"
            variant="outlined"
            sx={{
              mb: 3,
              fontWeight: 600,
              bgcolor: "rgba(76, 175, 80, 0.1)",
              border: "2px solid #4caf50",
              "& .MuiChip-icon": {
                color: "#4caf50",
              },
            }}
          />
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ width: "100%" }}
        >
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 1.5,
                fontWeight: 600,
                color: "text.primary",
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
              }}
            >
              Tech Stack
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <Chip
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: "rgba(33, 150, 243, 0.1)",
                      color: "primary.main",
                      fontWeight: 500,
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        <Divider sx={{ width: "100%", mb: 3 }} />

        {/* Navigation Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ width: "100%" }}
        >
          <Stack spacing={2} sx={{ width: "100%", mb: 2 }}>
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.target}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleNavClick(item.target)}
                  variant={index === 0 ? "contained" : "outlined"}
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    borderRadius: 2,
                    textTransform: "none",
                    ...(index === 0
                      ? {
                          boxShadow: "0 4px 15px rgba(33, 150, 243, 0.3)",
                          "&:hover": {
                            boxShadow: "0 6px 20px rgba(33, 150, 243, 0.4)",
                          },
                        }
                      : {
                          borderColor: "primary.main",
                          color: "primary.main",
                          "&:hover": {
                            bgcolor: "rgba(33, 150, 243, 0.1)",
                            borderColor: "primary.dark",
                          },
                        }),
                  }}
                  startIcon={<span style={{ fontSize: "1rem" }}>{item.icon}</span>}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        {/* Social Links & Resume */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ width: "100%" }}
        >
          <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mb: 2 }}>
            <IconButton
              href="https://github.com"
              target="_blank"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "#333", transform: "translateY(-2px)" },
                transition: "all 0.3s ease",
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "#0077b5", transform: "translateY(-2px)" },
                transition: "all 0.3s ease",
              }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>

          <Button
            variant="text"
            startIcon={<Download />}
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.8rem", sm: "0.85rem" },
              textTransform: "none",
              "&:hover": {
                color: "primary.main",
                bgcolor: "rgba(33, 150, 243, 0.1)",
              },
            }}
          >
            Download Resume
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}