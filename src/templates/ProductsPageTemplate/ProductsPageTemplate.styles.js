import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';
import { breakpoints, colors } from 'theme/theme';

export const Header = styled.header`
  display: grid;
  grid-template-rows: 65% 35%;
  width: 100%;
  margin: 0 0 20px;
  justify-items: center;
  align-items: center;

  @media ${breakpoints.desktop} {
    margin: 0 0 40px;
  }
`;

export const Title = styled(Text)`
  font-size: 1.5rem;
  height: 100%;
  margin: 0;
  padding: 30px 0;
  color: ${colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media ${breakpoints.bigPhone} {
    justify-content: flex-end;
    border: 1px solid ${colors.veryLightGrey};
  }
`;

export const Category = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  border: 1px solid ${colors.veryLightGrey};
  font-weight: normal;
  padding: 25px 0;
  margin: 0;

  @media ${breakpoints.bigPhone} {
    width: 25%;
    border: none;
    border-left: 1px solid ${colors.veryLightGrey};
  }

  @media ${breakpoints.desktop} {
    width: 20%;
  }
`;

export const Content = styled.div`
  @media ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: 23% 77%;
    position: relative;
    width: 100%;
  }
`;
