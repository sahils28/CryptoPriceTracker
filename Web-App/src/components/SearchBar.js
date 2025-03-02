import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSelect }) => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const fetchCoins = async (search) => {
        if (!search) return;
        const response = await axios.get("https://api.coingecko.com/api/v3/search", {
            params: { query: search }
        });
        setSuggestions(response.data.coins);
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search any cryptocurrency..."
                className="input"
                onChange={(e) => {
                    setQuery(e.target.value);
                    fetchCoins(e.target.value);
                }}
            />
            {suggestions.length > 0 && (
                <ul className="absolute bg-white w-full shadow-lg rounded-lg">
                    {suggestions.map((coin) => (
                        <li key={coin.id} onClick={() => onSelect(coin.id)} className="p-2 hover:bg-gray-200 cursor-pointer">
                            <img src={coin.thumb} alt={coin.name} className="w-6 h-6 inline-block mr-2" />
                            {coin.name} ({coin.symbol.toUpperCase()})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default SearchBar;
