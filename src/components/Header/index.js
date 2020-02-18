import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStar } from 'react-icons/fa';

import { HeaderWrapper } from './styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <FaHome color="#fff" size="30" />
      </Link>
      <Link to="/favoritos">
        <FaStar color="#fff" size="30" />
      </Link>
    </HeaderWrapper>
  );
}
