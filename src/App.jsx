import feather from "feather-icons";
import "./App.css";
import Navbar from "./components/NavComp/Navbar,";
import { useEffect } from "react";
import HomeComp from "./components/Home/HomeComp";
import BlogComp from "./components/Blog/BlogComp";
import SkilsComp from "./components/Skils/SkilsComp";
import FooterComp from "./components/Footer/FooterComp";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <div>
      <Navbar />
      </div>

      <div>
      <HomeComp />
      </div>

      <div>
        <BlogComp />
      </div>

      <div>
        <SkilsComp />
      </div>

      <div>
        <FooterComp />
      </div>
    </>
  );
}

export default App;
