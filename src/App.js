import { React, useState } from 'react';

import './app.scss';
import Main from './containers/Main';
import { Context } from './context';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState(' ');

  const handleAddTask = ()=> {
    if(title.length > 0){
      if(tasks.length < 6){
        setTasks([...tasks, {title: `${title}`}]);
      }
    }
    document.querySelector('.input-form').value = '';
    setTitle('');
  };
  const getTitleFromInput = (e)=> {
     setTitle(e.target.value);
  };
  const handlDeleteTask = (e)=> {
   let elIndex = JSON.parse(e.target.dataset.num);
    const newArr = tasks.filter((el,index) => index !== elIndex);
    setTasks(newArr);
  };
  const handleEditTask = (e) => {
    let elIndex = JSON.parse(e.target.dataset.num);
    tasks[elIndex].title;
    document.querySelector('.input-form').value = tasks[elIndex].title;
  };
  const handleUpdateTask = (e) => {
    let elIndexUpdate = e.target.dataset.num;
    let curValueFromInput = document.querySelector('.input-form').value;
    tasks[elIndexUpdate].title = curValueFromInput;
    document.querySelector('.input-form').value = '';
    document.querySelector(`.title-${elIndexUpdate}`).textContent = title;
  };
  return (
    <div className="App">
      <Context.Provider value={{
        tasks,
        handleAddTask,
        getTitleFromInput,
        handlDeleteTask,
        handleEditTask,
        handleUpdateTask
      }}>
      <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
