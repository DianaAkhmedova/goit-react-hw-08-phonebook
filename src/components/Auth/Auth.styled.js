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
    color: white;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00bdc3,
      0 0 82px #00bdc3, 0 0 92px #00bdc3, 0 0 102px #00bdc3, 0 0 151px #00bdc3;
  }
  &.active {
    color: white;
    text-shadow: rgb(255, 255, 255) 0px 0px 14px, rgb(255, 255, 255) 0px 0px 0px,
      rgb(255, 255, 255) 0px 0px 1px, rgb(0, 189, 195) 0px 0px 0px,
      rgb(0, 189, 195) 0px 0px 0px, rgb(0, 189, 195) 0px 0px 0px,
      rgb(0, 189, 195) 0px 0px 0px, rgb(0, 189, 195) 0px 0px 0px;
  }
`;
