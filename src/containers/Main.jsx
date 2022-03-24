import React from "react";
import InputForm from "../components/InputForm";

import "./main.scss";
import Tasks from "./Tasks";

const Main = () => {
  return (
    <div className="main">
      <InputForm textInBtn={"Submit"} />
      <Tasks />
    </div>
  );
};

export default Main;
