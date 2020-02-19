import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00a6ff;

  a {
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 30px;
    }
  }

  @media screen and (min-width: 600px) {
    a {
      padding: 24px;

      svg {
        font-size: 40px;
      }
    }
  }
`;
