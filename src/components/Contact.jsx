import { 
  Box, 
  Typography, 
  Grid, 
  Stack, 
  TextField, 
  Button, 
  Container,
  Paper,
  Snackbar,
  IconButton,
  Alert
} from "@mui/material";
import { 
  Send,
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Phone,
  LocationOn
} from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const serviceId = "service_xa519w6";
  const templateId = "template_mwyrt2v";
  const publicKey = "bers12qaB7fvoVRBP";

  // Contact information array that was missing
  const contactInfo = [
    {
      label: "Email",
      value: "your.email@example.com",
      icon: <Email />,
      color: "#2196F3"
    },
    {
      label: "Phone",
      value: "+1 (555) 123-4567",
      icon: <Phone />,
      color: "#4CAF50"
    },
    {
      label: "Location",
      value: "Your City, Country",
      icon: <LocationOn />,
      color: "#FF5722"
    }
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      console.error("❌ All fields are required");
      setLoading(false);
      return;
    }

    const formData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    };

    try {
      const response = await emailjs.send(serviceId, templateId, formData, publicKey);
      console.log("✅ Email sent:", response);
      setOpen(true);
      setName("");
      setEmail("");
      setMessage("");
      console.log(response);
    } catch (error) {
      console.error("❌ Failed to send:", error);
      // You might want to show an error snackbar here
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const socialLinks = [
    { icon: <GitHub />, href: "https://github.com", color: "#333" },
    { icon: <LinkedIn />, href: "https://linkedin.com", color: "#0077b5" },
    { icon: <Twitter />, href: "https://twitter.com", color: "#1da1f2" }
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontFamily: 'Roboto Mono, monospace',
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                mb: { xs: 2, md: 3 },
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: 80, md: 120 },
                  height: { xs: 3, md: 4 },
                  bgcolor: "primary.main",
                  borderRadius: 2,
                },
              }}
            >
              Get In Touch
            </Typography>
            
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
                mt: { xs: 3, md: 4 },
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              🚀 Let's turn your ideas into live, working products. 
              I'm always excited to discuss new opportunities!
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "rgba(33, 150, 243, 0.1)",
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: "text.primary"
                  }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={3} sx={{ mb: { xs: 4, md: 6 } }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          p: 2,
                          borderRadius: 2,
                          bgcolor: "rgba(33, 150, 243, 0.05)",
                          border: "1px solid",
                          borderColor: "rgba(33, 150, 243, 0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "rgba(33, 150, 243, 0.1)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Box sx={{ color: info.color }}>
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "text.secondary",
                              fontSize: "0.85rem",
                              fontWeight: 500,
                              mb: 0.5,
                            }}
                          >
                            {info.label}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "text.primary",
                              fontSize: { xs: "1rem", md: "1.1rem" },
                              fontWeight: 500,
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>

                {/* Social Links */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      color: "text.primary",
                      fontWeight: 600,
                    }}
                  >
                    Connect with me
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "text.primary",
                            bgcolor: "rgba(33, 150, 243, 0.1)",
                            "&:hover": {
                              bgcolor: social.color,
                              color: "white",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "rgba(33, 150, 243, 0.1)",
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    color: "text.primary"
                  }}
                >
                  Send Message
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ width: "100%" }}
                >
                  <Stack spacing={3}>
                    <TextField
                      name="name"
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />

                    <TextField
                      name="email"
                      label="Email Address"
                      variant="outlined"
                      type="email"
                      fullWidth
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />

                    <TextField
                      name="message"
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={loading}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                          "&:hover fieldset": {
                            borderColor: "primary.main",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.main",
                          },
                        },
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        disabled={loading}
                        sx={{
                          py: 1.5,
                          px: 4,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          fontWeight: 600,
                          borderRadius: 2,
                          textTransform: "none",
                          boxShadow: "0 4px 15px rgba(33, 150, 243, 0.3)",
                          "&:hover": {
                            boxShadow: "0 6px 20px rgba(33, 150, 243, 0.4)",
                            transform: "translateY(-2px)",
                          },
                          "&:disabled": {
                            bgcolor: "rgba(33, 150, 243, 0.5)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </Stack>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Success Snackbar */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={{ 
              width: '100%',
              borderRadius: 2,
            }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;