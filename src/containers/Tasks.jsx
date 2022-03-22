import React from "react";
import Task from "../components/Task";

const Tasks = () => {

  const tasks = [
    {title: 'task- 1'},
    {title: 'task- 2'},
    {title: 'task- 3'},
    {title: 'task- 4'},
    {title: 'task- 5'}
  ];

  return (
    <div className="tasks">

      {
        tasks.map(el => 
          <Task key={el.title} title={el.title} />
          )
      }
      
    </div>
  );
};

export default Tasks;
