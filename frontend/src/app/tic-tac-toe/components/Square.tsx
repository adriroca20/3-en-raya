export default function Square({
  value,
  onSquareClick,
}: {
  value: string | null;
  onSquareClick: () => void;
}) {
  return (
    <button
      className={`w-20 h-20 border-2 border-gray-300 rounded-lg text-4xl font-bold bg-white hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black ${
        value === "X" ? "text-black" : "text-black"
      }`}
      onClick={onSquareClick}
    >
      <span className={value === "X" ? "text-red-500" : "text-blue-500"}>
        {value}
      </span>
    </button>
  );
}
