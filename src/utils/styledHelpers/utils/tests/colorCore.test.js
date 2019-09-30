/* eslint-disable import/no-duplicates */
import { getGlobalStyles } from 'src/global-styles';
import { colorCore, defaultStylesBase } from '../..';

const {
  colors: colorSchema,
} = getGlobalStyles();

describe('When given props with undefined color and bg', () => {
  it('should return the default styling for background and color', () => {
    const props = {};
    const expected = {
      backgroundColor: defaultStylesBase.bg,
      color: defaultStylesBase.color,
    };
    expect(colorCore(props)).toEqual(expected);
  });
});

describe('When given props with color and bg', () => {
  it('should return the default styling for background and color', () => {
    const props = {
      bg: 'green.dark',
      color: 'green',
    };
    const expected = {
      backgroundColor: colorSchema.green.dark,
      color: colorSchema.green.base,
    };
    expect(colorCore(props)).toEqual(expected);
  });
});
