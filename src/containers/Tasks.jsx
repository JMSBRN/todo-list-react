import React, { useContext } from "react";
import { Context } from "../context";
import Tags from "./Tags";
import Task from '../components/Task';

const Tasks = () => {
  const {tasks} = useContext(Context);

  // if(selectValue == 'a-z') {
  //   sortArrByConditions(tasks, (a,b) => a.tag > b.tag);
  // }else if (selectValue == 'z-a') {
  //   sortArrByConditions(tasks, (a,b) => a.tag < b.tag);
  // }

  return (
    <div className="tasks">
      <Tags />
     {tasks.map((el, index) => 
      <Task id={el.id} index={index} key={el.id} title={el.title} />
      )}
    </div>
  );
};

export default Tasks;
