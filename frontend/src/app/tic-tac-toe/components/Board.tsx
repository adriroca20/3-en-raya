import Square from './Square'

interface BoardProps {
  squares: (string | null)[]
  onPlay: (index: number) => void
}
export default function Board({ squares, onPlay }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2 w-fit">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onSquareClick={() => onPlay(index)}
        />
      ))}
    </div>
  )
} 