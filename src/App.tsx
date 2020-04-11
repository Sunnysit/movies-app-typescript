import React from 'react';
import './App.css';
import { Layout, BackTop } from 'antd';
import FooterContent from './layout/FooterContent';
import MainContent from './layout/MainContent';
import HeaderContent from './layout/HeaderContent';

const App: React.FC = () => {
  const { Footer, Content } = Layout;

  return (
    <div className='App'>
      <Layout style={{ minHeight: '100vh' }}>
        <Content>
          <HeaderContent />
          <MainContent />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
      <BackTop />
    </div>
  );
};

export default App;
