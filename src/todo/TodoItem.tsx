import { Button, ListGroup } from "react-bootstrap";
import useTodoContext from "./useTodoContext";

function TodoItem({ todo }: any) {
  const { swapItemCompleted, itemDelete } = useTodoContext();

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div onClick={() => swapItemCompleted(todo.id)}>
        {todo.isCompleted ? (
          <div role="button" className="text-success">
            <del>
              <i>{todo.title}</i>
            </del>
          </div>
        ) : (
          <div role="button" className="">
            {todo.title}
          </div>
        )}
      </div>
      <Button variant="danger" onClick={() => itemDelete(todo.id)}>
        Sil
      </Button>
    </ListGroup.Item>
  );
}
export default TodoItem;
