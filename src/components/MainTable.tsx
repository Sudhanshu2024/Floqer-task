// src/components/MainTable.tsx
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { salaryData } from '../data/salaries';

interface SalaryData {
  year: number;
  totalJobs: number;
  avgSalary: number;
}

const MainTable: React.FC<{ onRowClick: (year: number) => void }> = ({ onRowClick }) => {
  const columns: ColumnsType<SalaryData> = [
    {
      title: 'Year',
      dataIndex: 'year',
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: 'Number of Total Jobs',
      dataIndex: 'totalJobs',
      sorter: (a, b) => a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'avgSalary',
      sorter: (a, b) => a.avgSalary - b.avgSalary,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={salaryData}
      rowKey="year"
      onRow={(record) => ({
        onClick: () => onRowClick(record.year),
      })}
    />
  );
};

export default MainTable;
