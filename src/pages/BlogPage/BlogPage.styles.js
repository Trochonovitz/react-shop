import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import Text from 'components/atoms/Text/Text';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled(Text)`
  padding: 30px 0;
  font-size: 1.4rem;
  text-align: center;
`;

export const BlogContent = styled.div`
  @media ${breakpoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
    activeCategory === pickedCategory && 'border-bottom: 1px solid #595959'}
`;
