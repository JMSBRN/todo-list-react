import React, { useContext } from "react";
import Task from "../components/Task";
import { Context } from "../context";
import Tags from "./Tags";

const Tasks = () => {
  const { tasks } = useContext(Context);
  console.log(tasks);
  return (
    <div className="tasks">
      <Tags />
      {tasks.map((el, idx) => (
        <Task index={idx} key={idx} title={el.title} />
      ))}
    </div>
  );
};

export default Tasks;
