import React from "react";
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

function TodoList() {
  const todos: Todo[] = useTodos(); //TODO:커스텀 hook 사용하여 조회

  if (todos.length === 0) return <p>등록된 할 일이 없습니다.</p>;
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
export default TodoList;
