import styled from 'styled-components';

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
  background-color: #fff;
  box-shadow: rgb(184, 182, 184) 2px 26px 68px -21px;
  color: #1c1b1b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

export const StyledTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  margin: 0;
`;

export const StyledParagraph = styled.p`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.2rem;
`;

export const ButtonWithUnderline = styled.button`
  background-color: transparent;
  color: #595959;
  border: none;
  padding: 0 0 5px 0;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #595959;
    position: absolute;
    top: 100%;
    left: 0;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      transform: scaleX(0);
    }
  }
`;
