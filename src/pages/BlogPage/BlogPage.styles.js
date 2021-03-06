import styled, { css } from 'styled-components';
import { breakpoints } from 'theme/theme';
import Text from 'components/atoms/Text/Text';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  padding: 30px 0;
  font-size: 1.4rem;
  text-align: center;
`;

export const BlogContent = styled.div`
  padding: 0 20px;

  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
    width: 60%;
  }
`;

export const CategorySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px 0;
`;

export const CategoryButton = styled.button`
  background: transparent;
  border: none;
  color: #595959;
  font-family: 'Montserrat';
  cursor: pointer;
  text-transform: uppercase;
  margin: 0 10px 10px 10px;
  padding: 0px;
  letter-spacing: 0.1em;

  ${({ activeCategory, pickedCategory }) =>
    activeCategory === pickedCategory &&
    css`
      border-bottom: 1px solid #595959;
    `}
`;
