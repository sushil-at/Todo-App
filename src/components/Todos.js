import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className='container my-3'>
            <h3 className='my-3'>Todo List</h3>
            {props.todos.length === 0? "No ToDos to Display" : 
            props.todos.map((todo)=>{
                return (<TodoItem todos={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })
            }
            
        </div>
    )
}