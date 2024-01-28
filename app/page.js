import style from "./page.module.css";
import React from "react";
import Button from "@/component/base/button/button";
import Image from "next/image";
import image from "@/public/images/bg.svg?url";
import Footer from "@/component/module/footer/Footer";
import Navbar from "@/component/module/Navbar/Navbar";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <div className="card" style={{ width: "70%", border: "none" }}>
                <div className="card-body ">
                  <h1 className="mb-4">Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                  <Button child="Mulai Dari Sekarang" style={{ backgroundColor: "#5E50A1", borderRadius: "4px", color: "#fff" }} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className={style.imgWrapper}>
                <div className={style.imgBackground}></div>
                <Image className={style.img} src={image} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
