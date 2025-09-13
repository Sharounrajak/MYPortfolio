import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
//import About from "./components/About";
//import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import ContactPage from "./pages/ContactPage";
 import emailjs from "@emailjs/browser";




import { Container, ThemeProvider } from "@mui/material";
///import MainLayout from "./MainLayout/mainlayout";
export default function App() {
  emailjs.init("bers12qaB7fvoVRBP"); // your Public Key
  return (
    <>
    
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        
        
        </Routes>

    </>
   


  );
}

{
}
