import styled from 'styled-components';

export const Btn = styled.button`
  min-width: 75px;
  padding: 8px 15px;
  color: #fff;
  background: #0f0f0f;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #222;
    box-shadow: inset 0px 2px 4px rgba(0, 255, 255, 0.3),
      inset 0px 4px 8px rgba(0, 255, 255, 0.3),
      inset 0px 8px 16px rgba(0, 255, 255, 0.3);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;
