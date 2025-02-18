import { Players } from "@/app/lib/definitions";
import ReactConfetti from "react-confetti";

interface WinnerPopupProps {
  winner: Players | null;
  onReset: () => void;
}

export const WinnerPopup = ({ winner, onReset }: WinnerPopupProps) => {

  const getMessage = () => {
    if (!winner) return "Draw! 🤷‍♂️";
    if (winner === Players.X) {
      return "¡You win! 🎉";
    }
    return "¡Machine win! 🤖";
  };

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    <>
      <ReactConfetti width={windowWidth} height={windowHeight} numberOfPieces={100} tweenDuration={1000}></ReactConfetti>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-xl transform transition-all animate-fadeIn">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-4xl font-bold text-background">
              Game Over
            </div>
            <p className="text-xl text-gray-700 text-center">{getMessage()}</p>
            <div className="mt-2">
              <span
                className={`text-6xl ${
                  winner === Players.X ? "text-red-500" : "text-blue-500"
                } font-bold`}
              >
                {winner}
              </span>
            </div>
            <button
              onClick={onReset}
              className="mt-6 px-6 py-2 bg-accent text-black rounded-full
                                 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
