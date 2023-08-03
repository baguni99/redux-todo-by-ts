// 1. 액션 type 선언(리덕스)
const ADD = "todo/ADD" as const;
const TOGGLE = "todo/TOGGLE" as const;
const REMOVE = "todo/REMOVE" as const;

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD,
  payload: text,
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE,
  payload: id,
});
export const removeTodo = (id: number) => ({
  type: REMOVE,
  payload: id,
});

// 3. 액션 객체들에 대한 type 준비하기 (TypeScript의 타입)
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 상태를 위한 타입 선언
export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};
type TodosState = Todo[];

// 초깃값 설정
const initialState: TodosState = [
  { id: 1, text: "타입스크립트 배우기", isDone: true },
  { id: 2, text: "타입스크립트로 리액트 투두 만들기", isDone: true },
  { id: 3, text: "타입스크립트로 리덕스 투두 만들기", isDone: false },
];

// 리듀서 구현하기
function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        isDone: false,
      });
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
