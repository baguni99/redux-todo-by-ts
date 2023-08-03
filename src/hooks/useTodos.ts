import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useTodos() {
  const todo = useSelector((state: RootState) => state.todos);
  return todo;
}
