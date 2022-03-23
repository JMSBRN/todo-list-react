import { React, useState } from 'react';

import './app.scss';
import Main from './containers/Main';
import { Context } from './context';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const inputTask = document.querySelector('.input-form');
  const handleAddTask = ()=> {
    if(title.length > 0){
      if(tasks.length < 6){
        setTasks([...tasks, {title: `${title}`}]);
      }
    }
    inputTask.value = '';
    setTitle('');
  };
  const getTitleFromInput = (e)=> {
     setTitle(e.target.value);
  };
  const handlDeleteTask = (e)=> {
   let elIndex = JSON.parse(e.target.dataset.num);
    const newArr = tasks.filter((el,index) => index !== elIndex);
    setTasks(newArr);
    inputTask.value = '';
  };
  const handleEditTask = (e) => {
    let elIndex = JSON.parse(e.target.dataset.num);
    tasks[elIndex].title;
    inputTask.value = tasks[elIndex].title;
  };
  const handleUpdateTask = (e) => {
    let elIndexUpdate = e.target.dataset.num;
    let curValueFromInput = document.querySelector('.input-form').value;
    if(title.length > 0) {
      tasks[elIndexUpdate].title = curValueFromInput;
      inputTask.value = '';
      document.querySelector(`.title-${elIndexUpdate}`).textContent = title;
      const tagName =[...title].slice(([...title].findIndex(el => el === '#') + 1), title.length).join('');
      document.querySelector(`.tag-${elIndexUpdate}`).textContent =tagName;
    }
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
