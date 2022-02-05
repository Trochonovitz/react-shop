import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints, colors } from 'theme/theme';
import Text from 'components/atoms/Text/Text';

export const Title = styled(Text)`
  margin: 50px 0;
  text-align: center;
  width: 100%;
  color: ${colors.darkGrey};
`;

export const Info = styled.div`
  width: 100%;
  background-color: ${colors.lightGreen};
  color: ${colors.black};
  padding: 120px 60px;
  line-height: 1.7rem;

  @media ${breakpoints.laptop} {
    height: 100%;
  }
`;

export const InfoLink = styled(Link)`
  color: ${colors.black};
  text-decoration: underline;
`;

export const NewItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${breakpoints.laptop} {
    display: grid;
    grid-template-columns: 30% 70%;
  }

  /* @media ${breakpoints.desktop} {
    margin: 50px 0 0 0;
    padding: 50px 100px;
    height: 400px;
  } */
`;
