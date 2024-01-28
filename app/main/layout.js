import Navbar from "@/component/module/Navbar/Navbar";
import Footer from "@/component/module/footer/Footer";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
