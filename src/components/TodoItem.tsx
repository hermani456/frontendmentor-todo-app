import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import iconCross from "../assets/icon-cross.svg";
import iconCheck from "../assets/icon-check.svg";

export default function TodoItem({
  id,
  todo,
  onToggle,
  onDelete,
  roundedTop,
}: {
  id: number;
  todo: { id: number; text: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  roundedTop?: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700 ${
        roundedTop ? "rounded-t-xl" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="relative mr-4 flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="size-5 rounded-full border border-gray-400 bg-transparent appearance-none checked:bg-gradient-to-br checked:from-blue-400 checked:to-purple-500 checked:border-transparent checked:border-0 cursor-pointer peer"
          />
          <img
            src={iconCheck}
            alt="Check"
            className="absolute inset-0 w-2.5 h-2.5 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none"
          />
        </div>
        <span
          className={`text-white ${
            todo.completed ? "line-through opacity-50" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="text-gray-400 hover:text-white"
        onClick={() => onDelete(todo.id)}
      >
        <img src={iconCross} alt="Delete Todo" className="w-5 cursor-pointer" />
      </button>
    </div>
  );
}
