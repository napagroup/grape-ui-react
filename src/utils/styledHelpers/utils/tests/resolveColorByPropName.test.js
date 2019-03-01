import { defaultStylesBase, resolveColorByPropName } from '../..';
import { getGlobalStyles } from 'src/global-styles';

const {
  colors: colorSchema,
} = getGlobalStyles();

describe('When given props with propName undefined', () => {
  it('should return the default color', () => {
    const props = {};
    expect(resolveColorByPropName(props)).toEqual(defaultStylesBase.color);
  });
});

describe('When given props with bg undefined and default color explicitly defined', () => {
  it('should return the explicit default color', () => {
    const props = { };
    const defaultColor = 'transparent';
    expect(resolveColorByPropName(props, 'bg', defaultColor)).toEqual(defaultColor);
  });
});

describe('When given props with color defined', () => {
  it('should return the color from a default theme', () => {
    const props = { color: 'green.dark' };
    expect(resolveColorByPropName(props)).toEqual(colorSchema.green.dark);
  });
});

describe('When given props with bg defined', () => {
  it('should return the bg color from a default theme', () => {
    const props = { bg: 'green.dark' };
    expect(resolveColorByPropName(props, 'bg')).toEqual(colorSchema.green.dark);
  });
});

describe('When given props with bg defined mistakenly attempting to resolve property name color', () => {
  it('should return the default color value', () => {
    const props = { bg: 'green.dark' };
    expect(resolveColorByPropName(props, 'color')).toEqual(defaultStylesBase.color);
  });
});

describe('When given props with color defined and a provided colors theme', () => {
  it('should return the color from a default theme', () => {
    const theme = {
      colors: {
        yellow: {
          base: 'hsl(65, 65%, 50%)',
        },
      },
    };
    const props = {
      color: 'yellow.base',
      theme,
    };
    expect(resolveColorByPropName(props)).toEqual(theme.colors.yellow.base);
  });
});
