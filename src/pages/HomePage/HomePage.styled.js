import styled from 'styled-components';

export const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PhonebookTitle = styled.h1`
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
  margin-bottom: 40px;
  color: #fff;
  text-shadow: rgb(255, 255, 255) 0px 0px 0px, rgb(255, 255, 255) 0px 0px 0px,
    rgb(255, 255, 255) 0px 0px 0px, rgb(0, 206, 210) 0px 0px 10px,
    rgb(0, 189, 195) 0px 0px 3px, rgb(0, 206, 210) 0px 0px 9px,
    rgb(0, 171, 178) 0px 0px 1px, rgb(0, 189, 195) 0px 0px 0px;

  @keyframes glow {
    from {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px rgb(0, 189, 195),
        0 0 20px rgb(0, 189, 195), 0 0 25px rgb(0, 189, 195),
        0 0 30px rgb(0, 189, 195), 0 0 35px rgb(0, 189, 195);
    }
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px rgb(0, 189, 195),
        0 0 40px rgb(0, 189, 195), 0 0 50px rgb(0, 189, 195),
        0 0 60px rgb(0, 189, 195), 0 0 70px rgb(0, 189, 195);
    }
  }
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  font-size: 20px;
`;
