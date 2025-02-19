import { Board, INextMove } from "@/app/lib/definitions";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const gameService = {
    getPlayerMove: async (board: Board): Promise<INextMove> => {
        const response = await fetch(`${API_URL}/player-move`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(board),
        });
        return response.json();
    },
    getGameResults: async () => {
        const response = await fetch(`${API_URL}/game-results`, {
            method: 'GET',
        });
        return response.json();
    }
};

