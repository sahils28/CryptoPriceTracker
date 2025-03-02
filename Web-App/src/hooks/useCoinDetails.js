import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCoinDetails = async ({ queryKey }) => {
    const [, id] = queryKey; // Extract coin ID
    if (!id) throw new Error("No coin ID provided!"); //Prevents unnecessary API calls

    try {
        console.log(`Fetching details for coin: ${id}`); //Log ID before API call
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        console.log("API Response:", response.data); //Log full API response
        return response.data;
    } catch (error) {
        console.error("❌ API Fetch Error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || "Failed to fetch coin details.");
    }
};

export const useCoinDetails = (id) => {
    return useQuery({
        queryKey: ["coinDetails", id],
        queryFn: fetchCoinDetails,
        enabled: !!id, //Ensures query only runs when `id` is available
        retry: 1, //Only retry once to prevent excessive requests
        staleTime: 60000, //Cache results for 1 minute
    });
};