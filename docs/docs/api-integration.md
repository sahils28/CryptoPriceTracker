# API Integration in Crypto Price Tracker

##  Overview
This project integrates with the **CoinGecko API** to fetch real-time cryptocurrency prices. The API provides market data for various cryptocurrencies, including their **current price, market cap, volume, and 24-hour price change**.

We use **React Query** to efficiently fetch, cache, and update data asynchronously while providing loading and error states.

---

##  API Used: **CoinGecko**
The API endpoint used to fetch cryptocurrency data:

- **Base URL:** `https://api.coingecko.com/api/v3/`
- **Endpoints Used:**
  - `/coins/markets` - Fetches the latest prices for multiple cryptocurrencies.
  - `/coins/{id}` - Fetches detailed data for a single cryptocurrency.
  - `/coins/{id}/market_chart` - Fetches historical price data for a cryptocurrency.

---

##  Fetching Cryptocurrency Data
We use a custom React Hook `useCryptoData.js` to fetch the latest cryptocurrency data.

###  **Code Implementation**
```js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch cryptocurrency data
const fetchCryptoData = async ({ queryKey }) => {
    const [, currency] = queryKey;
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: {
                vs_currency: currency || "usd",
                per_page: 10,
                page: 1
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch cryptocurrency data.");
    }
};

// Custom Hook using React Query
export const useCryptoData = (currency = "usd") => {
    return useQuery({
        queryKey: ["cryptoData", currency], 
        queryFn: fetchCryptoData,
        staleTime: 60000,  // Cache data for 1 minute
        retry: 2,  // Retry twice on failure
    });
};
```

### 📌 **Error Handling in useCryptoData**
-  **Try/Catch Block**: Prevents app crashes when fetching fails.
-  **Retries (2 times)**: If the request fails, React Query retries automatically.
-  **Throws Error Message**: Displays a clear message to the user.

---

##  Fetching Details for a Single Cryptocurrency
To fetch details for an individual cryptocurrency, we use another custom React Hook `useCoinDetails.js`.

###  **Code Implementation**
```js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCoinDetails = async ({ queryKey }) => {
    const [, id] = queryKey;
    if (!id) throw new Error("No coin ID provided!");

    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch coin details.");
    }
};

export const useCoinDetails = (id) => {
    return useQuery({
        queryKey: ["coinDetails", id],
        queryFn: fetchCoinDetails,
        enabled: !!id,
        retry: 1,
        staleTime: 60000,
    });
};
```

###  **Error Handling in useCoinDetails**
-  **Prevents Calls if ID is Missing**: Ensures no unnecessary API calls.
-  **Error Messages for Failed Fetches**: Alerts users if coin details can't be loaded.

---

##  Fetching Historical Price Data
The historical price data is fetched using `useCoinHistory.js`, which provides data to the **Graph component**.

###  **Code Implementation**
```js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCoinHistory = async ({ queryKey }) => {
    const [, id] = queryKey;
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
            params: { vs_currency: "usd", days: 7 }
        });
        return response.data.prices.map(price => price[1]);
    } catch (error) {
        throw new Error("Failed to fetch historical price data.");
    }
};

export const useCoinHistory = (id) => {
    return useQuery({
        queryKey: ["coinHistory", id],
        queryFn: fetchCoinHistory,
        enabled: !!id,
    });
};
```

###  **Error Handling in useCoinHistory**
-  **Handles API failures gracefully**.
-  **Ensures valid data before updating the Graph component**.

---

## Global Error Handling in Components
Every component using API data should check for errors before rendering:

```js
if (isLoading) return <p className="loading-text">Loading data...</p>;
if (error) return <p className="error-text">Error: {error.message}</p>;
```

Example error messages displayed to users:
- `"Error: Failed to fetch cryptocurrency data."`
- `"Error: Failed to fetch coin details."`
- `"Error: Failed to fetch historical price data."`

---

##  Manual Refresh Button
The **Refresh Button** allows users to manually fetch updated prices.

###  **Code Implementation**
```js
import React from 'react';

const RefreshButton = ({ refetch }) => {
    return (
        <button className="button" onClick={refetch}>
            🔄 Refresh Prices
        </button>
    );
};

export default RefreshButton;
```

### **How It Works**
- The `refetch` function is provided by React Query.
- Clicking the button **forces a fresh API call**, bypassing the cache.

---

## Conclusion
- The CoinGecko API provides **real-time** and **historical** crypto data.
- **React Query** simplifies fetching, caching, and updating API data.
- The project ensures **error handling, loading states, and caching** for better performance.
- The **manual refresh button** allows users to fetch updated prices.
