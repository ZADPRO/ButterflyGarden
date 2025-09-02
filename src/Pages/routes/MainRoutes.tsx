import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Header  from "../../Components/Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        {/* <Route path="/course" element={<Course />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-view" element={<BlogView />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRoutes;
