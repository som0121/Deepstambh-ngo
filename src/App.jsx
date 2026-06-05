import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LanguageProvider from "./context/LanguageContext";

import { PopupProvider } from "./context/PopupContext";
import GlobalPopup from "./components/Popup/GlobalPopup";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./Pages/Home/Home";

import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Activities from "./Pages/Activities/Activities";
import GetInvolved from "./Pages/Getinvolved/GetInvolved";
import Donate from "./Pages/Donate/Donate";
import ContactPage from "./Pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <PopupProvider>
      <HashRouter>

        <GlobalPopup />
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />

      </HashRouter>

      </PopupProvider>

    </LanguageProvider>
  );
}

export default App;
