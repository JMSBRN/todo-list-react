import { React, useEffect, useState } from 'react';
import './app.scss';
import Main from './containers/Main';
import { Context } from './context';
import data from './data.json';
function App() {
 const [tasks, setTasks] = useState(data);
 const [tags, setTags] = useState([]);
 const [value, setValue] = useState('');
 const [editingMode, setEditingMode] = useState(null);
 const [editText, setEditText] = useState('');
 const [sortValue, setSortValue] = useState('a-z');
 const [filtered, setFiltered] = useState(JSON.parse(localStorage.getItem('tasks'))?data: data);
 const tagFromtEditTextInput = editText.slice(editText.indexOf('#')+ 1, editText.length);
 const titleFromEditTextInput = editText.slice(0, editText.indexOf('#'));

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
     const tempTasks = localStorage.getItem('tasks');
     const tasksFromLocal = JSON.parse(tempTasks);
     const tempTags = localStorage.getItem('tags');
     const tagsFromLocal = JSON.parse(tempTags);
     if(tasksFromLocal){
       setTasks(tasksFromLocal);
       setTags(tagsFromLocal);
     }
 }, []);
 useEffect(() => {
   const tasksToLocal = JSON.stringify(tasks);
   localStorage.setItem('tasks', tasksToLocal);
   const tagsToLocal = JSON.stringify(tags);
   localStorage.setItem('tags', tagsToLocal);
   setFiltered(tasks);
 }, [tasks]);
 const handelSubmit = () => {
   const newArr = [...tasks, {id: new Date().getTime(), tag: '', title: value}];
   if(!value) return;
   setTasks(newArr);
   setValue('');
 };
 const deleteTask = (index) => {
  deleteTagFromTagsBytask(index);
  const newArr = [...tasks];
  newArr.splice(index, 1);
  setTasks(newArr);
  if(newArr.length <= 0){
   setTags([]);
  }
 };
 const deleteTagFromTagsBytask = (index) => {
   const tagNameIntask = tasks[index].tag;
   if((tasks.filter(el => tagNameIntask == el.tag)).length === 1){
     setTags(tags.filter( el => el.tagName !== tagNameIntask));
   }
 };
 const updateTask = (id) => {
  const newArr = [...tasks].map( el => {
    if(el.id === id){
      el.title = editText;
      if(editText.includes('#')){
        el.title = titleFromEditTextInput;
        el.tag = tagFromtEditTextInput;
        setTags([...tags, {tagName: el.tag}]);
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
 const setAllTags = () => {
   setFiltered(tasks);
 };
 const getTagTitleFromTags = (id) => {
   const filteredArr = tasks.filter(el => {
     return el.tag === id && el.title !== '';
   });
   setFiltered(filteredArr);
 };
 const clearTextInputBeForTagName = () =>{
  if(editText === tagFromtEditTextInput){
    return '';
  }else {
    return `create-tag: ${tagFromtEditTextInput}`;
  }
};
  return (
    <div className="App">
      <Context.Provider value={{
        tasks,
        filtered,
        getTagTitleFromTags,
        tags,
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
        sortValue,
        setAllTags,
        clearTextInputBeForTagName,
      }}>
      <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
