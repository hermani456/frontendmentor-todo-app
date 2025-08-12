import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onToggle,
  onDelete,
}: {
  todos: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="mt-8">
      {todos.map((todo, idx) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          roundedTop={idx === 0}
        />
      ))}
    </div>
  );
}
