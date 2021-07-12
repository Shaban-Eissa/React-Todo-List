import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react';
const TodoForm = (props) => {

    const [title , setTitle] = useState("") ;
    const [editRender , setEditRender] = useState(false) ;
   const  newHandler = (event) =>{
       setTitle(event.target.value)

    }

    const addNew = () =>{
        let NewTitle = title ;
        setTitle("") ;
        setEditRender(false);
        return props.addTask(NewTitle) ;
    }

    let btn = 'Insert' ;
    if(props.mode === 'edit') {
        btn = 'Edit';
    }

    if(props.mode === 'edit' && !editRender) {
        setTitle(props.todos[0].title)
        setEditRender(true) ;
    }
    return (
        <div className='todos-form'>
            <div className='todos-form_icon' onClick = {props.filterTodos}>
            <FeatherIcon icon="circle" />
            </div>
            <div className = 'todos-form_form'>
                <input type= "text" placeholder = 'insert what you want ' onChange ={newHandler} value={title} />
            </div>
            <div className = 'todos-form_submit'>
                <button className ='btn' onClick={addNew} disabled = {title.trim() ? false : true }>
               {btn}

                </button>
            </div>
            
        </div>
    )
}

export default TodoForm
