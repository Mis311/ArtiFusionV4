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
    const timer = setTimeout(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % dataSet.length);
      setText(dataSet[(currentSet + 1) % dataSet.length].text);
    }, 2500); // Change the interval to 2500ms (2.5 seconds)

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
        <div className="typewriter-text delay-25"> {TypewriterText};</div>
      </div>

      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: '100vh',
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
              minWidth: 400,
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
          width: 100%;
          height: 100%;
          zindex: 0;
        }
        .character-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          zindex: 1;
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
          opacity: 1;
          zindex: 1;
        }

        .character-container {
          position: absolute;
          bottom: 15%;
          left: 5%;
          zindex: 1;
        }

        .text-container {
          position: absolute;
          bottom: 20%;
          left: 50%;
          color: #ffffff;
          font-size: 1.5rem;
          text-align: center;
          transform: translateX(-50%);
          zindex: 100;
        }
        .typewriter-text {
          position: absolute;
          bottom: 20%;
          left: 50%;
          color: #000000;
          font-size: 1.5rem;
          text-align: center;
          transform: translateX(-50%);
          zindex: 100;
        }
      `}</style>
    </>
  );
};
export default Login;
