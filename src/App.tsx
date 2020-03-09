import React from "react";
import "./App.css";
import { Layout, BackTop } from "antd";
import FooterContent from "./layout/FooterContent";
import MainContent from "./layout/MainContent";
import HeaderContent from "./layout/HeaderContent";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Content>
          <MainContent />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
      <BackTop />
    </div>
  );
}

export default App;
