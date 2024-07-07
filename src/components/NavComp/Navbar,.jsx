import React, { useState } from "react";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className={Styles.navbar}>
        <a href="#Home" className={Styles.navbar__logo}> Porto<span className={Styles.navbar__logo__span}>folio</span></a>
        <i 
          className={Styles.navbar__blog__icon} 
          onClick={toggleMenu} 
        >
          &#9776;
        </i>
        <div className={`${Styles.navblog} ${menuActive ? Styles.active : ''}`}>
          <a className={Styles.navbar__blog} href="#Home">Home</a>
          <a className={Styles.navbar__blog} href="#Blog">Blog</a>
          <a className={Styles.navbar__blog} href="#Skils">Skils</a>
          <a className={Styles.navbar__blog} href="#Footer">Kontak</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
