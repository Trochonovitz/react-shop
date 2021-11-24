import styled from 'styled-components';

export const ButtonWithUnderline = styled.button`
  background-color: transparent;
  color: #595959;
  border: none;
  padding: 0 0 5px 0;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #595959;
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      transform: scaleX(0);
    }
  }
`;
