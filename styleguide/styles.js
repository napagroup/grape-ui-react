import * as colors from 'src/assets/json/colors.json';

module.exports = {
  Logo: {
    '@keyframes blink': {
      to: { opacity: 0 },
    },
    // We're changing the LogoRenderer component
    logo: {
      // We're changing the rsg--logo-XX class name inside the component
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
