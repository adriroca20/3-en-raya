import { Players } from "@/app/enums/Players";

interface GameInfoProps {
  playerTurn: Players;
}

export const GameInfo = ({ playerTurn }: GameInfoProps) => {
  return (
    <div className="flex flex-col h-full justify-start items-center gap-4 relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-1 text-background">Tú</span>
            <span className="text-2xl font-bold bg-accent text-black rounded-full w-10 h-10 flex items-center justify-center">
              X
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-1 text-background">Máquina</span>
            <span className="text-2xl font-bold bg-accent text-black rounded-full w-10 h-10 flex items-center justify-center">
              O
            </span>
          </div>
        </div>
    </div>
  );
};
