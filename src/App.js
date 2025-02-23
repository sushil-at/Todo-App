import './App.css';
import Header from './components/Header';
import { AddToDoItem } from './components/AddToDoItem';
import {Todos} from './components/Todos';
import {Footer} from './components/Footer';
import { About } from './components/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log(todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo ;
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title,desc)=>{
    console.log(title,desc);
    let sno = todos.length +1;
    const newTodo = {
      sno: sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,newTodo]);
    console.log('new',newTodo);

  }

  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
      <>
      <Router>
        <Header title="My ToDo List" />
        <Routes>
          <Route path="/" element= {
            
              <>
              <AddToDoItem addTodo={addTodo}/>
              <Todos todos ={todos} onDelete={onDelete}/>
              </>
          }>
            
          </Route>
          <Route path="/about" element={<About />}>
            
          </Route>
          
        </Routes>
        <Footer/>
      </Router>
      </>
  );
}

export default App;
