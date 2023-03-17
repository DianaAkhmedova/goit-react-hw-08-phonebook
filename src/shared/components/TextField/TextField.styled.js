import styled from 'styled-components';

export const FormLabel = styled.label`
  display: inherit;
  flex-direction: inherit;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  display: block;
  margin-top: 4px;
  margin-bottom: 20px;
  padding: 4px 8px;
  width: 270px;

  border: none;
  outline: none;
  color: #fff;
  background: #0f0f0f;
  font-size: 15px;
  box-shadow: 0px 1px 2px rgba(0, 255, 255, 0.5),
    0px 2px 4px rgba(0, 255, 255, 0.5), 0px 4px 8px rgba(0, 255, 255, 0.5),
    0px 8px 16px rgba(0, 255, 255, 0.5);
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }
`;
