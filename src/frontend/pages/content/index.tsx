import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

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


const ContentDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchedContent = data.find((item) => item.id === Number(id));
      setContent(fetchedContent);
    }
  }, [id]);
  

  if (!content) return <div>{id ? 'Content not found' : 'Loading...'}</div>;


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        hoverable
        cover={<img alt={content.title} src={content.image} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />}
      >
        <Card.Meta title={content.title} description={content.description} />
      </Card>
    </div>
  );
};

export default ContentDetailPage;
