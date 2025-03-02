import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";

// ✅ Register required Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const Graph = ({ prices }) => {
    const data = {
        labels: prices.map((_, index) => `Day ${index + 1}`), // ✅ Label X-Axis correctly
        datasets: [{
            label: "Price Trend (Last 7 Days)",
            data: prices,
            borderColor: "#1E3A8A",
            tension: 0.4,
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        scales: {
            x: { type: "category" }, // ✅ Explicitly set X-axis scale to `category`
            y: { beginAtZero: false }
        }
    };

    return <div className="w-full h-64"><Line key={JSON.stringify(prices)} data={data} options={options} /></div>;
};

export default Graph;