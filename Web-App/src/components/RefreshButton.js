import React from 'react';

const RefreshButton = ({ refetch }) => {
    return (
        <button className="button" onClick={refetch}>
            🔄 Refresh Prices
        </button>
    );
};

export default RefreshButton;