import React from "react";
import Styles from "./Home.module.css";
import images from "../images/foto2.png"

const HomeComp = () => {
  return (
    <div className={Styles.awal__div__body__full}>
      <div className={Styles.awal__div__body}>
        <h1 className={Styles.awal}>
          Hi' <spam className={Styles.awal__span}>Welcome my Webside</spam>
        </h1>
        <p className={Styles.awal__p}>My name Desta Anugra</p>
        <p className={Styles.awal__p}>I'm a Web Developer Junior</p>
      </div>
      <div className={Styles.awal}>
        <img
          className={Styles.awal__img}
          src={images}
          alt="foto"
        />
      </div>
    </div>
  );
};

export default HomeComp;
