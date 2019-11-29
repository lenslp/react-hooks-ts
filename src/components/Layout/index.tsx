import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
}

const LayoutWrap = (props: Props) => {
  return (
    <Layout
      style={{
        height: "100vh"
      }}
    >
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/dashboard">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="layOut"
        style={{
          background: "#fff"
        }}
      >
        <Header
          style={{
            background: "#fff",
            paddingLeft: 16,
            fontSize: 24,
            fontWeight: 800,
            borderBottom: "1px solid #eee"
          }}
        >
          LENS后台管理系统
        </Header>
        <Content
          style={{
            margin: "24px 16px 0"
          }}
        >
          {props.children}
        </Content>
        <Footer
          style={{
            textAlign: "center"
          }}
        >
          LENS后台管理系统 ©2019 Created by lens
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutWrap;
