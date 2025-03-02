import React from "react";
import Link from "next/link";

const CryptoCard = ({ coin }) => {
    return (
        <Link href={`/coin/${coin.id}`}>
            <div className="card flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer">
                <img src={coin.image} alt={coin.name} className="w-14 h-14 mb-4" />
                <h2 className="text-lg font-semibold">{coin.name} ({coin.symbol.toUpperCase()})</h2>
                <p className="text-xl font-bold">${coin.current_price.toLocaleString()}</p>
                <p className={`text-md ${coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>24h: {coin.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
        </Link>
    );
};

export default CryptoCard;