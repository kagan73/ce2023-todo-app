import { createContext, useContext } from "react";

export const TodoContext = createContext({});

function useTodoContext(): any {
  return useContext(TodoContext);
}

export default useTodoContext;
