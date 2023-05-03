import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import  useTypewriter  from 'react-typewriter-hook';
import { Form } from 'antd';
import { ProFormText } from '@ant-design/pro-components';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Card, Col, Row, Button, Space } from 'antd';
import Image from 'next/image';
import { dataSet } from './data';

const Login: NextPage = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [text, setText] = useState('');
  const TypewriterText = useTypewriter(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % dataSet.length);
      setText(dataSet[(currentSet + 1) % dataSet.length].text);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSet]);

  return (
    <>
      <div>
        <Image
          alt="Background"
          src={dataSet[currentSet].background}
          quality={100}
          layout="fill"
          objectFit="cover"
          className="fade-in-out"
        />
      </div>
      <div className="character-container">
        <Image
          alt="Character 1"
          src={dataSet[currentSet].character1}
          quality={100}
          width={200}
          height={200}
          className="fade-in-out delay-05"
        />
        <Image
          alt="Character 2"
          src={dataSet[currentSet].character2}
          quality={100}
          width={200}
          height={200}
          className="fade-in-out delay-2"
        />
      </div>
      <div className="text-container">
        <div className="typewriter-text delay-25">{TypewriterText}</div>
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
          zIndex: 1,
          width: '100%',
        }}
      >
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Card
            style={{
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              minWidth: 400, maxWidth: '75vw' 
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
              <Space wrap style={{ float: 'right' }}>
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
          left: 0;
          right: 0;
          bottom: 0;
          zIndex: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      
    </>
  );
};
export default Login;

{/* // import { NextPage } from 'next';
// import { ProFormText } from '@ant-design/pro-components';
// import { UserOutlined, KeyOutlined } from '@ant-design/icons';
// import { Card, Col, Row, Button, Space } from 'antd';
// import Image from 'next/image';
// import Background from '../../../public/assets/img/background.png'

// const Login: NextPage = () => { */
//   return (
//     <>
//     <div>
//       <Image
//         alt="Mountains"
//         src={Background}
//         quality={100}
//         fill
//         sizes="100vw"
//         style={{
//           objectFit: 'cover',
//         }} 
//       />
//     </div>
//       <Row prefixCls='flex' justify="center" align="middle" style={{minHeight: '90vh'}}>
//         <Col span={4} >
//           <Card
//             style={{ minWidth: 400, maxWidth: '75vw' }}
//             cover={
//               <img
//                 alt="Login Cover"
//                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//               />
//             }
//           >
//             <ProFormText
//               name="username"
//               fieldProps={{
//                 size: 'large',
//                 prefix: <UserOutlined />,
//               }}
//               placeholder={'Username'}
//               rules={[
//                 {
//                   required: true,
//                   message: (
//                     'Please input user name'
//                   ),
//                 },
//               ]}
//             />
//             <ProFormText.Password
//               name="password"
//               fieldProps={{
//                 size: 'large',
//                 prefix: <KeyOutlined />,
//               }}
//               placeholder={'Password'}
//               rules={[
//                 {
//                   required: true,
//                   message: (
//                     'Please input password'
//                   ),
//                 },
//               ]}
//             />
//             <Space wrap style={{ float: 'right' }}>
//               <Button type='primary'>Sign In</Button>
//               <Button block>Sign Up</Button>
//             </Space>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   )
// };

// export default Login */   
}