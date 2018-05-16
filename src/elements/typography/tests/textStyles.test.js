import { textStylesBase } from '../textStyles';

const defaultParams = {
  color: 'inherit',
  fontSizeBase: '1rem',
  fontWeight: 'inherit',
  italic: false,
  lg: false,
  sm: false,
  textAlign: 'inherit',
  scaleFactor: '1',
};

const renderTest = ({
  fontSizeBase, italic, color, fontWeight, textAlign, scaleFactor,
}) =>
  `
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: calc(${fontSizeBase} * ${scaleFactor});
    font-weight: ${fontWeight};
    letter-spacing: inherit;
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
  it('should override color style when passed in a valid color', () => {
    const green = 'hsl(122.4, 39.4%, 49.2%)';
    const actualTextStyles = textStylesBase({ color: 'green' });
    expect(actualTextStyles).toEqual(renderTest({
      ...defaultParams,
      color: green,
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
});
