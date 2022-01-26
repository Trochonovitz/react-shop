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
  desktop: '(min-width: 1140px)',
};

export const colors = {
  white: '#fff',
  black: '#303030',
  grey: '#363636',
  lightGrey: '#e6e6e6',
  darkGrey: '#595959',
  lightGreen: '#d4e4d4',
  darkGreen: '#bbccbb',
  transparnet: 'transparent',
};
