import Text from 'components/atoms/Text/Text';
import styled from 'styled-components';
import { colors, sizes } from 'theme/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  margin: 0 0 20px 0;
`;

export const BuyButton = styled.button`
  width: 50px;
  height: 50px;
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
  cursor: pointer;
  width: 100%;
  padding: 0 0 20px 0;
`;

export const Paragraph = styled(Text)`
  font-size: ${sizes.s};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 10px 0 0 0;
`;
