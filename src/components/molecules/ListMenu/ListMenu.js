import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 250px;

  position: absolute;
  right: 0;
  top: 0;

  transform: ${(props) =>
    props.isVisible ? 'translateX(-50px)' : 'translateX(250px)'};
  transition: transform 0.3s 0.1s ease-in-out;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const StyledElement = styled.li`
  padding: 10px 0;
  font-weight: 600;
  text-decoration: none;
  color: black;
`;

const ListMenu = ({ isVisible, state }) => (
  <StyledWrapper isVisible={isVisible}>
    <StyledUl>
      <StyledElement as={Link} to="/basket">
        Basket ({state.length})
      </StyledElement>
      <StyledElement as={Link} to="/contact">
        Contact
      </StyledElement>
      <StyledElement as={Link} to="/support">
        Support
      </StyledElement>
    </StyledUl>
  </StyledWrapper>
);

ListMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  state: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(ListMenu);
