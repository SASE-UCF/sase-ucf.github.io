import React from "react";
import { Card, Image } from "antd";

const { Meta } = Card;

export interface OfficerProp {
  image: string;
  title: string;
  name: string;
}

export const Officer: React.FC<OfficerProp> = ({ image, title, name }) => {
  return (
    <Card
      style={{ width: "240" }}
      cover={<Image src={image} preview={false} />}
    >
      <Meta title={title} description={name} />
    </Card>
  );
};
