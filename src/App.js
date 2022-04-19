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
 const [sortValue, setSortValue] = useState('');
 
  const selectedSort = (e) => {
    setSortValue(e.target.value);
    const newArr = tasks;
    if(sortValue == 'a-z'){
      newArr.sort((a, b) => b.tag > a.tag ? 1 : -1);
    }else if (sortValue == 'z-a'){
      newArr.sort((a, b) => a.tag > b.tag ? 1 : -1);
    }
    setTasks(newArr);
  };
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
   const newArr = [...tasks, {id: new Date().getTime(), tag: '', title: value}];
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
      if(editText.includes('#')){
        el.title = editText.slice(0, editText.indexOf('#'));
        el.tag = editText.slice(editText.indexOf('#')+ 1, editText.length);
      }
    }
    return el;
  });

  setTasks(newArr);
  setEditingMode(null);
  setEditText('');
 };
 const editTask = (id, value) => {
  setEditingMode(id);
  setEditText(value);
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
        editTask,
        updateTask,
        selectedSort,
        sortValue
      }}>
      <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
