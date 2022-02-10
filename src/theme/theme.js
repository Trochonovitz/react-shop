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
  maxTablet: '(min-width: 768px) and (max-width: 992px)',
  laptop: '(min-width: 992px)',
  desktop: '(min-width: 1100px)',
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
