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
        <div className="search-container">
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
                <ul className="suggestions">
                    {suggestions.map((coin) => (
                        <li key={coin.id} onClick={() => onSelect(coin.id)} className="suggestion-item">
                            <img src={coin.thumb} alt={coin.name} className="icon" />
                            {coin.name} ({coin.symbol.toUpperCase()})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default SearchBar;