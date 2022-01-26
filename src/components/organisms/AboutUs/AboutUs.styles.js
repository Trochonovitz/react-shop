import styled from 'styled-components';
import { colors } from 'theme/theme';
import Text from 'components/atoms/Text/Text';

export const AboutUsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-image: url('https://cdn.shopify.com/s/files/1/0594/6743/2116/files/papierniczeni_onas_01_750x960_crop_center.jpg?v=1634144287');
  background-position: center;
  background-size: cover;
  margin: 55px 0 0 0;
`;

export const AboutUsInfo = styled.div`
  width: 70%;
  height: 50%;
  background-color: ${colors.white};
  box-shadow: rgb(184, 182, 184) 2px 26px 68px -21px;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  @media (min-width: 567px) {
    width: 50%;
    height: 60%;
  }
`;

export const Paragraph = styled(Text)`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.2rem;
`;
