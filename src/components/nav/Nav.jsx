import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { APP_URLS } from '../../config/AppConstants';
import Logo from '../../images/Logo';
import { uppercaseFirstLetter } from '../../utils/util';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: sticky;
  background-color: #fff;
  top: 0px;
  align-items: center;
  z-index: 999;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StlyedUL = styled.ul`
  list-style: none;
`;

const StyledLI = styled.li`
  display: inline-block;
  margin: 0 5px;
  a {
    color: #282c34;
    text-decoration: none;
    &:hover {
      color: #4949f3;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledTitle>
        <Logo />
      </StyledTitle>
      <StlyedUL>
        {Object.keys(APP_URLS).map((appPage) => (
          <StyledLI key={appPage}>
            <Link to={APP_URLS[appPage]}>{uppercaseFirstLetter(appPage)}</Link>
          </StyledLI>
        ))}
      </StlyedUL>
    </StyledNav>
  );
}
