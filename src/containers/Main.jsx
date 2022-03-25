import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Select from "../components/Select";

import "./main.scss";
import Tasks from "./Tasks";



const Main = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const curValue = e.target.value;
    setValue(curValue);
  };
console.log(value);
  return (
    <div className="main">
      <InputForm textInBtn={"Submit"} />
      <Select labelTitle="sort tags by select" onChange={handleChange} value={value} />
      <Tasks />
    </div>
  );
};

export default Main;
