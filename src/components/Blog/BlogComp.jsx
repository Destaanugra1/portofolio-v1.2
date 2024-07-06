import Styles from "./BlogComp.module.css";
import images from "../images/kageno.png";

const BlogComp = () => {
  return (
    <div id="Blog" className={Styles.blog}>
      <div>
        <img className={Styles.gambar} src={images} alt="foto" />
      </div>
      <div>
        <h1 className={Styles.intro}>Hallo Saya Akan Memperkenalkan Diri</h1>
        <div className={Styles.perkenalan}>
          <h3 className={Styles.perkenalan__diri}>Nama:</h3>
          <p className={Styles.perkenalan__diri__1}>Desta Anugra</p>
          <h3 className={Styles.perkenalan__diri}>Alamat:</h3>
          <p className={Styles.perkenalan__diri__1}>Jl. Kageno No. 1</p>
          <h3 className={Styles.perkenalan__diri}>Email:</h3>
          <p className={Styles.perkenalan__diri__1}>blalalal</p>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
