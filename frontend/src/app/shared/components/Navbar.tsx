"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white fixed top-0 md:top-5 left-1/2 -translate-x-1/2 z-50 w-full md:w-1/3 p-4 rounded">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-background font-bold text-xl">Tic Tac Toe</div>
        <div className="space-x-4">
          <Link 
            href="/tic-tac-toe" 
            className={`text-background hover:text-gray-300 ${pathname === '/tic-tac-toe' ? 'font-bold' : ''}`}
          >
            Jugar
          </Link>
          <Link 
            href="/ranking" 
            className={`text-background hover:text-gray-300 ${pathname === '/ranking' ? 'font-bold' : ''}`}
          >
            Ranking
          </Link>
        </div>
      </div>
    </nav>
  );
};
