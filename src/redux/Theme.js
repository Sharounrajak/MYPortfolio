// theme.js
import { createTheme } from "@mui/material/styles";

 const theme = createTheme({
  palette: {
    primary: { main: "#4A5C6A" },
    secondary: { main: "#9BA9B" },
    background: {
      default: "#06141B", // page background
      paper: "#2b3236ff",   // cards, panels
    },
    text: {
      primary: "#CCD0CF", // main text
      secondary: "#9BA9B", // faded text
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "5rem",
      fontWeight: 700,
      letterSpacing: "0.05em",
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 300,
      opacity: 0.7,
    },
  },
});

export default theme;