// a contact me page with address, phone number and email
import Navbar from "../components/Navbar";
import { Box, Typography, Grid, Stack, TextField, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import React from "react";

export default function Contact() {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  <Navbar />;
  return (
    <Box
      sx={{
        minHeight: "80vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <section id="contact">
        <Grid container spacing={4}>
          {/* Left Side - Info */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: "left",
              pr: { xs: 2, md: 8 },
            }}
          >
            <Typography variant="h3" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              🚀 Let’s turn your idea into a live, working product.
            </Typography>

            <Stack spacing={2}>
              <Typography variant="body1">📍 Butwal, Nepal</Typography>
              <Typography variant="body1">📞 +977-9824499690</Typography>
              <Typography variant="body1">
                📧 sharounrajak123@email.com
              </Typography>
            </Stack>
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={6}>
            <form onSubmit={(event) => event.preventDefault()}>
              <Stack
                spacing={2}
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  margin: "0 auto",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  textAlign: "right",
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{ border: "1px solid grey", borderRadius: 1 }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ border: "1px solid grey", borderRadius: 1 }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ border: "1px solid grey", borderRadius: 1 }}
                />
                <Button
                  onClick={(handleClick) => setOpen(true)}
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  sx={{ alignSelf: "flex-start" }}
                >
                  Send Message
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="Message sent successfully!"
                  action={action}
                />
              </Stack>
            </form>
          </Grid>
        </Grid>
      </section>
    </Box>
  );
};