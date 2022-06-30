import { Col, Row, Space, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { Officer } from "../../components/Officer";
import anna from "../../resources/officers/annaBelinda.webp";
import anthony from "../../resources/officers/anthony.jpeg";
import brinly from "../../resources/officers/brinly.jpeg";
import emir from "../../resources/officers/emir.webp";
import james from "../../resources/officers/james.webp";
import joe from "../../resources/officers/joe.jpeg";
import koja from "../../resources/officers/koja.png";
import rachel from "../../resources/officers/rachel.png";
import zaaferah from "../../resources/officers/zaaferah.webp";

interface OfficersProp {}

const { Title } = Typography;

export const Officers: React.FC<OfficersProp> = () => {
  return (
    <>
      <Header style={{ padding: 0, backgroundColor: "transparent" }} />
      <Content>
        <Space direction="vertical" size="large">
          <Title>Welcome to SASE UCF!</Title>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Officer
                image={joe}
                title={"President"}
                name={"William Brashear"}
              />
            </Col>
            <Col span={8}>
              <Officer
                image={anthony}
                title={"External Vice President"}
                name={"Anthony Nguyen"}
              />
            </Col>
            <Col span={8}>
              <Officer
                image={rachel}
                title={"Internal Vice President"}
                name={"Rachel Williams"}
              />
            </Col>
            <Col span={8}>
              <Officer
                image={anna}
                title={"Event Coordinator"}
                name={"AnnaBelinda Zhou"}
              />
            </Col>
            <Col span={8}>
              <Officer
                image={emir}
                title={"Event Coordinator"}
                name={"Emir Saffar"}
              />
            </Col>
            <Col span={8}>
              <Officer
                image={brinly}
                title={"Treasurer"}
                name={"Brinly Pereira"}
              />
            </Col>
            <Col span={8}>
              <Officer
                image={james}
                title={"Public Relations"}
                name={"James Nguyen"}
              />
            </Col>
            <Col span={8}>
              <Officer
                image={zaaferah}
                title={"Secretary"}
                name={"Zaaferah Hamid"}
              />
            </Col>
            <Col span={8}>
              <Officer image={koja} title={"Webmaster"} name={"Kohei Koja"} />
            </Col>
          </Row>
        </Space>
      </Content>
    </>
  );
};
