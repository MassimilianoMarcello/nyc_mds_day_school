import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InTheClassroom from "./components/pages/InTheClassroom";
import AboutMds from "./components/pages/AboutMds";

import ContactUs from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import Leadership from "./components/pages/Leadership";
import OurBoard from "./components/pages/OurBoard";
import MdsAtGlance from "./components/pages/MdsAtGlance";
import HeroSection from "./components/Hero Section/HeroSection";
import MainContent from "./components/Main Content/MainContent";
import Prefooter from "./components/PreFooter/PreFooter";
import Footer from "./components/Footer/Footer";
import MediumGoldenBorder from "./components/borders/MediumGoldenBorder";
import EmploymentOpportunities from "./components/pages/EmplyementOpportunities";
import Admissions from "./components/pages/Admissions";
import AdmissionsProcess from "./components/pages/AdmissionsProcess";
import SamplePageOne from "./components/pages/SamplePageOne";
import SamplePageTwo from "./components/pages/SamplePageTwo";
import SamplePageThree from "./components/pages/SamplePageThree";

export default function App() {
  return (
    <Router>
      <Navbar />
      <MediumGoldenBorder />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MainContent />
            </>
          }
        />
        <Route path="/about_mds" element={<AboutMds />} />

        <Route path="/in_the_classroom" element={<InTheClassroom />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/our_board" element={<OurBoard />} />
        <Route path="/mds_at_a_glance" element={<MdsAtGlance />} />
        <Route
          path="/employment_opportunities"
          element={<EmploymentOpportunities />}
        />
        <Route path="/admissions_process" element={<AdmissionsProcess />} />
        <Route path="/admissions_welcome" element={<Admissions />} />
        <Route path="/sample_page_one" element={<SamplePageOne />} />
        <Route path="/sample_page_two" element={<SamplePageTwo />} />
        <Route path="/sample_page_three" element={<SamplePageThree />} />
      </Routes>
      <Prefooter />
      <Footer />
    </Router>
  );
}
