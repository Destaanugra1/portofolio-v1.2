import feather from "feather-icons";
import "./App.css";
import Navbar from "./components/NavComp/Navbar,";
import { useEffect } from "react";
import HomeComp from "./components/Home/HomeComp";
import BlogComp from "./components/Blog/BlogComp";
import SkilsComp from "./components/Skils/SkilsComp";

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
    </>
  );
}

export default App;
