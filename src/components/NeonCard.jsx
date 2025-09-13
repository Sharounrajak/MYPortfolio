import { Card, CardContent, Typography } from "@mui/material";


export default function NeonCard({ title, description }) {
  return (
    <Card
      sx={{
        mt: 6,
    position: "relative",
    background: "#111",
    color: "white",
    borderRadius: "1rem",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      background: "linear-gradient(90deg, #6a11cb, #2575fc, #ff0080, #6a11cb)",
      backgroundSize: "400% 400%",
      borderRadius: "inherit",
      zIndex: 0,
      animation: "neonGlow 6s linear infinite",
    },
    "& > *": {
      position: "relative",
      zIndex: 1, // keeps content above glow
    },
  }}
    >
   <CardContent >
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        
      </CardContent>    </Card>
  );
}
