import React, { useContext } from "react";
import InputForm from "../components/InputForm";
import Select from "../components/Select";
import { Context } from "../context";

import "./main.scss";
import Tasks from "./Tasks";



const Main = () => {
  const {selectValue, selectHandleChange } = useContext(Context);
  return (
    <div className="main">
      <InputForm textInBtn={"Submit"} />
      <Select labelTitle="sort tags by select" onChange={selectHandleChange} value={selectValue} />
      <Tasks />
    </div>
  );
};

export default Main;
