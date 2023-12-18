import { useEffect, useState } from "react";
import TodoCercevesi from "./TodoCercevesi";
import { TodoType, initialTodos } from "./TodoType";
import { TodoContext } from "./useTodoContext";

function TodoKutusu() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    ///
    loadTodos();
  }, []);

  const saveTodos = (newTodos: TodoType[]) => {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    //fetch("https://mytodo.com/savetodos")
  };

  const loadTodos = () => {
    const loadedText = localStorage.getItem("todos");
    if (loadedText !== null) {
      const loadedTodos: TodoType[] = JSON.parse(loadedText);
      setTodos(loadedTodos);
    }
  };

  const addNewItemClik = (newItemTitle: string) => {
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      title: newItemTitle,
      isCompleted: false,
      isSelected: false,
    };
    const newTodos = [...todos, newTodo];

    saveTodos(newTodos);
    //setNewItemTitle("");
  };

  const swapItemCompleted = (id: string) => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
    }));

    saveTodos(newTodos);
  };

  const itemDelete = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(newTodos);
  };

  const deleteAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    saveTodos(newTodos);
  };

  const contextValue = {
    deleteAllCompleted,
    itemDelete,
    swapItemCompleted,
    kaydetDugmesineBasilinca: addNewItemClik,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      <TodoCercevesi todos={todos} />
    </TodoContext.Provider>
  );
}

export default TodoKutusu;
