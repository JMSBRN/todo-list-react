import { React, useState } from 'react';

import './app.scss';
import Main from './containers/Main';
import { Context } from './context';

function App() {

  const [tasks, setTasks] = useState([{title: ''}]);

  return (
    <div className="App">
      <Context.Provider value={{
        tasks,
        setTasks
      }}>
      <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
