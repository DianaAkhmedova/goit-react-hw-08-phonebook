import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  margin-top: 4px;
  margin-bottom: 10px;
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 5px;
  width: 270px;
  font-size: 18px;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }
`;
