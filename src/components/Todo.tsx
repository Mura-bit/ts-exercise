import React from 'react';
import { ITodo } from "../App";
import Button, { ButtonColor } from "./Button";

interface ITodoProps {
    todo: ITodo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const Todo = (props: ITodoProps) => {
    const { todo, onDelete, onToggle } = props;
  return (
    <div className={"clearfix"}>
      <p
        style={{ textDecoration: todo.completed ? "line-though" : "none" }}
        onClick={() => onToggle(todo.id)}
        className={"float-start mb-3"}
      >
        {todo.text}
      </p>
      {/* <button
        className={"btn btn-outline-danger float-end"}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button> */}
      <Button
        text={"Delete"}
        onClick={() => onDelete(todo.id)}
        buttonColor={ButtonColor.RED}
      />
    </div>
  );
}

export default Todo;
