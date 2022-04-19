import React, { useContext } from "react";
import { Context } from "../context";
import Tags from "./Tags";
import Task from '../components/Task';

const Tasks = () => {
  const {tasks} = useContext(Context);
  
  return (
    <div className="tasks">
      <Tags />
     {tasks.map((el, index) => 
      <Task tagText={el.tag} id={el.id} index={index} key={el.id} title={el.title} />
      )}
    </div>
  );
};

export default Tasks;
