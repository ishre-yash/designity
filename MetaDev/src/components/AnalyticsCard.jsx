import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      borderDash: [5, 15],
      borderColor: "rgb(255,99,132)",
    },
    y: {
      display: false,
    },
  },
};

const labels = ["28 May", "Today", "5 July"];

export const data = {
  labels,
  datasets: [
    {
      data: [0, 0.1, 1],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      lineTension: 0.6,
    },
  ],
};

const AnalyticsCard = () => {
  return (
    <div className="w-[350px] mt-5 h-[200px] bg-primary-gray bg-white px-[1rem] py-[0.5rem] rounded-lg flex flex-col justify-start border-x border-y border-transparent hover:border-gray-300 transition-all">
      <p className="font-inter text-lg mb-6 font-semibold ">My Referrals</p>
      <div className="flex h-[120px] justify-between">
        <Line options={options} data={data} />
      </div>
      {/* <div>
        </div> */}
    </div>
  );
};

export default AnalyticsCard;
