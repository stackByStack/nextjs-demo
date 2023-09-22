import React from 'react';
import { Card, Row, Col } from 'antd';

interface DashboardData {
  title: string;
  value: string | number;
}

const Dashboard: React.FC = () => {
  const data: DashboardData[] = [
    { title: 'Total Users', value: 100 },
    { title: 'Revenue', value: '$10,000' },
    { title: 'Orders', value: 50 },
    { title: 'Products', value: 200 },
  ];
  // throw new Error('Error');

  return (
    <div className='flex flex-col items-center justify-between p-24 mb-32'>
      <h1>Dashboard</h1>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col span={6} key={index}>
            <Card title={item.title}>{item.value}</Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;