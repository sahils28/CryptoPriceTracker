import React from 'react';

const CurrencySelector = ({ setCurrency }) => {
    return (
        <select onChange={(e) => setCurrency(e.target.value)} className="input">
            <option value="usd">USD ($)</option>
            <option value="eur">EUR (€)</option>
            <option value="gbp">GBP (£)</option>
        </select>
    );
};

export default CurrencySelector;