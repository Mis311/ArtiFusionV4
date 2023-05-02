import {
    HomeOutlined,
    DesktopOutlined,
    UploadOutlined,
    TeamOutlined,
    UserOutlined,
    BookOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import Image from 'next/image'
import Logo from '../../public/assets/img/logo.png'
import Link from 'next/link'
import { useRouter } from "next/router";

const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

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
    getItem('Post', 'sub2', <UploadOutlined />, [getItem('Art', '6'), getItem('Novel', '7'), getItem('Feedback', '8')]),
    getItem('About Us', '9', <TeamOutlined />),
];

const AFLayout : React.FC<any> = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const router = useRouter();
    const useAFLayout = (router.pathname !== "/404" && router.pathname.indexOf('/user') < 0);

    return useAFLayout ? (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={()=>{ setCollapsed(!collapsed); }} style={{overflowX: "hidden"}}>
            <Image alt='logo' src={Logo} width={200}/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header className="artifusion-nav" style={{ padding: 0, background: colorBgContainer}} />
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Artifusion ©2023 Created by AI Team</Footer>
            </Layout>
        </Layout>
    ) : (<>{children}</>)
}

export default AFLayout;