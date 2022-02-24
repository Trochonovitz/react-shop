import styled from 'styled-components';
import Text from 'components/atoms/Text/Text';

export const Header = styled.header`
  display: grid;
  grid-template-rows: 70% 30%;
  width: 100%;
  margin: 0 0 20px;
  justify-items: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 1.5rem;
  height: 100%;
  margin: 0;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Category = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  font-weight: normal;
  padding: 15px 0;
  margin: 0;

  /* &:first-child {
    border-right: 1px solid #e0e0e0;
  } */
`;
