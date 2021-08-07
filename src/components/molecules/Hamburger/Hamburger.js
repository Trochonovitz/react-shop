import React, { useState } from 'react';
import styled from 'styled-components';
import ListMenu from '../ListMenu/ListMenu';

const StyledHamburger = styled.button`
  width: 40px;
  height: 40px;

  margin-right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledHamburgerInner = styled.span`
  display: inline-block;

  width: 100%;
  height: 6px;
  background-color: black;
  position: relative;

  &::after,
  &::before {
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 6px;
    background-color: black;
  }

  &::after {
    top: 10px;
  }

  &::before {
    top: -10px;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  transition: transform 0.3s 0.1s ease-in-out;
`;

const Hamburger = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <FlexWrapper isVisible={isVisible}>
      <StyledHamburger onClick={() => setVisibility(!isVisible)}>
        <StyledHamburgerInner />
      </StyledHamburger>
      <ListMenu isVisible={isVisible} />
    </FlexWrapper>
  );
};

export default Hamburger;
