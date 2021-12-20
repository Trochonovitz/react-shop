import styled from 'styled-components';
import { breakpoints } from 'theme/theme';
import { Link } from 'react-router-dom';
import { Title } from 'components/atoms/Title/Title';

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f1e4d8;
  color: #343434;
  padding: 15px;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-align: center;
  line-height: 1.2rem;
`;

export const StyledTitle = styled(Title)`
  font-size: 1.2rem;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`;

export const Info = styled.div`
  width: 100%;
  background-color: #d4e4d4;
  color: #303030;
  padding: 120px 60px;
  line-height: 1.7rem;

  @media ${breakpoints.desktop} {
    width: 30%;
  }
`;

export const StyledP = styled.p`
  @media ${breakpoints.desktop} {
    width: 70%;
    height: 100%;
    border: 1px solid black;
    text-align: center;
  }
`;

export const InfoLink = styled(Link)`
  color: #303030;
  text-decoration: underline;
`;

export const NewItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${breakpoints.desktop} {
    margin: 50px 0 0 0;
    padding: 50px 100px;
    flex-direction: row;
    height: 400px;
  }
`;
