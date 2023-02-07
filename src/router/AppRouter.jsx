import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import LeftNavbar from "../components/LeftNavbar";

const AppRouter = () => {
  return (
    <>
      <Header />
      <LeftNavbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
