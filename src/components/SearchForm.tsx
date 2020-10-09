import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'antd';
import { SearchFromProps } from '../config/typeInterface';

const SearchForm: React.FC<SearchFromProps> = ({ handleQuerySubmit }) => {
  const { Search } = Input;

  const [searchText, setSearchText] = useState<string>('');

  const { t } = useTranslation();

  // useEffect(() => {
  //   if (searchText.length > 0) handleQuerySubmit(searchText);
  // }, [t]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Search
        placeholder={t('Search Placeholder')}
        onSearch={(value) => handleQuerySubmit(value)}
        onChange={handleTextChange}
        value={searchText}
        enterButton
      />
    </div>
  );
};

export default SearchForm;
