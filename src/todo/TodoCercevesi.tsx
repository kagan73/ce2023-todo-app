import TodoList from "./TodoList";
import TodoNewItem from "./TodoNewItem";
import useTodoContext from "./useTodoContext";

function TodoCercevesi({ todos }: any) {
  const { deleteAllCompleted } = useTodoContext();

  return (
    <div>
      <TodoNewItem />
      <TodoList todos={todos} />

      <div
        className="mt-2 text-danger"
        role="button"
        onClick={deleteAllCompleted}
      >
        Tamamlanan görevleri sil
      </div>
    </div>
  );
}

export default TodoCercevesi;
