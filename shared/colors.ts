export const colors = {
  primary: '#FC5842',
  secondaryDeepRed: '#D1311C',
  secondaryLightRed: '#FFF0EE',
  neutral: {
    black: '#181818',
    lightBlack: '#272727',
    deepGrey: '#393939',
    grey: '#969696',
    lightGrey: '#C7C7C7',
    fadedGrey: '#D7D7D7',
    almostWhite: '#FBFBFB',
    white: '#FFFFFF',
  },
  system: {
    green: '#05C168',
    pink: '#FF5A65',
    lightPink: '#FFBEC2',
    fadedPink: '#FFEFF0',
    orange: '#FF9E2C',
  },
};
export const colorMap = {
  primary: {
    initial: colors.primary,
    hover: colors.secondaryDeepRed,
    focus: 'rgba(252, 66, 66, 0.2)',
  },
  secondary: {
    initial: colors.neutral.white,
    hover: colors.neutral.almostWhite,
    focus: 'rgba(255, 255, 255, 0.3)',
  },
  text: {
    initial: 'inherit',
    hover: 'none',
    focus: 'none',
  },
};
