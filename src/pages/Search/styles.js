import styled from 'styled-components';

export const SearchBar = styled.div`
  position: fixed;
  bottom: 62px;
  left: 0;
  width: 100%;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    border: none;

    &::placeholder {
      color: #abbbd2;
    }
  }

  @media screen and (min-width: 600px) {
    bottom: 88px;
    padding: 16px;

    input {
      font-size: 16px;
    }
  }
`;
