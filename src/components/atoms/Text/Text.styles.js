import styled, { css } from 'styled-components';
import { colors, sizes, slideInAnimation } from 'theme/theme';

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
        font-size: ${sizes.m};
      `;
    case types.subtitle:
      return css`
        ${TitleMixin}
        font-size: ${sizes.s};
      `;

    default:
      return css`
        color: ${colors.darkGrey};
        margin: 0px;
      `;
  }
};

export const StyledText = styled.p`
  ${({ textType }) => getTextType(textType)}
`;
