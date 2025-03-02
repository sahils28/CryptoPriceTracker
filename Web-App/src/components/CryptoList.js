import React from 'react';

const CryptoList = ({ data }) => {
    return (
        <div className="grid grid-cols-1 gap-4 mt-4">
            {data.map((crypto) => (
                <div key={crypto.id} className="list-item flex justify-between p-4 rounded-lg shadow-md">
                    <img src={`/images/${crypto.id}.png`} alt={crypto.name} className="w-8 h-8" />
                    <span className="font-semibold">{crypto.name}</span>
                    <span className="text-green-500 font-bold">${crypto.current_price.toLocaleString()}</span>
                </div>
            ))}
        </div>
    );
};

export default CryptoList;