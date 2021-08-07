import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../atoms/Header/Header';
import Hamburger from '../../molecules/Hamburger/Hamburger';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled(Header)`
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
    background-color: black;
    color: white;
  }
`;

const Navigation = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Header as={Link} to="/">
        Shop
      </Header>
      <StyledHeader as={Link} to="/alcohol">
        Alcohol
      </StyledHeader>
      <StyledHeader as={Link} to="/games">
        Games
      </StyledHeader>
    </InnerWrapper>
    <Hamburger />
  </StyledWrapper>
);

export default Navigation;
