import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Row, Col } from 'antd';

const FooterContent: React.FC = () => {
  const { Text } = Typography;

  const { t } = useTranslation();

  return (
    <Row justify='center'>
      <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
        <Text>
          {t('Footer Credit')}
          <a href='https://www.themoviedb.org/' target='blank'>
            <img
              style={{ width: 50, margin: 10 }}
              src={process.env.PUBLIC_URL + '/TMdb.svg'}
              alt='tmdb logo'
            />
          </a>
        </Text>
      </Col>
      <Col
        xs={24}
        sm={12}
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{t('Footer Author')}</Text>
      </Col>
    </Row>
  );
};

export default FooterContent;
