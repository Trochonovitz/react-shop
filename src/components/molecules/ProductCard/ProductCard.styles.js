import styled from 'styled-components';
import { breakpoints } from 'theme/theme';

export const BuyButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: none;
  background: #fff;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.7s ease-in-out;
  cursor: pointer;
  right: 7px;
  bottom: 7px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
  text-decoration: none;
`;

export const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    ${BuyButton} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  justify-self: center;
  align-self: center;
  object-fit: cover;
  cursor: pointer;
  width: 350px;
  height: 350px;

  @media ${breakpoints.phone} {
    width: 544px;
    height: 544px;
  }

  @media ${breakpoints.bigPhone} {
    width: 100%;
    height: 100%;
  }
`;

export const Paragraph = styled.p`
  justify-self: center;
  align-self: center;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: #595959;
  margin: 10px 0 0 0;
  font-weight: normal;
  cursor: pointer;
`;
