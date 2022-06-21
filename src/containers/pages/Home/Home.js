import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FavItemsList from '../../favItems/FavItemsList/FavItemsList';
import FilterAndSearch from '../../favItems/FilterAndSearch/FilterAndSearch';
import FavItemStat from '../../favItems/FavItemStat/FavItemStat';
import { Container, Module, Info, FilterAndSearchContainer, FavItemStatContainer } from './HomeStyled';

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    localStorage.setItem('from', pathname);
  }, []);

  return (
    <Container>
      <Module>
        <Info>
          <FilterAndSearchContainer>
            <FilterAndSearch />
          </FilterAndSearchContainer>
          <FavItemStatContainer>
            <FavItemStat />
          </FavItemStatContainer>
        </Info>
        <FavItemsList />
      </Module>
    </Container>
  );
};
export default Home;
