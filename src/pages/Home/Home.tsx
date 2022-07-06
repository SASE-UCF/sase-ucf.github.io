import { Col, Divider, Image, Layout, Row, Space, Typography } from "antd";
import React from "react";
import officers from "../../resources/officers.png";
import logo from "../../resources/saseLogo2.webp";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

interface HomeProp {}

export const Home: React.FC<HomeProp> = () => {
  return (
    <>
      <Header style={{ padding: 0, backgroundColor: "transparent" }} />
      <Content>
        <Space direction="vertical" size="large">
          <Title>Welcome to SASE UCF!</Title>
          <Row gutter={16} style={{ padding: "0 20px" }}>
            <Col xs={24} sm={12} style={{ textAlign: "left" }}>
              <Title>Welcome to SASE@UCF!</Title>
              <Divider />
              <Text>Welcome to the website for the UCF chapter of SASE!</Text>
              <br />
              <br />
              <Text>
                SASE is dedicated to the advancement of Asian heritage
                scientists and engineers in education and employment so that
                they can achieve their full career potential. In addition to
                SASE’s National’s mission, the University of Central Florida
                chapter seeks to connect individuals in a way that benefits both
                their professional and personal lives. SASE membership is open
                to everyone regardless of gender, race, or creed.
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Image src={officers} preview={false} />
            </Col>
          </Row>
          <Divider />
          <Row gutter={16} style={{ padding: "0 20px" }}>
            <Col xs={24} sm={12} style={{ textAlign: "left" }}>
              <Text>
                SASE’s mission is to prepare Asian heritage scientists and
                engineers for success in the global business world, celebrate
                diversity on campuses and in the workplace, and provide
                opportunities for members to make contributions to their local
                communities.
              </Text>
              <br />
              <br />
              <Text>
                In addition to SASE’s National’s mission, the University of
                Central Florida chapter seeks to connect individuals in a way
                that benefits both their professional and personal lives. SASE
                membership is open to everyone regardless of gender, race, or
                creed.
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Image src={logo} preview={false} />
            </Col>
          </Row>
        </Space>
      </Content>
    </>
  );
};
