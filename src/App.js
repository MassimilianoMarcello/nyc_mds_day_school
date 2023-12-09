import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InTheClassroom from './components/pages/InTheClassroom';
import AboutMds from './components/pages/AboutMds';
import Admissions from './components/pages/Admissions';
import ContactUs from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Leadership from './components/pages/Leadership';
import OurBoard from './components/pages/OurBoard';
import MdsAtGlance from './components/pages/MdsAtGlance';
import HeroSection from './components/Hero Section/HeroSection';
import MainContent from './components/Main Content/MainContent';
import Prefooter from './components/PreFooter/PreFooter';
import Footer from './components/Footer/Footer';
import SmallGoldenBorder from './components/borders/SmallGoldenBorder';


export default function App() {
  return (
    <Router>
         <Navbar />
         <SmallGoldenBorder/>
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
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/in_the_classroom" element={<InTheClassroom />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/our_board" element={<OurBoard />} />
      <Route path="/mds_at_a_glance" element={<MdsAtGlance />} />
    </Routes>
    <Prefooter />
            <Footer />
  </Router>
  );
}
