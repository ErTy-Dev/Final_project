import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Poisk from "./components/poisk/Poisk";


function Main() {

  return (
    <div>
      <Poisk/>
    </div>
  );
}

export default Main;
