// src/components/JobDetailsTable.tsx
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface JobDetail {
  title: string;
  count: number;
}

const JobDetailsTable: React.FC<{ jobDetails: JobDetail[] }> = ({ jobDetails }) => {
  const columns: ColumnsType<JobDetail> = [
    {
      title: 'Job Title',
      dataIndex: 'title',
    },
    {
      title: 'Number of Jobs',
      dataIndex: 'count',
    },
  ];

  return <Table columns={columns} dataSource={jobDetails} rowKey="title" pagination={false} />;
};

export default JobDetailsTable;
