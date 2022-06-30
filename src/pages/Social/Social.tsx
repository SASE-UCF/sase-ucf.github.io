import { Content, Header } from "antd/lib/layout/layout";
import React from "react";

interface SocialProp {}

export const Social: React.FC<SocialProp> = () => {
  return (
    <>
      <Header style={{ padding: 0, backgroundColor: "transparent" }} />
      <Content>Social</Content>
    </>
  );
};
