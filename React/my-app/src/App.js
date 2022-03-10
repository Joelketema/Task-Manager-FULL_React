
import { useState,useEffect } from 'react'

import './App.css';
import Wrapper from './Component/Wrapper';

const App = ()=> {
  
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []

  const [task, setTask] = useState(tasks)
  
  console.log(task);

 
  return (
    <div className="App">
        <Wrapper/>
    </div>
  );
}

export default App;
