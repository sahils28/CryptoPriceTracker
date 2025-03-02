import React from "react";
import Graph from "./Graph";
import { useCoinHistory } from "../hooks/useCoinHistory"; // ✅ Import new hook

const CoinDetails = ({ data, error, isLoading }) => {
    const { data: historyData, isLoading: isHistoryLoading } = useCoinHistory(data?.id); // ✅ Fetch historical data

    if (isLoading) return <p className="text-center mt-5">Loading coin details...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

    if (!data || !data.market_data) {
        return <p className="text-center mt-5 text-gray-500">No data available for this coin.</p>;
    }

    return (
        <div className="container max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            <div className="flex items-center space-x-4">
                <img src={data.image.large} alt={data.name} className="w-20 h-20" />
                <h1 className="text-3xl font-bold">{data.name} ({data.symbol.toUpperCase()})</h1>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">Current Price</p>
                    <p className="text-xl font-bold">${data.market_data.current_price.usd.toLocaleString()}</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">Market Cap</p>
                    <p className="text-xl">${data.market_data.market_cap.usd.toLocaleString()}</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">24h Volume</p>
                    <p className="text-xl">${data.market_data.total_volume.usd.toLocaleString()}</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">24h Price Change</p>
                    <p className={`text-xl ${data.market_data.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
                        {data.market_data.price_change_percentage_24h.toFixed(2)}%
                    </p>
                </div>
            </div>

            {/* ✅ Show Graph with Updated Price History Data */}
            {isHistoryLoading ? (
                <p className="text-center text-gray-500">Loading price trend...</p>
            ) : historyData ? (
                <Graph prices={historyData} />
            ) : (
                <p className="text-center text-gray-500">No price trend data available</p>
            )}
        </div>
    );
};

export default CoinDetails;