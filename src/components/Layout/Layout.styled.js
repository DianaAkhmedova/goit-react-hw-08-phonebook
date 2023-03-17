import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 14px 0;
  background-color: #000519;
  box-shadow: rgba(0, 255, 255, 0.5) 0px 1px 2px,
    rgba(0, 255, 255, 0.5) 0px 2px 4px, rgba(0, 255, 255, 0.5) 0px 4px 8px,
    rgba(0, 255, 255, 0.5) 0px 8px 20px 8px;
`;

export const Main = styled.main`
  background-color: #000519;
  height: 1000px;
`;

export const Section = styled.section`
  padding: 105px 0;
`;

export const Container = styled.div`
  padding-left: 70px;
  padding-right: 70px;
  margin-left: auto;
  margin-right: auto;
`;

export const Img = styled.img`
  width: 600px;
  height: 500px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
