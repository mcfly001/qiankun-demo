import React, { memo } from 'react';
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { history } from './utils'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    };
}

const items = [
    getItem('home1', '/sub1/home', <PieChartOutlined />),
    getItem('about1', '/sub1/about', <DesktopOutlined />),
    getItem('home2', '/sub2/home', <PieChartOutlined />),
    getItem('about2', '/sub2/about', <DesktopOutlined />),
];

const Layout = props => {    
    const handleClick = ({item, key, keyPath, domEvent}) => {
        history.push(key)
    }

    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={items}
            style={{ width: 200, height: '100vh' }}
            onClick={handleClick}
        />
    );
};

export default memo(Layout);
