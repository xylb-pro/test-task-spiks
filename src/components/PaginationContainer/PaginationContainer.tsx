import React from 'react';
import styled from 'styled-components';
import { TRepos } from '../../models/repo';

import { RepoElement } from '../RepoElement';
import { Pagination } from './Pagination';

interface IPaginationContainer {
  findedRepos: TRepos;
  fetchMore: () => void;
}

export const PaginationContainer: React.FC<IPaginationContainer> = ({
  findedRepos,
  fetchMore,
}) => {
  return (
    <Container>
      {findedRepos.map((repo) => (
        <RepoElement repo={repo} key={repo.id} />
      ))}
      <Pagination onClickNextPage={fetchMore} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
