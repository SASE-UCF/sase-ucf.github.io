import { Button, Space, Typography } from "antd";
import { InstagramOutlined } from "@ant-design/icons";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";

const { Title } = Typography;

interface SocialProp {}

export const Social: React.FC<SocialProp> = () => {
  return (
    <>
      <Header style={{ padding: 0, backgroundColor: "transparent" }} />
      <Content>
        <Space direction="vertical" size="large">
          <Title>Check out our social pages!</Title>
          <Button
            icon={<InstagramOutlined />}
            href="https://www.instagram.com/saseucf/"
            target="_blank"
          >
            Instagram
          </Button>
          <Button
            icon={<FaDiscord className="anticon" />}
            href="https://discord.gg/kYYz4p9"
            target="_blank"
          >
            Discord
          </Button>
          <Button
            icon={<FcGoogle className="anticon" />}
            href="https://calendar.google.com/calendar/u/3?cid=Y190Zm84MjhjMTQ3OGt0NjgxcjQ0aXMzcnNjc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            target="_blank"
          >
            Calendar
          </Button>
        </Space>
      </Content>
    </>
  );
};
