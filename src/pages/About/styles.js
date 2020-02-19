import styled, { keyframes } from 'styled-components';

export const Menu = styled.div`
  width: 100%;
  background-color: #00a6ff;
  padding: 16px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      margin-right: 16px;
    }

    span {
      color: #fff;
    }
  }
`;

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

  > svg {
    animation: ${rotate} 2s linear infinite;
    margin: 30px 0;
  }
`;

export const MovieCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 8px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    img {
      width: 50%;
    }
  }

  @media screen and (min-width: 1050px) {
    header img {
      width: 30%;
    }
  }
`;

export const Details = styled.div`
  width: 48%;

  strong {
    color: #343f4b;
    font-size: 20px;
  }

  div {
    margin-top: 8px;

    svg {
      margin-right: 2px;
    }
  }

  @media screen and (min-width: 1050px) {
    width: 65%;
  }
`;

export const FavorityButton = styled.button`
  margin: 16px 0 32px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${props => props.favority && '#00a6ff'};

  svg {
    margin-right: 8px;
  }
`;

export const Resume = styled.div``;
