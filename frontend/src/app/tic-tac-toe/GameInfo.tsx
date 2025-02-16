export const GameInfo = ({
  playerTurn,
}: {
  playerTurn: string;
}) => {
  return (
    <div className="flex flex-col h-full justify-start items-center gap-4 relative">
      <span className="text-4xl font-bold bg-accent text-black rounded-full w-14 h-14 flex items-center justify-center">
        {playerTurn}
      </span>
    </div>
  );
};
