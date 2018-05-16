import { textStylesBase } from '../textStyles';
import { getGlobalStyles } from 'src/global-styles';

const { fontFamily: fontFamilySchema } = getGlobalStyles();

const defaultParams = {
  color: 'inherit',
  fontFamily: 'base',
  fontSizeBase: '1rem',
  fontWeight: 'inherit',
  italic: false,
  kerning: 'inherit',
  lg: false,
  sm: false,
  textAlign: 'inherit',
  scaleFactor: '1',
};

const renderTest = ({
  fontFamily, fontSizeBase, kerning, italic, color, fontWeight, textAlign, scaleFactor,
}) =>
  `
    font-family: ${fontFamilySchema[fontFamily]};
    font-size: calc(${fontSizeBase} * ${scaleFactor});
    font-weight: ${fontWeight};
    letter-spacing: ${kerning};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
    color: ${color};
    text-align: ${textAlign};
  `;
const defaultTextStyles = renderTest(defaultParams);
describe('When resolving base text-styles', () => {
  it('should return default styles when calling the default function', () => {
    const actualTextStyles = textStylesBase();
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
  it('should return default styles when passed in a falsy value', () => {
    const actualTextStyles = textStylesBase(undefined);
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
  it('should return default styles when passed in an array', () => {
    const actualTextStyles = textStylesBase([]);
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
  it('should return default styles when passed in an empty object literal', () => {
    const actualTextStyles = textStylesBase({});
    expect(actualTextStyles).toEqual(defaultTextStyles);
  });
});

describe('When overriding text-styles', () => {
  it('should override the font-family', () => {
    const fontFamily = 'sansSerif';
    const actualTextStyles = textStylesBase({ fontFamily });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      fontFamily,
    }));
  });
  it('should override font-size calc when passed in sm', () => {
    const actualTextStyles = textStylesBase({ sm: true });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      scaleFactor: '.8',
    }));
  });
  it('should override font-size calc when passed in lg', () => {
    const actualTextStyles = textStylesBase({ lg: true });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      scaleFactor: '1.2',
    }));
  });
  it('should override the font-weight', () => {
    const fontWeight = 'bolder';
    const actualTextStyles = textStylesBase({ fontWeight });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      fontWeight,
    }));
  });
  it('should override the letter-spacing when passed in kerning', () => {
    const kerning = 'normal';
    const actualTextStyles = textStylesBase({ kerning });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      kerning,
    }));
  });
  it('should override color style when passed in a valid color', () => {
    const green = 'hsl(122.4, 39.4%, 49.2%)';
    const actualTextStyles = textStylesBase({ color: 'green' });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      color: green,
    }));
  });
  it('should override the text alignment when passed in textAlign', () => {
    const textAlign = 'right';
    const actualTextStyles = textStylesBase({ textAlign });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      textAlign,
    }));
  });
});
