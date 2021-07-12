import React from 'react'
import FeatherIcon from 'feather-icons-react';


const Todo = (props) => {
    return (
        <div className={props.todo.done ? 'todos-todo done' : 'todos-todo'}>
            <div className='todos-todo_icon' onClick={() => props.changeStateComplete(props.todo.id)}>
            <FeatherIcon icon={props.todo.done ? 'check-circle' : 'circle'} />
            </div>
            <div className = 'todos-todo_text'>{props.todo.title}</div>
            <div className = 'todos-todo_cta'>
                <div className='todos-todo_cta-edit' onClick = {() => props.editTodo(props.todo)}>
                    <FeatherIcon icon='edit' />

                </div>
                <div className='todos-todo_cta-delete' onClick={() => props.deleteTask(props.todo.id)}>
                <FeatherIcon icon='trash' />

                </div>
            </div>
            
        </div>
    )
}

export default Todo
