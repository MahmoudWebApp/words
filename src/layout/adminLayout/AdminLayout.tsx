
import React, { useState } from 'react';
import { UserOutlined, PieChartOutlined, UsergroupAddOutlined, BankOutlined, FireOutlined, ReadOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from "../../assets/img/logos/words-logo-circele.png"

const { Content, Footer, Sider } = Layout;

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
    getItem('DashBoard', '/admin', <PieChartOutlined />),
    getItem('Users', '/admin/users', <UserOutlined />),
    getItem('Students', '/admin/students', <UsergroupAddOutlined />),
    getItem('Schools', '/admin/schools', <BankOutlined />),
    getItem('Activities', '/admin/activities', <FireOutlined />),
    getItem('Assessments', 'admin/Assessments', <ReadOutlined />),

];

const AdminLayout: React.FC = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className='flex flex-col py-12 justify-between gap-y-12'>
                    <div className="flex items-center justify-center  ">
                        <NavLink to="/">
                            <img src={logo} alt="logo" className="w-28 " />
                        </NavLink>
                    </div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['1']} mode="inline" items={items}
                        onClick={onClick}
                    />
                </div>

            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Words Academy ©2023 Created by Mahmoud Ahmed</Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout