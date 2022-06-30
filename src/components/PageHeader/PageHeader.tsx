import {
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu, Space } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/saseLogo.png";

const { Sider } = Layout;

export const PageHeader: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["home"]);
  const items: ItemType[] = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "officers",
      label: <Link to="/officers">Officers</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "social",
      label: <Link to="/social">Social</Link>,
      icon: <AppstoreOutlined />,
    },
  ];
  return (
    <Sider breakpoint="lg" collapsedWidth="0" theme="light">
      <Space direction="vertical" size={"middle"}>
        <Image src={logo} />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["home"]}
          onSelect={(props) => {
            const { key } = props;
            setSelectedKeys([key]);
          }}
          selectedKeys={selectedKeys}
          items={items}
        />
      </Space>
    </Sider>
  );
};
