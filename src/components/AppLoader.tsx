import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../styles/colors';

interface IAppLoader {}

export const AppLoader: React.FC<IAppLoader> = () => {
  return <Container>LOADING...</Container>;
};

const Container = styled.div`
  font-size: 32px;
  color: ${COLOR.textWhite};
`;
