import React, { useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import CryptoCard from "../components/CryptoCard"; // ✅ Fixed typo in import
import SearchBar from "../components/SearchBar";
import RefreshButton from "../components/RefreshButton"; // ✅ Added Refresh Button

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data, isLoading, refetch } = useCryptoData(); // ✅ Added `refetch` for Refresh Button

    const filteredData = data?.filter(crypto => 
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="container">
            <h1 className="title">Crypto Dashboard</h1> {/* ✅ Removed Flex Box and ThemeToggle */}

            {/* 🔹 Added Better Layout for Search & Refresh */}
            <div className="button-container">
                <SearchBar setSearchQuery={setSearchQuery} />
                <RefreshButton refetch={refetch} /> {/* ✅ Added Refresh Button */}
            </div>

            {isLoading ? <p>Loading...</p> : 
                <div className="crypto-grid">
                    {filteredData.map(coin => <CryptoCard key={coin.id} coin={coin} />)}
                </div>
            }
        </div>
    );
};

export default HomePage;