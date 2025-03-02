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
            legend: {
                labels: {
                    color: "#ffffff", // ✅ White color for legend text
                },
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)", // ✅ Dark background for contrast
                titleColor: "#ffffff", // ✅ White title
                bodyColor: "#ffffff", // ✅ White body text
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#ffffff", // ✅ White text for X-axis labels
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", // ✅ Light grid lines
                },
            },
            y: {
                ticks: {
                    color: "#ffffff", // ✅ White text for Y-axis labels
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", // ✅ Light grid lines
                },
            },
        },
    };

    return <div className="w-full h-64"><Line key={JSON.stringify(prices)} data={data} options={options} /></div>;
};

export default Graph;