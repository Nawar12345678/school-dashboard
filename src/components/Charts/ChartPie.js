import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartComponent = () => {
  const chartOptions = {
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Attend', 'Absent', 'Late'],
      colors: ['#ff6eab', '#6a93d4', '#faf86b'],
    },
    series: [70,20, 10],
    plotOptions: {
     pie: {
      donut: {
        labels: {
          show: true,
      },
    }
  },
    }

  };

  return (
    <div className="chart">
      <ReactApexChart options={chartOptions.options} 
                      series={chartOptions.series} 
                      plotOptions={chartOptions.plotOptions} 
                      type="donut" 
                      height={350} 
                      width={300} />
    </div>
  );
};

export default PieChartComponent;
