import { Breadcrumb, Card, Carousel, Col, Image, Row, theme } from 'antd';
import { NextPage } from 'next';
import React, { useState } from 'react';
// import Image from 'next/image'
import Background from '../public/assets/img/background.png';

const Home: NextPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const contentStyle: React.CSSProperties = {
    color: '#fff',
    maxHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
      <div
        style={{ padding: 24, minHeight: 500, background: colorBgContainer }}
      >
        <Image.PreviewGroup>
          <Carousel effect="fade" autoplay>
            <div>
              <div style={contentStyle}>
                <img
                  alt="Welcome"
                  src={Background.src}
                  width={'100%'}
                  height={500}
                />
              </div>
              <div
                style={{
                  zIndex: 10,
                  color: 'white',
                  paddingBottom: 50,
                  paddingLeft: 50,
                  fontSize: 30,
                }}
              >
                <div>
                  <span style={{ fontSize: 20 }}>WELCOME TO </span>
                  <span style={{ color: 'red' }}>A</span>RT
                  <span style={{ color: 'red' }}>I</span>FUSION
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <img
                  alt="Welcome"
                  src={Background.src}
                  width={'100%'}
                  height={500}
                />
              </div>
              <div
                style={{
                  zIndex: 10,
                  color: 'white',
                  paddingBottom: 50,
                  paddingRight: 50,
                  fontSize: 30,
                  textAlign: 'right',
                }}
              >
                <div>
                  <span style={{ fontSize: 20 }}>THE MOST POWERFUL </span>
                  <span style={{ color: 'red' }}>AI</span>
                  <span style={{ fontSize: 20 }}> ART GENERATOR </span>
                </div>
              </div>
            </div>
          </Carousel>
        </Image.PreviewGroup>
        <Row style={{ paddingTop: 50 }}>The most popular AI arts here</Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ paddingTop: 20 }}
        >
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Background.src} />}
            >
              On my side it really works well.
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Background.src} />}
            >
              We will modify something.
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Background.src} />}
            ></Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Background.src} />}
            ></Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Background.src} />}
            ></Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Background.src} />}
            ></Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
