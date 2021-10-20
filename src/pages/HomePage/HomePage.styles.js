import styled, { css } from 'styled-components';
import { Button } from '../../components/atoms/Buttton/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-image: url('https://cdn.shopify.com/s/files/1/0594/6743/2116/files/przedsprzedaz_kalendarzy2022_04_x800.jpg?v=1632593532');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainInfo = styled.div`
  margin: 0 0 50px 20px;
`;

export const StyledTitle = styled.h1`
  color: #fff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 1.3rem;

  @keyframes slidein {
    from {
      transform: translateY(100%);
      opacity: 0;
    }

    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  animation: 1s ease-in-out slidein;
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

export const StyledButton = styled(Button)`
  ${({ animated }) =>
    animated &&
    css`
      @keyframes slidein {
        from {
          transform: translateY(100%);
          opacity: 0;
        }

        to {
          transform: translateY(0%);
          opacity: 1;
        }
      }

      animation: 1s ease-in-out slidein;
    `}
`;
