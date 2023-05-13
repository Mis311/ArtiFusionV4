import { Avatar, Breadcrumb, Card, Col, Row } from 'antd';
import { NextPage } from 'next';
import React from 'react';

const { Meta } = Card;
function generateRandomData(number) {
    const artworks = [];
    for (let i = 0; i < number; i++) {
      artworks.push({
        title: `Artwork ${i + 1}`,
        author: `Author ${i + 1}`,
        image: `/assets/img/artwork${i + 1}.png`,
        description: `This is a description of Artwork ${i + 1}`,
      });
    }
    return artworks;
  }
const userData = {
  username: 'JohnDoe123',
  avatar: '/assets/img/avatar.png',
  bio: 'I love creating AI-generated art!',
  artworks: generateRandomData(10), // Use your generateRandomData function
};



const Profile: NextPage = () => {
  const customColStyle: React.CSSProperties = {
    paddingRight: '1%',
    paddingLeft: '1%',
  };

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
      <div style={{ padding: 24, minHeight: 500 }}>
        {/* User Info */}
        <Row justify="center">
          <Col span={24}>
            <Card style={{ height: 150, width: '100%' }}>
              <Meta
                avatar={<Avatar src={userData.avatar} size={64} />}
                title={userData.username}
                description={userData.bio}
              />
            </Card>
          </Col>
        </Row>
        {/* User Artworks */}
        <Row style={{ paddingTop: 50 }}>My Artworks</Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ paddingTop: 20 }}
        >
          {userData.artworks.map((item, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={index}
              style={customColStyle}
            >
              <Card
                hoverable
                cover={
                  <img alt="example" src={item.image} style={{ height: 300 }} />
                }
              >
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Profile;
