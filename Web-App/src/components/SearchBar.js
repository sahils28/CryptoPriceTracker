import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = ({ coins }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    // Filter coins based on search input
    const filteredCoins = coins?.filter(coin =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search any cryptocurrency..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />

            {/* Show suggestions when there is a search input */}
            {searchQuery && (
                <div className="search-dropdown">
                    {filteredCoins.map((coin) => (
                        <button 
                            key={coin.id} 
                            className="search-suggestion" 
                            onClick={() => router.push(`/coin/${coin.id}`)}
                        >
                            <img src={coin.image} alt={coin.name} className="coin-icon" />
                            {coin.name} ({coin.symbol.toUpperCase()})
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;