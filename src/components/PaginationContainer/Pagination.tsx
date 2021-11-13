import React from 'react';
import styled from 'styled-components';
import { IPageInfo } from '../../models/search';
import { COLOR, getHexOpacity } from '../../styles/colors';

interface IPagination {
  pageInfo: IPageInfo;
  onClickNextPage: () => void;
}

export const Pagination: React.FC<IPagination> = ({
  pageInfo,
  onClickNextPage,
}) => {
  return (
    <Container>
      <PageButton isActive={pageInfo.hasPreviousPage}>{'<'}</PageButton>
      <PageButton isActive={pageInfo.hasNextPage} onClick={onClickNextPage}>
        {'>'}
      </PageButton>
    </Container>
  );
};

interface IContainer {}
const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 30%;
  height: 50px;
  margin-top: 30px;
`;
interface IPageButton {
  isActive: boolean;
}
const PageButton = styled.button<IPageButton>`
  font-size: 42px;
  color: ${(p) =>
    p.isActive ? COLOR.textWhite : COLOR.textWhite + getHexOpacity(10)};

  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
