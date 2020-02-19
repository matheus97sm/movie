import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    animation: ${rotate} 2s linear infinite;
    margin: 30px 0;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1050px) {
    grid-template-columns: repeat(6, 1fr);
  }

  li {
    width: 100%;

    a {
      display: flex;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
      }
    }
  }
`;
