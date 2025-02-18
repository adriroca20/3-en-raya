"use client";

import Link from "next/link";
import { useGameResults } from "./hooks/useGameResults";

export default function RankingPage() {
  const { gameResults, error, loading } = useGameResults();
  console.log(loading);
  console.log(gameResults);
  if (loading || gameResults.length === 0)
    return (
      <div className="h-[70vh] container mx-auto px-4 py-8 flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="w-16 h-16 border-4 border-t-transparent border-background rounded-full animate-spin" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-4 justify-center items-center">
      <div className="max-h-[70vh] w-full rounded-lg overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <table className="bg-white rounded-lg shadow-lg w-full">
          <thead className="sticky top-0 z-10">
            <tr className="bg-accent">
              <th className="px-6 py-3 text-center text-xs font-medium text-background uppercase tracking-wider">
                Game number
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-background uppercase tracking-wider">
                Winner
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-background uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {gameResults.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="px-6 py-4 whitespace-nowrap text-background text-center">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-background text-center">
                  {entry.winner}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-background text-center">
                  {entry.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        href="/tic-tac-toe"
        className={`text-background hover:scale-105 transition-all bg-accent px-5 py-2 text-center text-2xl rounded-lg`}
      >
        Jugar
      </Link>
    </div>
  );
}
