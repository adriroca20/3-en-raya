export const GameInfo = ({
  currentMove,
  playerTurn,
}: {
  currentMove: number;
  playerTurn: string;
}) => {
  return (
    <div className="flex flex-col h-full justify-start items-center gap-4">
      <h2 className="text-2xl font-bold text-white">Game Info</h2>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white">Current Move</h3>
        <p className="text-sm text-white">{currentMove}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white">Player Turn</h3>
        <p className="text-sm text-white">{playerTurn}</p>
      </div>
    </div>
  );
};

