import { NextPage } from 'next';
import { ProFormText } from '@ant-design/pro-components';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Card, Col, Row, Button, Space } from 'antd';
import Image from 'next/image';
import Background from '../../../public/assets/img/background.png'

const Login: NextPage = () => {
  return (
    <>
    <div>
      <Image
        alt="Mountains"
        src={Background}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }} 
      />
    </div>
      <Row prefixCls='flex' justify="center" align="middle" style={{minHeight: '90vh'}}>
        <Col span={4} >
          <Card
            style={{ minWidth: 400, maxWidth: '75vw' }}
            cover={
              <img
                alt="Login Cover"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
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
                  message: (
                    'Please input user name'
                  ),
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
                  message: (
                    'Please input password'
                  ),
                },
              ]}
            />
            <Space wrap style={{ float: 'right' }}>
              <Button type='primary'>Sign In</Button>
              <Button block>Sign Up</Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  )
};

export default Login;
