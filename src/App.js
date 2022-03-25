import { React, useState } from 'react';

import './app.scss';
import Main from './containers/Main';
import { Context } from './context';

function App() {
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [tagTitle, setTagTitle] = useState('');
  const inputTask = document.querySelector('.input-form');
  
  const getTitleFromInput = (e)=> {
    const curTitle = e.target.value;
     setTitle(curTitle);
  };
  const handleAddTask = ()=> {
    if(inputTask.value !== ''){
      if(tasks.length < 6){
        setTasks([...tasks, {tag: '', title: `${title}`}]);
      }
    }
    setTitle('');
    inputTask.value = '';
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
  const uniqArrByPropName = (data, key) =>{
  return [...new Map(data.map(el => [key(el), el])).values()];
  };
  const createTag = (e)  => {
    let elIndexUpdate = e.target.dataset.num;
    let currentTag = document.querySelector(`.tag-${elIndexUpdate}`);
    document.querySelector(`.title-${elIndexUpdate}`).textContent = title;
    if (title.includes('#')){
     const tagName =[...title].slice(([...title].findIndex(el => el === '#') + 1), title.length).join('');
      currentTag.textContent = tagName;
      const currArrTags = [...tags, {tagName: `${tagName}`}];
      const uniqArr = uniqArrByPropName(currArrTags, it => it.title);
      setTags(uniqArr);
      setTagTitle(tagName);  
      setTasks(tasks.map(el => el.tag == '' ? {...el, tag: `${tagName}` } : el));  
    } else if(!title.includes('#')){
      currentTag.textContent = '';
    }
  };
  const handleUpdateTask = (e) => {
    let elIndexUpdate = e.target.dataset.num;
    let curValueFromInput = document.querySelector('.input-form').value;
    if(!inputTask.value == '') {
      tasks[elIndexUpdate].title = curValueFromInput;
      createTag(e);
    }
    inputTask.value = '';
  };

  return (
    <div className="App">
      <Context.Provider value={{
        tasks,
        tags,
        tagTitle,
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
