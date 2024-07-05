import feather from "feather-icons";
import "./App.css";
import Navbar from "./components/NavComp/Navbar,";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
