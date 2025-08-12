export default function TodoFilter({
  left,
  filter,
  setFilter,
  clearCompleted,
}: {
  left: number;
  filter: string;
  setFilter: (f: string) => void;
  clearCompleted: () => void;
}) {
  return (
    <div className="flex items-center justify-center md:justify-between text-gray-400 bg-gray-800 p-4 rounded-b-xl">
      <div className="hidden md:block">
        {left} item{left !== 1 ? "s" : ""} left
      </div>
      <div className="space-x-4">
        <button
          className={`cursor-pointer ${
            filter === "all"
              ? "text-blue-400"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`cursor-pointer ${
            filter === "active"
              ? "text-blue-400"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`cursor-pointer ${
            filter === "completed"
              ? "text-blue-400"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <div className="hidden md:block">
        <button
          className="text-gray-400 hover:text-white cursor-pointer"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}
