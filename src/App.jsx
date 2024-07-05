import feather from "feather-icons";
import "./App.css";
import Navbar from "./components/NavComp/Navbar,";
import { useEffect } from "react";
import HomeComp from "./components/Home/HomeComp";

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
    </>
  );
}

export default App;
