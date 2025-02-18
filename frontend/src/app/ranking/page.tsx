"use client";

import { useGameResults } from "./hooks/useGameResults";

export default function RankingPage() {
  const { gameResults, error, loading } = useGameResults();
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-h-[70vh] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <table className="bg-gray-800 rounded-lg shadow-lg w-full">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Game number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Player
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Result
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {gameResults.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-white">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-white">
                  {entry.player}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-green-400">
                  {entry.result}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-green-400">
                  {entry.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
