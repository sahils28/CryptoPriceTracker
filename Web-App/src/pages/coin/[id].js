import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useCoinDetails } from "../../hooks/useCoinDetails";
import CoinDetails from "../../components/CoinDetails";

const CoinPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, error, isLoading } = useCoinDetails(id);

    useEffect(() => {
        console.log("✅ Next.js Router Query ID:", id); // ✅ Log to check if `id` is being captured
    }, [id]);

    // 🛠 Prevent rendering until `id` is available
    if (!id) {
        return <p className="loading-text">Loading coin details...</p>;
    }

    return <CoinDetails data={data} error={error} isLoading={isLoading} />;
};

export default CoinPage;