import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import useTodoContext from "./useTodoContext";

function TodoNewItem() {
  const [newItemTitle, setNewItemTitle] = useState("");
  const { kaydetDugmesineBasilinca } = useTodoContext();
  return (
    <div className="bg-info p-2">
      <h1>Yeni görev ekle</h1>
      <Form>
        <Form.Label>görev tanımı</Form.Label>
        <InputGroup>
          <Form.Control
            value={newItemTitle}
            onChange={(e) => setNewItemTitle(e.currentTarget.value)}
          ></Form.Control>
          <Button
            variant="success"
            onClick={() => kaydetDugmesineBasilinca(newItemTitle)}
          >
            Kaydet
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default TodoNewItem;
