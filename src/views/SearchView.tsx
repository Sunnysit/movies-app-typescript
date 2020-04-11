import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Typography } from 'antd';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import Loading from '../shared/Loading';
import { MovieItemList } from '../config/typeInterface';
import { searchMoviesByQuery } from '../services/movies';

const SearchView: React.FC = () => {
  const { Text } = Typography;

  const { t, i18n } = useTranslation();

  const [searchResult, setSearchResult] = useState<MovieItemList>([]);
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleQuerySubmit = (value: string) => {
    const userInput = value.trim();
    if (userInput.length > 0) {
      console.log(i18n.language);
      searchMoviesByQuery(userInput, i18n.language).then((response) => {
        if (response.status === 200) {
          if (response.data.results.length > 0) {
            setMessage('');
            setSearchResult(response.data.results);
          } else {
            const msgPrefix = t('Search No Result');
            setMessage(`${msgPrefix} ${userInput}`);
          }
        } else {
          console.log('Error', response);
        }
        setIsLoading(false);
      });
    } else {
      setMessage(t('Search Invalid Word'));
    }
  };

  return (
    <>
      <Row justify='center'>
        <Col xs={20} md={10}>
          <SearchForm handleQuerySubmit={handleQuerySubmit} />
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Text type='danger'>{message}</Text>
        </Col>
      </Row>
      {isLoading ? <Loading /> : <MoviesList data={searchResult} />}
    </>
  );
};

export default SearchView;
