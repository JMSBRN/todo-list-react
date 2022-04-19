import { React, useEffect, useState } from 'react';
import './app.scss';
import Main from './containers/Main';
import { Context } from './context';
import data from './data.json';


function App() {
 const [tasks, setTasks] = useState(data);
 const [value, setValue] = useState('');
 const [editingMode, setEditingMode] = useState(null);
 const [editText, setEditText] = useState('');

 useEffect(() => {
     const temp = localStorage.getItem('tasks');
     const tasksFromLocal = JSON.parse(temp);
     if(tasksFromLocal){
       setTasks(tasksFromLocal);
     }
 }, []);
 
 useEffect(() => {
   const tasksToLocal = JSON.stringify(tasks);
   localStorage.setItem('tasks', tasksToLocal);
 }, [tasks]);
 

 const handelSubmit = () => {
   const newArr = [...tasks, {id: new Date().getTime(), title: value}];
   if(!value) return;
   setTasks(newArr);
   setValue('');
 };
 const deleteTask = (index) => {
  const newArr = [...tasks];
  newArr.splice(index, 1);
  setTasks(newArr);
 };
 const updateTask = (id) => {
  const newArr = [...tasks].map( el => {
    if(el.id === id){
      el.title = editText;
    }
    return el;
  });
  setTasks(newArr);
  setEditingMode(null);
  setEditText('');
 };

  return (
    <div className="App">
      <Context.Provider value={{
        tasks, 
        handelSubmit,
        value,
        setValue,
        deleteTask,
        editText, 
        setEditText,
        editingMode,
        setEditingMode,
        updateTask
      }}>
      <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
