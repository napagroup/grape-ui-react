import { getGlobalStyles } from 'src/global-styles';
import { colorCore, defaultStylesBase } from '../..';

const {
  colors: colorSchema,
} = getGlobalStyles();

describe('When given props with undefined color and bg', () => {
  it('should return the default styling for background and color', () => {
    const props = {};
    const expected = [{
      color: defaultStylesBase.color,
    }, {
      backgroundColor: defaultStylesBase.bg,
    }];
    expect(colorCore(props)).toEqual(expected);
  });
});

describe('When given props with color and bg', () => {
  it('should return the default styling for background and color', () => {
    const props = {
      bg: 'green.dark',
      color: 'green',
    };
    const expected = [{
      color: colorSchema.green.base,
    }, {
      backgroundColor: colorSchema.green.dark,
    }];
    expect(colorCore(props)).toEqual(expected);
  });
});
