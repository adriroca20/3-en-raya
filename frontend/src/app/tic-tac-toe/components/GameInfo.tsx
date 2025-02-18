import { Players } from "@/app/lib/definitions";

interface GameInfoProps {
  playerTurn: Players;
}

export const GameInfo = ({ playerTurn }: GameInfoProps) => {
  return (
    <div className="flex flex-col h-full justify-start items-center gap-4 relative">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-background mb-2">
          Game in Progress
        </h2>
        <p className="text-md text-background/80">
          Turn of: {playerTurn === Players.X ? "You" : "Machine"}
        </p>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className={`flex flex-col items-center transition-all duration-300 ${playerTurn === Players.X ? 'scale-110' : ''}`}>
          <span className="text-sm font-medium mb-1 text-background">You</span>
          <span className={`text-2xl font-bold text-black rounded-full w-10 h-10 flex items-center justify-center ${playerTurn === Players.X ? 'bg-accent' : ''}`}>
            X
          </span>
        </div>
        <div className={`flex flex-col items-center transition-all duration-300 ${playerTurn === Players.O ? 'scale-110' : ''}`}>
          <span className="text-sm font-medium mb-1 text-background">Machine</span>
          <span className={`text-2xl font-bold  text-black rounded-full w-10 h-10 flex items-center justify-center ${playerTurn === Players.O ? 'bg-accent' : ''}`}>
            O
          </span>
        </div>
      </div>
    </div>
  );
};
