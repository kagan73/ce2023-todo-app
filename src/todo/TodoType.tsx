export interface TodoType {
  id: string;
  title: string;
  isCompleted: boolean;
  isSelected: boolean;
}

export const initialTodos: TodoType[] = [
  { id: "1", title: "alışveriş yap", isCompleted: true, isSelected: false },
  { id: "2", title: "ders çalış", isCompleted: false, isSelected: false },
];
