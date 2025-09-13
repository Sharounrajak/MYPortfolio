import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    {/*
    <Box sx={{ display: "flex" }}>
      <Sidebar sx={{ mr: 2 }} />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Navbar sx={{ mb: 2 }} />
        <Outlet />
      </Box>
    </Box>
    */}
  );
};

export default MainLayout;