import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DesignSection from "./components/DesignSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import InteriorDesigningPage from "./pages/Interior/Interior";
import ConstructionHero from "./pages/construction/constructionHero";


function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <DesignSection />
                <Services />
                <AboutUs />
              </main>
            }
          />
          {/* Construction Page Route */}
          <Route path="/services/Construction" element={<ConstructionHero />} />
          <Route path="/services/interior-designing" element={<InteriorDesigningPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;