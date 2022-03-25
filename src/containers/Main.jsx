import React from "react";
import InputForm from "../components/InputForm";
import Select from "../components/Select";


import "./main.scss";
import Tasks from "./Tasks";


const Main = () => {

  return (
    <div className="main">
      <InputForm textInBtn={"Submit"} />
      <Select labelTitle="sort tasks by tags" />
      <Tasks />
    </div>
  );
};

export default Main;
