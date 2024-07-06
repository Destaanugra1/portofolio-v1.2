import React from "react";
import Styles from "./HomeComp.module.css";
import images from "../images/foto2.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const HomeComp = () => {
  return (
    <>
      <div id="Home" className={Styles.awal__div__body__full}>
        <div className={Styles.awal__div__body}>
          <h1 data-aos="fade-right" data-aos-delay="100" className={Styles.awal}>
            Hi' <h1 className={Styles.awal__span}>Welcome to my Website</h1>
          </h1>
          <p data-aos="fade-right" data-aos-delay="200" className={Styles.awal__p}>My name Desta</p>
          <p data-aos="fade-right" data-aos-delay="400" className={Styles.awal__p__1}>
            I'm a Web Deve<span className={Styles.awal__p__1__2}>loper</span>{" "}
            Junior
          </p>
          <div data-aos="fade-right" data-aos-delay="600" >
          <button  href="/" className={Styles.bn5}>
            <a className={Styles.awal__p__buttom} href="#Skills">
              Learn
            </a>
          </button>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="800" className={Styles.awal}>
          <img className={Styles.awal__img} src={images} alt="foto" />
        </div>
      </div>
      {/* <div className={Styles.style}>text</div> */}
    </>
  );
};

export default HomeComp;
