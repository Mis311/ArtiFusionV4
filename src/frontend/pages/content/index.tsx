import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Card, Col, Row } from 'antd';

// This data will be fetched from API in a real app
const data = [
  {
    id: 1,
    title: 'Art 1',
    author: 'Author 1',
    description: 'Description 1',
    image: '/assets/img/background.png',
  },
  // ... more data
];

const ContentListPage: NextPage = () => {
  const router = useRouter();

  const viewContentDetail = (id: number) => {
    router.push(`/content/${id}`);
  };

  return (
    <div>
      <h1>Content List</h1>
      <Row gutter={16}>
        {data.map((item) => (
          <Col span={8} key={item.id}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.image} />}
              onClick={() => viewContentDetail(item.id)}
            >
              <Card.Meta title={item.title} description={item.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContentListPage;
