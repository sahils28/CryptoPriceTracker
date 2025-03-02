import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCoinHistory = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
        params: { vs_currency: "usd", days: 7 }
    });
    return response.data.prices.map(price => price[1]); // Extracts price values
};

export const useCoinHistory = (id) => {
    return useQuery({
        queryKey: ["coinHistory", id],
        queryFn: fetchCoinHistory,
        enabled: !!id,
    });
};