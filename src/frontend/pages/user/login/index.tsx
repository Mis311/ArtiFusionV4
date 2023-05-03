import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-components';
import { Button, Card, Col, Form, Row, Space } from 'antd';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useTypewriter from 'react-typewriter-hook';
import { dataSet } from './data';

const Login: NextPage = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [text, setText] = useState('');
  const TypewriterText = useTypewriter(text);

  useEffect(() => {
    setText(dataSet[0].text);
    const timer = setTimeout(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % dataSet.length);
      setText(dataSet[(currentSet + 1) % dataSet.length].text);
    }, 5500); // Change the interval to 2500ms (2.5 seconds)

    return () => {
      clearTimeout(timer);
    };
  }, [currentSet]);

  return (
    <>
      {dataSet.map((set, index) => (
        <div
          key={`bg-${index}`}
          className={`fade-in-out ${currentSet === index ? 'current' : ''}`}
        >
          <Image
            alt="Background"
            src={set.background}
            quality={100}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <div className="character-container">
        {dataSet.map((set, index) => (
          <div
            key={`char-${index}`}
            className={`fade-in-out ${currentSet === index ? 'current' : ''}`}
          >
            <Image
              alt="Character 1"
              src={set.character1}
              quality={100}
              width={200}
              height={200}
            />
            <Image
              alt="Character 2"
              src={set.character2}
              quality={100}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
      <div className="text-container">
        <div className="typewriter-text delay-5"> {TypewriterText};</div>
      </div>

      <Row
        justify="center"
        align="middle"
        style={{
          maxHeight: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          width: '100%',
        }}
      >
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Card
            style={{
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',

              maxWidth: '75vw',
            }}
            cover={
              <img
                alt="Login Cover"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Form layout="vertical">
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'Username'}
                rules={[
                  {
                    required: true,
                    message: 'Please input user name',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <KeyOutlined />,
                }}
                placeholder={'Password'}
                rules={[
                  {
                    required: true,
                    message: 'Please input password',
                  },
                ]}
              />
              <Space
                wrap
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '1rem',
                }}
              >
                <Button type="primary">Sign In</Button>
                <Button block>Sign Up</Button>
              </Space>
            </Form>
          </Card>
        </Col>
      </Row>
      <style jsx>{`
        .background-container {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
        }
        .character-container {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          transform: translate(-50%, -50%);
        }

        .fade-in-out {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 2.5s;
          will-change: opacity;
        }

        .fade-in-out.current {
          z-index: 0;
          opacity: 1;
        }

        .character-container {
          position: absolute;
          bottom: 15%;
          left: 5%;
          z-index: 1;
        }

        .text-container {
          position: absolute;
          bottom: 50%;
          left: 70%;
          z-index: 99;
          color: #ffffff;
          font-size: 1.5rem;
          text-align: center;
          transform: translateX(-50%);
          width: auto;
          max-width: 400px;
        }
        
        .typewriter-text {
          position: absolute;
          bottom: 20%;
          left: 70%;
          z-index: 100;
          color: #000000;
          font-size: 1.5rem;
          text-align: center;
          background-color: rgba(0, 70, 100, 0.5);
          transform: translateX(-50%);
          padding: 10px;
          border-radius: 10px;
          width: auto;
          max-width: 400px;
          height: auto;
          max-height: 300px;
          overflow-y: auto;
        }
        
      `}</style>
    </>
  );
};
export default Login;
