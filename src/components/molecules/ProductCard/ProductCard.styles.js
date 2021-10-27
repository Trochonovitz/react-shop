import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 173px;
  object-fit: cover;
  cursor: pointer;
`;

export const Header2 = styled.h4`
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: #595959;
  margin: 10px 0 0 0;
  font-weight: normal;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 3px solid black;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
`;
