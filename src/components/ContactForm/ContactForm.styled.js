import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #ccd4d8;
`;

export const FormLabel = styled.label`
  display: inherit;
  flex-direction: inherit;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  display: block;
  margin-top: 4px;
  padding: 4px 8px;
  border: 1px solid black;

  max-width: 400px;
  font-size: 18px;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }
`;
