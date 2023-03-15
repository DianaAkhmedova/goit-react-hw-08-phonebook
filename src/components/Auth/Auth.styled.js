import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: #6e6d7a;
  transition: color 200ms ease, text-shadow 200ms ease;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  :focus {
    color: #0d0c22;
    text-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
  &.active {
    color: #0d0c22;
    text-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
`;
