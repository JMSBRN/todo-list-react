import { React, useState } from 'react';

import './app.scss';
import Main from './containers/Main';
import { Context } from './context';

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const handleAddTask = ()=> {
    if(title.length >0){
      setTasks([...tasks, {title: `${title}`}]);
    }
  };
  const getTitleFromInput = (e)=> {
     setTitle(e.target.value);
  };

  return (
    <div className="App">
      <Context.Provider value={{
        tasks,
        handleAddTask,
        getTitleFromInput
      }}>
      <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
