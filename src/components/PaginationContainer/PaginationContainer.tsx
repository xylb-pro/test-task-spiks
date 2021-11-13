import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TRepos } from '../../models/repo';
import { IPageInfo } from '../../models/search';
import { MemoRepoElement } from '../RepoElement';
import { Pagination } from './Pagination';

interface IPaginationContainer {
  pageInfo: IPageInfo;
  findedRepos: TRepos;
  fetchMore: () => void;
}

export const PaginationContainer: React.FC<IPaginationContainer> = ({
  pageInfo,
  findedRepos,
  fetchMore,
}) => {
  return (
    <Container>
      {findedRepos.map((repo) => (
        <MemoRepoElement repo={repo} key={repo.id} />
      ))}
      <Pagination pageInfo={pageInfo} onClickNextPage={fetchMore} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
