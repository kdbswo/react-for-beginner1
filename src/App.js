import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  return <div>
    <form>
      <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder='write your to do...'
      />
      <button>Add To Do</button>
    </form>
  </div>
   
}

export default App;
