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
  
    const timer = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % dataSet.length);
      setText(dataSet[currentSet].text);
    }, 5500);
  
    return () => {
      clearInterval(timer);
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
      
      <div className="text-container">
        <div className="typewriter-text delay-5"> {TypewriterText}</div>
      </div>

      <Row
        justify="center"
        align="middle"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          width: '100%',
          height: '100vh',
        }}
      >
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Card
            style={{
              borderRadius: '8px',
              maxWidth: '75vw',
          
              
            }}
            cover={
              <img
                alt="Login Cover"
                src="/assets/img/logo_light.png"
                style={{ 
                  width: '80%', 
                  height: 'auto', 
                  objectFit: 'contain', 
                  paddingLeft : '30px',
                  justifyContent: 'center', 
                
           }}
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
