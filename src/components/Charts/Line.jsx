import React from 'react';
import { Chart as ChartJS,CategoryScale,LinearScale, PointElement, LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 
const LineChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data=  [5000, 9000, 9000, 28000, 2000, 12000, 22000, 12000, 20000, 13000, 24000, 18000];
   return (
     <Line
     data={{
         labels:months,
         datasets: [
          {
            label: 'Total Earnings',
            data:data,
            borderColor: '#2310EC',
            backgroundColor: '#fff',
            tension: 0.1,
            borderWidth:1,
          }, 
        ],
      }}
     options={{
       responsive: true,
       plugins: {
        legend: {
          display: false,
        },
      },
     scales: {
       x: {
        grid: {
          display: false,
        },
      },
      y: {
       grid: {
        display: true,
      },
      ticks: {
        callback: function (value, index, values) {
          return value / 1000 + 'k';
        },
      },
    },
  },
}}
/>
   )
 }
export default LineChart
 