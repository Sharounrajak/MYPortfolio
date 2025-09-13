import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Brightness4, Brightness7, Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import Sidebar from "../components/Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  
  const [openProfile, setOpenProfile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  // Navigation items
  const navItems = [
    { name: 'About', target: 'about' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' }
  ];

  // Mobile Navigation Component
  const MobileNav = () => (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          bgcolor: 'background.paper',
          color: 'text.primary',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                <ScrollLink
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{ 
                    width: '100%',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <ListItemText primary={item.name} />
                </ScrollLink>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Divider sx={{ my: 2 }} />
        
        {/* Theme Toggle in Drawer */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton
            color="inherit"
            onClick={() => dispatch(toggleTheme())}
            sx={{ 
              border: 1,
              borderColor: 'divider',
              '&:hover': {
                bgcolor: 'action.hover'
              }
            }}
          >
            {mode === "light" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );

  // Desktop Navigation Component
  const DesktopNav = () => (
    <>
      {navItems.map((item) => (
        <Button key={item.name} sx={{ mx: 1, color: "inherit" }}>
          <ScrollLink
            to={item.target}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:opacity-70"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {item.name}
          </ScrollLink>
        </Button>
      ))}
      
      {/* Desktop Theme Toggle */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="inherit"
          onClick={() => dispatch(toggleTheme())}
          sx={{ ml: 2 }}
        >
          {mode === "light" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
    </>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          boxShadow: "none",
          mb: 2,
          pt: 2,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Profile Avatar on left */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={handleOpenProfile}
              sx={{ mr: 2 }}
            >
              <Avatar src="https://via.placeholder.com/150" />
            </IconButton>
          </Box>

          {/* Title - Center on desktop, left-aligned on mobile */}
         { /*
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: { xs: 'left', md: 'center' },
              color: "text.primary",
              ml: { xs: 0, md: -8 }, // Offset for centering on desktop
            }}
          >
            SR
          </Typography>
          */}

          {/* Navigation - Desktop or Mobile */}
          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              edge="end"
            >
              <Menu />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DesktopNav />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <MobileNav />

      {/* Animated Profile Card (unchanged from original) */}
      <AnimatePresence>
        {openProfile && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1300,
            }}
            onClick={handleCloseProfile}
          >
            <motion.div
              key="card"
              initial={{
                scale: 0.2,
                y: -200,
                borderRadius: "50%",
                clipPath: "inset(50% 50% 50% 50% round 50%)",
              }}
              animate={{
                scale: 1,
                y: 0,
                borderRadius: "16px",
                clipPath: "inset(0% 0% 0% 0% round 16px)",
              }}
              exit={{
                scale: 0.2,
                y: -200,
                borderRadius: "50%",
                clipPath: "inset(50% 50% 50% 50% round 50%)",
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar onClose={handleCloseProfile} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}