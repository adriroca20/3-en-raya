import { useState } from "react";

import { gameService } from "@/app/lib/gameService";
import { useEffect } from "react";
import { IGameResult } from "@/app/lib/definitions";

export const useGameResults = () => {
    const [gameResults, setGameResults] = useState<IGameResult[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        getGameResults();
    }, []);
    const getGameResults = async () => {
        try {
            setLoading(true);
            const results = await gameService.getGameResults();
            const formattedResults = results.map((result: IGameResult) => ({
                ...result,
                date: formatDate(result.date)
            }));
            setGameResults(formattedResults);
        } catch (error) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    }
    const formatDate = (date: string) => {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString();
    }
    return { gameResults, error, loading, formatDate };
}
