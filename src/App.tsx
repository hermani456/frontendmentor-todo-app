import { useState } from "react";
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false },
    ]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // dnd-kit: handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = todos.findIndex((todo) => todo.id === active.id);
      const newIndex = todos.findIndex((todo) => todo.id === over?.id);
      setTodos((todos) => arrayMove(todos, oldIndex, newIndex));
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${darkMode ? "dark" : ""}`}>
      {/* bg image */}
      <div
        className={`fixed top-0 left-0 w-full h-[300px] bg-cover bg-center bg-no-repeat ${
          darkMode
            ? "bg-[url('./assets/bg-desktop-dark.jpg')]"
            : "bg-[url('./assets/bg-desktop-light.jpg')]"
        }`}
      />
      <div className="relative max-w-xl w-full mx-auto p-8 pt-16">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TodoInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onAdd={addTodo}
        />
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={todos.map((todo) => todo.id)} strategy={verticalListSortingStrategy}>
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </SortableContext>
        </DndContext>
        <TodoFilter
          left={todos.filter((t) => !t.completed).length}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
