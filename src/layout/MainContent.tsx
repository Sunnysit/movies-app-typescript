import React, { useState } from 'react';
import { Radio } from 'antd';
import DiscoverView from '../views/DiscoverView';
import SearchView from '../views/SearchView';
import { RadioChangeEvent } from 'antd/lib/radio';

import { useTranslation } from 'react-i18next';

const MainContent: React.FC = () => {
  const [mode, setMode] = useState('discover');

  const { t } = useTranslation();

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <div style={{ maxWidth: 1000, margin: '2rem auto' }}>
      <Radio.Group
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1rem auto',
        }}
        onChange={handleModeChange}
        value={mode}
      >
        <Radio value='discover'>{t('Discover Mode')}</Radio>
        <Radio value='search'>{t('Search Mode')}</Radio>
      </Radio.Group>
      {mode === 'discover' ? <DiscoverView /> : <SearchView />}
    </div>
  );
};

export default MainContent;
