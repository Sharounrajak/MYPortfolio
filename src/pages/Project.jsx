// a detailed project page to give more info about each project
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
export default function ProjectPage() {
  <Navbar />
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
      <Typography variant="h1">Project Page</Typography>
        <Typography variant="h5" sx={{ mt: 2, maxWidth: 600, textAlign: "center" }}>
        This is the project page, where you can learn more about the project and its features.
      </Typography>
      
    </Box>
  );
}