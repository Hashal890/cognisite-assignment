import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResultsChart = ({ result }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const data = {
    labels: ["Total Feet", "Days per Person", "Persons Needed"],
    datasets: [
      {
        label: "Construction Metrics",
        data: [result.totalFeet, result.daysPerPerson, result.personsNeeded],
        backgroundColor: ["rgba(75, 192, 192, 0.6)"],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box maxW={"800px"} m={"auto"} mt={12} p={8}>
      <Bar data={data} options={options} ref={chartRef} />
    </Box>
  );
};

export default ResultsChart;
