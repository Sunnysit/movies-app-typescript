import React from 'react';
import './App.css';
import { Layout, BackTop } from 'antd';
import FooterContent from './layout/FooterContent';
import MainContent from './layout/MainContent';
import HeaderContent from './layout/HeaderContent';

const App: React.FC = () => {
  const { Footer, Content } = Layout;
  const handleDatePick = (e:React.ChangeEvent<HTMLInputElement>)=>{
    alert(e.target.value)
  }

  const handleTimePick = (e:React.ChangeEvent<HTMLInputElement>)=>{
    alert(e.target.value)
  }

  return (
    <div className='App'>
      <input type="date" onChange={handleDatePick}/>
      <input type="time" onChange={handleTimePick}/>
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
