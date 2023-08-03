//각 할 일 항목에 대한 정보를 보여주는 컴포넌트
import React from "react";
import { Todo } from "../modules/todos";
import useTodoActions from "../hooks/useTodoActions";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);
  return (
    <li className={`TodoItem ${todo.isDone ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}
export default TodoItem;
