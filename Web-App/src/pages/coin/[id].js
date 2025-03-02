import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useCoinDetails } from "../../hooks/useCoinDetails";
import CoinDetails from "../../components/CoinDetails";

const CoinPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, error, isLoading } = useCoinDetails(id);

    useEffect(() => {
        console.log("✅ Next.js Router Query ID:", id); // ✅ Log to check if `id` is undefined
    }, [id]);

    return <CoinDetails data={data} error={error} isLoading={isLoading} />;
};

export default CoinPage;