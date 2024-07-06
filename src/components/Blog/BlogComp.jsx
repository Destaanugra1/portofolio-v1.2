import Styles from "./BlogComp.module.css";
import images from "../images/kageno.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const BlogComp = () => {
  return (
    <div id="Blog" className={Styles.blog}>
      <div data-aos="fade-right" data-aos-delay="400">
        <img className={Styles.gambar} src={images} alt="foto" />
      </div>
      <div data-aos="fade-left" data-aos-delay="500"> 
        <h1 className={Styles.intro}>Hallo Saya Akan Memperkenalkan Diri</h1>
        <div className={Styles.perkenalan}>
          <h3 className={Styles.perkenalan__diri}>Nama:</h3>
          <p className={Styles.perkenalan__diri__1}>Desta Anugra Pratama</p>
          <h3 className={Styles.perkenalan__diri}>Alamat:</h3>
          <p className={Styles.perkenalan__diri__1}>Lampung, Lampung utara</p>
          {/* <h3 className={Styles.perkenalan__diri}>Email:</h3>
          <p className={Styles.perkenalan__diri__1__email}>destaanugrapratama@gmail.com</p> */}
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
