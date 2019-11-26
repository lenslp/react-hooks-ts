import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
}

const LayoutWrap = (props: Props) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken: any) => {
          console.log(broken);
        }}
        onCollapse={(collapsed: any, type: any) => {
          console.log(collapsed, type);
        }}
      >
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
      <Layout className="layOut">
        <Header
          style={{
            background: "#fff",
            paddingLeft: 16,
            fontSize: 24,
            fontWeight: 800
          }}
        >
          LENS后台管理系统
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutWrap;
