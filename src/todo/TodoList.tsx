import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";

function TodoList({ todos }: any) {
  return (
    <div className="p-2">
      <h1>Görev Listesi</h1>
      <ListGroup>
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
