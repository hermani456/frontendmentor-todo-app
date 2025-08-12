export default function TodoInput({
  value,
  onChange,
  onAdd,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}) {
  return (
    <div className="relative bg-gray-800 rounded-lg mb-4">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 rounded-full border border-gray-400"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        className="w-full pl-12 py-4 rounded-lg text-white bg-transparent"
      />
    </div>
  );
}
