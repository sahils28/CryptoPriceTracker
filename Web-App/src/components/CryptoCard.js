import React from "react";
import Link from "next/link";

const CryptoCard = ({ coin }) => {
    return (
        <Link href={`/coin/${coin.id}`}>
            <div className="card">
                <img src={coin.image} alt={coin.name} className="crypto-image" />
                <h2 className="coin-name">{coin.name} ({coin.symbol.toUpperCase()})</h2>
                <p className="crypto-price">${coin.current_price.toLocaleString()}</p>
                <p className={coin.price_change_percentage_24h > 0 ? "text-green" : "text-red"}>
                    24h: {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
            </div>
        </Link>
    );
};

export default CryptoCard;