import React, { useContext } from "react";
import Task from "../components/Task";
import { Context } from "../context";
import Tags from "./Tags";

const Tasks = () => {
  const { tasks, selectValue, sortArrByConditions, tagText } = useContext(Context);

  if(selectValue == 'a-z') {
    sortArrByConditions(tasks, (a,b) => a.tag > b.tag);
  }else if (selectValue == 'z-a') {
    sortArrByConditions(tasks, (a,b) => a.tag < b.tag);
  }

  return (
    <div className="tasks">
      <Tags />
      {tasks.filter( el => el.tag.includes(tagText) || el.tag == tagText && el.tag.includes('') ).map((el, idx) => (
        <Task tagTitle={el.tag} index={idx} key={idx} title={el.title} />
      ))}
    </div>
  );
};

export default Tasks;
