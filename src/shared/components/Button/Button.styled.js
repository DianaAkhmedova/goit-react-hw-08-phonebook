import styled from 'styled-components';

export const Btn = styled.button`
  min-width: 75px;
  padding: 5px 12px;
  border: 1px solid green;
  border-radius: 4px;
  background-color: white;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
  color: green;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: green;
  }
`;
