import Text from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { breakpoints, colors, sizes } from 'theme/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const BuyButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: none;
  background-color: ${colors.white};
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.7s ease-in-out;
  cursor: pointer;
  right: 7px;
  bottom: 7px;
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
    width: 100%;
    height: 100%;
  }
`;

export const Paragraph = styled(Text)`
  justify-self: center;
  align-self: center;
  font-size: ${sizes.s};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 10px 0 0 0;
`;
