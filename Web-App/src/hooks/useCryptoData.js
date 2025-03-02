import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCryptoData = async ({ queryKey }) => {
    const [, currency] = queryKey; // Extract currency from queryKey array
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
            vs_currency: currency || "usd",
            per_page: 10,
            page: 1
        }
    });
    return response.data;
};

export const useCryptoData = (currency = "usd") => {
    return useQuery({
        queryKey: ["cryptoData", currency], 
        queryFn: fetchCryptoData,
        staleTime: 60000,
    });
};