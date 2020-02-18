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
  max-width: 960px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;

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
