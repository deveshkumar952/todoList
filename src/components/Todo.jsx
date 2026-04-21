import { useSelector } from "react-redux";

import AddForm from "./AddForm";

import { useDispatch } from "react-redux";

import { deleteTodo } from "../features/todo/todoSlice";

import { marksAsDone } from "../features/todo/todoSlice";



export default function Todo() {

  const todos = useSelector((state) => state.todos);

  console.log(todos)

  const dispatch = useDispatch();

  const clickHandler = (id) => {

    dispatch(deleteTodo(id));

  };



  const marksDone = (id) => {

    dispatch(marksAsDone(id));

  };

  return (

    <>

      <h2>Todo List App</h2>

      <AddForm></AddForm>

      <ul>

        {todos.map((todo) => (

          <li

            key={todo.id}

            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}

          >

            {todo.task}

            <button onClick={() => clickHandler(todo.id)}>Delete</button>

            <button onClick={() => marksDone(todo.id)} disabled={todo.isDone}>

              {todo.isDone ? "Done" : "Mark As Done"}

            </button>

          </li>

        ))}

      </ul>

    </>

  );

}