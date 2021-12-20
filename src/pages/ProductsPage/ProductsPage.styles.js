import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Header = styled.header`
  display: grid;
  grid-template-rows: 70% 30%;
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  border-bottom: 1px solid #e0e0e0;
  height: 100%;
  margin: 0;
  padding: 30px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

export const StyledSecondTitle = styled.h3`
  text-transform: uppercase;
  color: #595959;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  font-weight: normal;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    border-right: 1px solid #e0e0e0;
  }
`;
