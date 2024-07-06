import React from "react";
import Styles from "./HomeComp.module.css";
import images from "../images/foto2.png"

const HomeComp = () => {
  return (
    <>
    <div id='Home' className={Styles.awal__div__body__full}>
      <div className={Styles.awal__div__body}>
        <h1 className={Styles.awal}>
          Hi' <spam className={Styles.awal__span}>Welcome my Webside</spam>
        </h1>
        <p className={Styles.awal__p}>My name Desta</p>
        <p className={Styles.awal__p__1}>I'm a Web Deve<span className={Styles.awal__p__1__2}>loper</span> Junior</p>
        <button href="/" className={Styles.bn5}><a className={Styles.awal__p__buttom} href="/">Learn</a></button>
      </div>
      <div className={Styles.awal}>
        <img
          className={Styles.awal__img}
          src={images}
          alt="foto"
        />
      </div>
    </div>
    <div className={Styles.style}>text</div>
    </>
  );
};

export default HomeComp;
