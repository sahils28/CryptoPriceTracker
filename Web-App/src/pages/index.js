import React, { useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import CryptoCard from "../components/CrytoCard";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data, isLoading } = useCryptoData();

    const filteredData = data?.filter(crypto => 
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="container">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">Crypto Dashboard</h1>
                <ThemeToggle />
            </div>
            <SearchBar setSearchQuery={setSearchQuery} />
            {isLoading ? <p>Loading...</p> : <div className="grid grid-cols-2 gap-4">{filteredData.map(coin => <CryptoCard key={coin.id} coin={coin} />)}</div>}
        </div>
    );
};

export default HomePage;
