import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStar, FaSearch } from 'react-icons/fa';

import { HeaderWrapper } from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <FaHome color="#fff" />
      </Link>
      <Link to="/favoritos">
        <FaStar color="#fff" />
      </Link>
      <Link to="/pesquisar">
        <FaSearch color="#fff" />
      </Link>
    </HeaderWrapper>
  );
}
