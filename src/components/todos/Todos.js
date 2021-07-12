import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    return (
        <div className='todos-list'>
            {props.todos.map((todo) => {
               return (
                <Todo  todo = {todo} key={todo.id} changeStateComplete = {props.changeStateComplete}
                deleteTask = {props.deleteTask}
                editTodo = {props.editTodo}
                />
               )
            })}
             {props.todos.length === 0 ? <h4 className='no-todos'>No Task inserted</h4> : null }
        </div>
    )
}

export default Todos
