import { keyframes } from 'styled-components';

export const slideInAnimation = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
}

100% {
  transform: translateY(0%);
  opacity: 1;
}
`;

export const breakpoints = {
  phone: '(min-width: 540px)',
  bigPhone: '(min-width: 642px)',
  tablet: '(min-width: 768px)',
  maxTablet: '(min-width: 768px) and (max-width: 991px)',
  laptop: '(min-width: 992px)',
  desktop: '(min-width: 1100px)',
  maxDesktop: '(max-width: 1100px)',
  fullHD: '(min-width: 1520px)',
};

export const colors = {
  white: '#fff',
  black: '#303030',
  grey: '#363636',
  lightGrey: '#e6e6e6',
  veryLightGrey: '#e0e0e0',
  darkGrey: '#595959',
  lightGreen: '#d4e4d4',
  darkGreen: '#bbccbb',
  darkBeige: '#f1e4d8',
  transparent: 'transparent',
};

export const sizes = {
  xxl: '1.7rem',
  xl: '1.3rem',
  l: '1.1rem',
  m: '.9rem',
  s: '.7rem',
};

export const icons = {
  account:
    'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z',
  search:
    'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z',
  emptyBasket:
    'M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z',
  basket:
    'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z',
};
