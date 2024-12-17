
import { useState } from 'react';
import './App.css';

function App() {
  let[todolist,setTodolist]=useState([])
  let saveToDoList=(event)=>{
    let toname=event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalTodo=[...todolist,toname]
      setTodolist(finalTodo)
    } else {
      alert("This to do already exists...")
    }
    event.preventDefault()
    event.target.toname.value = '';

    
  }
  
  let items=todolist.map((value,i)=>{
    return(<TodolistItems value={value} key={i} index={i} todolist={todolist} setTodolist={setTodolist}/>)
      
  })
  return (
    <div className="App">
      <h2>To do list App</h2>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname'/><button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {items}
        </ul>
      </div>
    </div>
  );
}
function TodolistItems({value,index,todolist,setTodolist}) {
let[line,setLine]=useState(false)
let deleterow=()=>{
  let filteredData=todolist.filter((v,i)=>i!==index)
  setTodolist(filteredData)
}
  return(
  <li onClick={()=>setLine(!line)} className={(line)?"linethrough":''}>{index+1} {value}<span onClick={deleterow}>&times;</span></li>
)
  
}

export default App;
