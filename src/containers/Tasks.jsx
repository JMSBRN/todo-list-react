import React, { useContext } from "react";
import Task from "../components/Task";
import { Context } from "../context";

const Tasks = () => {
  const { tasks } = useContext(Context);

  return (
    <div className="tasks">
      {tasks.map((el, idx) => (
        <Task index={idx}  key={idx} title={el.title} />
      ))}
    </div>
  );
};

export default Tasks;
