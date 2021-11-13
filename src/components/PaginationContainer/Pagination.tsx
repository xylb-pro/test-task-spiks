import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};
interface IPagination {
  onClickNextPage: () => void;
}

export const Pagination: React.FC<IPagination> = ({ onClickNextPage }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      onClickNextPage,
      OBSERVER_OPTIONS,
    );

    const loader = loaderRef.current;

    if (loader) {
      observer.observe(loader);
    }
    return () => {
      loader && observer.unobserve(loader);
    };
  }, [loaderRef]);

  return (
    <Container>
      <div ref={loaderRef}></div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 30%;
  height: 50px;
  margin-top: 30px;
`;
