import {
  BookOutlined,
  DesktopOutlined,
  DownOutlined,
  HomeOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Logo from '../../public/assets/img/logo.png';

// Replace the line below with actual authentication check
const isLoggedIn = true;
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const postMenu = (
  <Menu>
    <Menu.Item key="post:1">
      <Link href="/post/art">Post Art</Link>
    </Menu.Item>
    <Menu.Item key="post:2">
      <Link href="/post/novel">Post Novel</Link>
    </Menu.Item>
  </Menu>
);

const viewMenu = (
  <Menu>
    <Menu.Item key="view:1">
      <Link href="/view/art">View Art</Link>
    </Menu.Item>
    <Menu.Item key="view:2">
      <Link href="/view/novel">View Novel</Link>
    </Menu.Item>
  </Menu>
);
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href={'/'}>Home</Link>, '1', <HomeOutlined />),
  getItem(<Link href={'/desktop'}>Desktop</Link>, '2', <DesktopOutlined />),
  getItem('View', 'sub1', <BookOutlined />, [
    getItem('Art', '3'),
    getItem('Novel', '4'),
    getItem('Feedback', '5'),
  ]),
  getItem('Post', 'sub2', <UploadOutlined />, [
    getItem('Art', '6'),
    getItem('Novel', '7'),
    getItem('Feedback', '8'),
  ]),
  getItem(<Link href="/about">About Us</Link>, '9', <TeamOutlined />),
];

const AFLayout: React.FC<any> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const useAFLayout =
  router.pathname !== '/404' && !(router.pathname.startsWith('/user') && !router.pathname.startsWith('/user/profile'));

  return useAFLayout ? (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => {
          setCollapsed(!collapsed);
        }}
        style={{ overflowX: 'hidden' }}
      >
        <Link href="/">
          <Image alt="logo" src={Logo} width={200} />
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout ">
        <Header
          className="artifusion-nav "
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ minWidth: '20vw' }}>
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Dropdown overlay={postMenu}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Post <DownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="2">
                <Dropdown overlay={viewMenu}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    View <DownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>
              {isLoggedIn ? (
                <Menu.Item key="3" icon={<UserOutlined />}>
                  <Link href="/profile">Profile</Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="3">
                  <Link href="/login">Login</Link>
                </Menu.Item>
              )}
            </Menu>
          </div>
        </Header>

        <Content style={{ margin: '0 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          Artifusion ©2023 Created by AI Team
        </Footer>
      </Layout>
    </Layout>
  ) : (
    <>{children}</>
  );
};

export default AFLayout;
