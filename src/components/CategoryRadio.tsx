import React from 'react';
import { useTranslation } from 'react-i18next';
import { Radio } from 'antd';
import { CategoryRadioProps, MovieCategory } from '../config/typeInterface';

const CategoryRadio: React.FC<CategoryRadioProps> = ({
  handleCategoryChange,
}) => {
  const { t } = useTranslation();

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
    >
      <Radio.Group
        name='categories'
        buttonStyle='solid'
        defaultValue='now_playing'
        onChange={handleCategoryChange}
      >
        <Radio.Button value={MovieCategory.NOW_PLAYING}>
          {t('Now Playing')}
        </Radio.Button>
        <Radio.Button value={MovieCategory.POPULAR}>
          {t('Popular')}
        </Radio.Button>
        <Radio.Button value={MovieCategory.TOP_RATED}>
          {t('Top Rated')}
        </Radio.Button>
        <Radio.Button value={MovieCategory.UPCOMING}>
          {t('Upcoming')}
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default CategoryRadio;
