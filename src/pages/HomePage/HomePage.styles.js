import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slide from 'components/molecules/Slide/Slide';

export const InfoBox = styled.div`
  display: flex;
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

export const Header = styled.h1`
  color: #595959;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1.2rem;
  padding: 20px 10px;
  text-align: center;
  margin: 10px 0 0 0;
`;

export const Info = styled.div`
  background-color: #d4e4d4;
  color: #303030;
  padding: 120px 60px;
  line-height: 1.7rem;
`;

export const InfoLink = styled(Link)`
  color: #303030;
  text-decoration: underline;
`;
