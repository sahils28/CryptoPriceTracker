import React, { useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import CryptoCard from "../components/CryptoCard";
import SearchBar from "../components/SearchBar";
import RefreshButton from "../components/RefreshButton";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data: coins, isLoading, refetch } = useCryptoData(); // ✅ Using "coins"

    // ✅ Ensure "coins" exists before filtering
    const filteredData = coins?.filter(crypto => 
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="container">
            {/* ✅ Flex Container for Search and Refresh Button */}
            <h1 className="page-title">Crypto Dashboard</h1>
            <div className="search-refresh-container">
                <SearchBar coins={coins} setSearchQuery={setSearchQuery} />
                <RefreshButton onRefresh={refetch} />
            </div>

            {isLoading ? <p>Loading...</p> : (
                <div className="crypto-grid">
                    {filteredData.map(coin => <CryptoCard key={coin.id} coin={coin} />)}
                </div>
            )}
        </div>
    );
};

export default HomePage;