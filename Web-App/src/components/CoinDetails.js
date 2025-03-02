import React from "react";
import Graph from "./Graph";
import { useCoinHistory } from "../hooks/useCoinHistory";

const CoinDetails = ({ data, error, isLoading }) => {
    const { data: historyData, isLoading: isHistoryLoading } = useCoinHistory(data?.id);

    if (isLoading) return <p className="loading-text">Loading coin details...</p>;
    if (error) return <p className="error-text">Error: {error.message}</p>;

    if (!data || !data.market_data) {
        return <p className="loading-text">No data available for this coin.</p>;
    }

    return (
        <div className="coin-page">
            <div className="coin-header">
                <img src={data.image.large} alt={data.name} className="coin-logo" />
                <h1 className="coin-name-idpage">{data.name} ({data.symbol.toUpperCase()})</h1>
            </div>

            <div className="coin-details">
                <div className="info-box">
                    <p className="info-title">Current Price</p>
                    <p className="info-value">${data.market_data.current_price.usd.toLocaleString()}</p>
                </div>
                <div className="info-box">
                    <p className="info-title">Market Cap</p>
                    <p className="info-value">${data.market_data.market_cap.usd.toLocaleString()}</p>
                </div>
                <div className="info-box">
                    <p className="info-title">24h Volume</p>
                    <p className="info-value">${data.market_data.total_volume.usd.toLocaleString()}</p>
                </div>
                <div className="info-box">
                    <p className="info-title">24h Price Change</p>
                    <p className={`info-value ${data.market_data.price_change_percentage_24h > 0 ? "positive" : "negative"}`}>
                        {data.market_data.price_change_percentage_24h.toFixed(2)}%
                    </p>
                </div>
            </div>

            <div className="chart-container">
                {isHistoryLoading ? (
                    <p className="loading-text">Loading price trend...</p>
                ) : historyData ? (
                    <Graph prices={historyData} />
                ) : (
                    <p className="loading-text">No price trend data available</p>
                )}
            </div>
        </div>
    );
};

export default CoinDetails;