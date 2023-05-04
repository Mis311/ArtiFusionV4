import { Breadcrumb, Card, Col, Row, theme } from 'antd';
import { NextPage } from 'next';
import React, { useRef, useState } from 'react';

// import Image from 'next/image'
// import { generateRandomData } from './dummyData';

const generateRandomData = (numCards) => {
  const data = [];

  for (let i = 0; i < numCards; i++) {
    data.push({
      title: `Title ${i + 1}`,
      author: `Author ${i + 1}`,
      description: `Description ${i + 1}`,
      image: '/assets/img/background.png',
    });
  }

  return data;
};

const Home: NextPage = () => {
  const recommendedData = generateRandomData(6);
  const newContentData = generateRandomData(5);
  const musicData = generateRandomData(6);
  const rankingData = generateRandomData(10);
  const contestData = generateRandomData(4);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollContent = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 200;
    const currentScrollPosition = scrollContainerRef.current.scrollLeft;

    if (direction === 'left') {
      scrollContainerRef.current.scrollTo({
        left: currentScrollPosition - scrollAmount,
        behavior: 'smooth',
      });
      setScrollPosition(currentScrollPosition - scrollAmount);
    } else {
      scrollContainerRef.current.scrollTo({
        left: currentScrollPosition + scrollAmount,
        behavior: 'smooth',
      });
      setScrollPosition(currentScrollPosition + scrollAmount);
    }
  };

  const contentStyle: React.CSSProperties = {
    color: '#fff',
    maxHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
  };
  const customColStyle: React.CSSProperties = {
    width: '20%',
    paddingRight: '1%',
    paddingLeft: '1%',
  };

  const scrollableStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
  };
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
      <div
        style={{ padding: 24, minHeight: 500, background: colorBgContainer }}
      >
        {/* Recommended for You */}
        <Row>Recommended for You</Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ paddingTop: 20 }}
        >
          {recommendedData.map((item, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              key={index}
              style={customColStyle}
            >
              <Card
                hoverable
                cover={<img alt="example" src={item.image} />}
                style={{ height: 400 }}
              >
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Ranking Content */}
        <Row style={{ paddingTop: 50 }}>Ranking</Row>
        <Row style={{ paddingTop: 20, position: 'relative' }}>
          <button
            onClick={() => scrollContent('left')}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              zIndex: 10,
              display: scrollPosition > 0 ? 'block' : 'none',
            }}
          >
            {'<'}
          </button>
          <div
            ref={scrollContainerRef}
            style={{ ...scrollableStyle, paddingLeft: 24, paddingRight: 24 }}
            className="scrollable"
          >
            {rankingData.map((item, index) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={4}
                key={index}
                style={{ marginRight: 16 }}
              >
                <Card hoverable cover={<img alt="example" src={item.image} />}>
                  <h3>
                    {index + 1}. {item.title}
                  </h3>
                  <p>{item.author}</p>
                  <p>{item.description}</p>
                </Card>
              </Col>
            ))}
          </div>
          <button
            onClick={() => scrollContent('right')}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              zIndex: 10,
            }}
          >
            {'>'}
          </button>
        </Row>
        {/* Contest / Theme Event */}
        <Row style={{ paddingTop: 50 }}>Contest / Theme Event</Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ paddingTop: 20 }}
        >
          {contestData.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                cover={<img alt="example" src={item.image} />}
                style={{ height: 300 }}
              >
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* AI-Generated Music */}
        <Row style={{ paddingTop: 50 }}>AI-Generated Music</Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ paddingTop: 20 }}
        >
          {musicData.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={4} key={index}>
              <Card hoverable cover={<img alt="example" src={item.image} />}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
        {/* newContent Content */}
        <Row style={{ paddingTop: 50 }}>New Content</Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ paddingTop: 20 }}
        >
          {newContentData.map((item, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={4}
              key={index}
              style={customColStyle}
            >
              <Card hoverable cover={<img alt="example" src={item.image} />}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Image.PreviewGroup> */}
        {/* <Carousel effect="fade" autoplay>
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
          </Carousel> */}
        {/* </Image.PreviewGroup> */}
        {/* <Row style={{ paddingTop: 50 }}>The most popular AI arts here</Row> */}
        {/* <Row */}
        {/* gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
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
              We will modify something. SDFSDF
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
          </Col> */}
        {/* </Row> */}
      </div>
      <style jsx>{`
        .scrollable {
          display: flex;
          overflow-x: scroll;
          white-space: nowrap;
        }

        .scrollable::-webkit-scrollbar {
          background: transparent;
          -webkit-appearance: none;
        }
      `}</style>
    </>
  );
};

export default Home;
