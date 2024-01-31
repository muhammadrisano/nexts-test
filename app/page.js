import style from "./page.module.css";
import React from "react";
import Button from "@/component/base/button/button";
import Image from "next/image";
import image from "@/public/images/bg.svg?url";
import image1 from "@/public/images/image1.svg?url";
import Footer from "@/component/module/footer/Footer";
import Navbar from "@/component/module/Navbar/Navbar";
import { TiTick } from "react-icons/ti";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 my-4">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex mb-4 align-items-center justify-content-center">
              <div className="card  " style={{ width: "80%", border: "none" }}>
                <div className="card-body ">
                  <h2 className="mb-4">Talenta terbaik negri untuk perubahan revolusi 4.0</h2>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                  <Button className="py-3" child="Mulai Dari Sekarang" style={{ backgroundColor: "#5E50A1", borderRadius: "4px", color: "#fff" }} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center">
              <div className={style.firstImgWrapper}>
                <div className={style.firstImgBackground}></div>
                <Image className={style.firstImg} src={image} alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="container  " style={{ marginTop: "150px" }}>
          <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 d-flex align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center">
              <div className={style.secondImgWrapper}>
                <div className={style.secondImgBackground}></div>
                <Image className={style.secondImg} src={image1} alt="image" />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex mb-4 align-items-center justify-content-center ">
              <div className="card  " style={{ width: "85%", border: "none" }}>
                <div className="card-body ">
                  <h2 className="mb-4">Kenapa harus mencari tallent di peworld</h2>
                  <ul className="list-group">
                    <li className="list-group-item" style={{ border: "none" }}>
                      <TiTick className={`me-3 ${style.FirstTiTick}`} />
                      Lorem ipsum dolor sit amet.
                    </li>
                    <li className="list-group-item" style={{ border: "none" }}>
                      <TiTick className={`me-3 ${style.FirstTiTick}`} />
                      Lorem ipsum dolor sit amet.
                    </li>
                    <li className="list-group-item" style={{ border: "none" }}>
                      <TiTick className={`me-3 ${style.FirstTiTick}`} />
                      Lorem ipsum dolor sit amet.
                    </li>
                    <li className="list-group-item" style={{ border: "none" }}>
                      <TiTick className={`me-3 ${style.FirstTiTick}`} />
                      Lorem ipsum dolor sit amet.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex mb-4 align-items-center justify-content-center">
              <div className="card  " style={{ width: "80%", border: "none" }}>
                <div className="card-body my-4">
                  <h2 className="mb-4">Skill Tallent</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                  <div className="row d-flex justify-content-evenly">
                    <ul className="list-group col-6">
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        Java
                      </li>
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        Kotlin
                      </li>
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        PHP
                      </li>
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        Javascript
                      </li>
                    </ul>
                    <ul className="list-group col-6">
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        Golang
                      </li>
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        C++
                      </li>
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        Ruby
                      </li>
                      <li className="list-group-item" style={{ border: "none" }}>
                        <TiTick className={`me-3 ${style.tiTick}`} />
                        10+ bahasa lainnya
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex align-items-center justify-content-center">
              <div className={style.imgWrapper}>
                <div className={style.imgBackground}></div>
                <Image className={style.img} src={image1} alt="image" />
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
