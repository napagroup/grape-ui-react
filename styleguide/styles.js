import * as colors from 'src/assets/json/colors.json';

export default {
  Logo: {
    '@keyframes blink': {
      to: { opacity: 0 },
    },
    logo: {
      animation: 'blink ease-in-out 300ms infinite',
      color: colors.black.base,
    },
  },
  Version: {
    version: {
      color: colors.black.light,
    },
  },
};
