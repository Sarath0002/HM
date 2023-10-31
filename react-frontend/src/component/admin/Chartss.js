import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function Chartss() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  let da = ["21-09-23", "22-09-2023", "23-09-23", "24-09-2023"];
  useEffect(() => {
    const data = {
      labels: da,
      datasets: [
        {
          label: "Hours",
          data: [10, 8, 5, 4, 3],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
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

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
