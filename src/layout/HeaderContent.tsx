import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Row, Col, Button } from 'antd';

const HeaderContent: React.FC = () => {
  const { Title } = Typography;

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (tag: string) => {
    i18n.changeLanguage(tag);
  };

  return (
    <>
      <Row justify='end'>
        <Col span={6}>
          <Button
            type={i18n.language === 'en' ? 'primary' : 'default'}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </Button>
          <Button
            type={
              i18n.language === 'zh' || i18n.language === 'zh-CN'
                ? 'primary'
                : 'default'
            }
            onClick={() => handleLanguageChange('zh')}
          >
            中文
          </Button>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title style={{ margin: 0, paddingTop: 24 }}>
            {t('Header Title')}
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default HeaderContent;
