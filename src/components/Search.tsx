import _ from 'lodash';
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import styled from 'styled-components';
import { COLOR } from '../styles/colors';

interface ISearch {
  setSearchedValue: Dispatch<SetStateAction<string>>;
}

export const Search: React.FC<ISearch> = ({ setSearchedValue }) => {
  const [inputValue, setInputValue] = useState('');

  const debouncedSetSearchedValue = useCallback(
    _.debounce((str: string) => {
      setSearchedValue(str);
    }, 1000),
    [],
  );

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSetSearchedValue(e.target.value);
  };

  return (
    <StyledInput
      placeholder="Search repo name..."
      onChange={onInputChange}
      value={inputValue}
    />
  );
};

const StyledInput = styled.input`
  width: 300px;

  padding: 8px 16px;
  margin-top: 20px;

  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${COLOR.backgroundMain};

  color: ${COLOR.textWhite};
  font-size: 18px;
`;
