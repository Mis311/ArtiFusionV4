import {
  BookOutlined,
  EyeOutlined,
  FileAddOutlined,
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  List,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// This data will be fetched from API in a real app
const data = [
  {
    id: 1,
    title: 'Art 1',
    author: 'Author 1',
    description: 'Description 1',
    image: '/assets/img/background.png',
    tags: ['art', 'painting', 'abstract'],
    postedDate: '2023-01-01',
  },
  // ... more data
];

const ContentDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (id !== undefined) {
      const fetchedContent = data.find((item) => item.id === Number(id));
      setContent(fetchedContent);
    }
  }, [id]);

  if (!content) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{content.title}</h1>
      <Card
        hoverable
        style={{ marginBottom: '20px' }}
        cover={<img alt={content.title} src={content.image} />}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <Card.Meta
              title={content.title}
              description={content.description}
            />
          </Col>
          <Col>
            <Space size="middle">
              <Typography.Text>
                <EyeOutlined /> 123
              </Typography.Text>
              <Typography.Text>
                <BookOutlined /> 5 Bookmarks
              </Typography.Text>
              <Button type="primary" icon={<LikeOutlined />}>
                Like
              </Button>
              <Button icon={<ShareAltOutlined />}>Share</Button>
              <Button icon={<MessageOutlined />}>Comment</Button>
            </Space>
          </Col>
        </Row>
        <Row>
          <Col>
            <Space
              size="middle"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
              }}
            >
              <Typography.Text>
                <UserOutlined /> {content.author}
              </Typography.Text>

              <Space size="middle">
                <Button icon={<UserAddOutlined />}>Follow</Button>
                <Button icon={<FileAddOutlined />}>Request</Button>
              </Space>
            </Space>
          </Col>
        </Row>
        <Typography.Text style={{ display: 'block', marginTop: '20px' }}>
          Posted on: {content.postedDate}
        </Typography.Text>
        <Divider />
        <Typography.Text>Tags:</Typography.Text>
        {content.tags.map((tag, index) => (
          <Tag key={index} color="blue" style={{ marginTop: '10px' }}>
            {tag}
          </Tag>
        ))}
        <Divider />
      </Card>

      <Divider>Author's Past Works</Divider>
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{ maxHeight: '300px', overflowY: 'scroll' }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={`/content/${item.id}`}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ContentDetailPage;
