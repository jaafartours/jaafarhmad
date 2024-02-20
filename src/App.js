import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactWhatsappButton from "react-whatsapp-button";
import Infotrip from "./pages/infotrip";

function App() {
  return (
    <div >
      <ReactWhatsappButton
        countryCode="00212"
        phoneNumber="607279128"
        style={{
          
            right: "unset",
            left: "10px",
        }}
      />
      <Header />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/infotrip" element={<Infotrip />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    

    </div>
  );
}

export default App;

