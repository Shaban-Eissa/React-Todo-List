import React, { useState } from "react";
import Todo from "../components/todos/Todo";
import Todos from "../components/todos/Todos";
import TodoForm from "../components/todos/TodosForm";

const TodoList = () => {
//   const intialState = [
//     { id: 1, title: "task1", done: false },
//     { id: 2, title: "task2", done: false },
//     { id: 3, title: "task3", done: false },
//   ];

  const intialState = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos"))  : [] ;
  const [todos, setTodos] = useState(intialState);
  const [mode, setMode] = useState("add");
  const [activeMode, setActiveModes] = useState({});

  const setLocal = (todos) => {
      localStorage.setItem("todos" , JSON.stringify(todos))
  }
  const changeStateComplete = (id) => {
    const currentTodos = [...todos];
    const newTodos = currentTodos.map((el) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      }
      return el;
    });
    setLocal(newTodos)
    setTodos(newTodos);
  };
  const deleteTask = (id) => {
    const currentTodos = [...todos];
    const newTodos = currentTodos.filter((el) => el.id !== id);
    setLocal(newTodos)
    setTodos(newTodos);
  };

  const addTask = (title) => {
      if(mode !== 'edit') {
          const newTodo = {
      id: Date.now(),
      title: title,
      done: false,
      }
    const newTodos = [...todos, newTodo];
    setLocal(newTodos)
    setTodos(newTodos);

      }

      else {
          const curTodos = [...todos] ;
          const newTODOS = curTodos.map((el) => {
              if(el.id === activeMode.id) {
                  el.title = title ;
                  return el ;
              }
              return el ;
          }) ;
        //   setLocal(newTodos) ;
          setTodos(newTODOS) ;
          setActiveModes({}) ;
          setMode('add') ;
      }
  };

  const filterTodos = () => {
    if (mode === "not-done") {
      setMode("add");
    } else {
      setMode("not-done");
    }
  };

  let NowTodos = [...todos];
  if (mode === "not-done") {
    NowTodos = NowTodos.filter((e) => !e.done);
  }

  const editTodo = (todo) => {
    setMode("edit");
    setActiveModes(todo);
  };





  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodoForm
            addTask={addTask}
            filterTodos={filterTodos}
            todos={mode !== "edit" ? NowTodos : [activeMode]}
            mode = {mode}
          />
          <Todos
            todos={mode !== "edit" ? NowTodos : [activeMode]}
            changeStateComplete={changeStateComplete}
            deleteTask={deleteTask}
            editTodo={editTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
