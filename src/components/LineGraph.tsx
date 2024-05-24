// src/components/LineGraph.tsx
import React from 'react';
import { Line } from '@ant-design/charts';
import { salaryData } from '../data/salaries'; // Import salaryData

const LineGraph: React.FC = () => {
  const data = salaryData.map(item => ({
    year: item.year,
    totalJobs: item.totalJobs,
  }));

  const config = {
    data,
    xField: 'year',
    yField: 'totalJobs',
    smooth: true,
    lineStyle: {
      stroke: '#5B8FF9',
    },
  };

  return <Line {...config} />;
};

export default LineGraph;
