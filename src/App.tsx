// src/App.tsx
import React, { useState } from 'react';
import { Layout } from 'antd';
import MainTable from './components/MainTable';
import LineGraph from './components/LineGraph';
import JobDetailsTable from './components/JobDetailsTable';
import { salaryData } from './data/salaries';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleRowClick = (year: number) => {
    setSelectedYear(year);
  };

  const jobDetails = selectedYear
    ? salaryData.find(data => data.year === selectedYear)?.jobDetails || []
    : [];

  return (
    <Layout>
      <Header style={{ color: 'white', fontSize: '20px' }}>ML Engineer Salaries Dashboard</Header>
      <Content style={{ padding: '20px' }}>
        <MainTable onRowClick={handleRowClick} />
        <LineGraph />
        {selectedYear && <JobDetailsTable jobDetails={jobDetails} />}
      </Content>
    </Layout>
  );
};

export default App;
