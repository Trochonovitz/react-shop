import styled, { css } from 'styled-components';
import { colors, slideInAnimation } from 'theme/theme';

const TitleMixin = css`
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0;
`;

export const types = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
};

const getTextType = (textType) => {
  switch (textType) {
    case types.h1:
      return css`
        ${TitleMixin}
        font-weight: bold;
      `;
    case types.h2:
      return css`
        ${TitleMixin}

        ${({ animated }) =>
          animated &&
          css`
            animation: 1s ease-in-out ${slideInAnimation};
          `}
      `;
    case types.h3:
      return css`
        ${TitleMixin}
        font-size: 0.8rem;
      `;
    case types.subtitle:
      return css`
        ${TitleMixin}
        font-size: 0.7rem;
      `;

    default:
      return css`
        color: ${colors.darkGrey};
      `;
  }
};

export const StyledText = styled.p`
  ${({ textType }) => getTextType(textType)}
`;
