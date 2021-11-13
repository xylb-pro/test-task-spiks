import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { COLOR } from '../styles/colors';
import { FindedRepos } from '../components/FindedRepos';
import { Search } from '../components/Search';

export const Finder: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <Layout>
      <Header>
        Welcome to RepoFinder
        <Search setSearchedValue={setSearchText} />
      </Header>
      <ContentContainer>{FindedRepos(searchText)}</ContentContainer>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  flex: 1;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  overflow: hidden;

  background-color: ${COLOR.backgroundMain};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 1100px;

  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 300px;

  color: ${COLOR.textWhite};
  font-size: 48px;
  font-weight: 500;
  text-align: center;

  background-color: ${COLOR.backgroundHeader};
`;
