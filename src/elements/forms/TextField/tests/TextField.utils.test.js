import { cleaveOption, isCleaveInput } from '../utils';

describe('When using isCleaveInput with Cleave related props', () => {
  it('should return true for curreny', () => {
    const props = { currency: true, value: '123' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for phone', () => {
    const props = { phone: true, value: '212-123-1414' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for numeric', () => {
    const props = { numeric: true, value: '2123' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for integer', () => {
    const props = { integer: true, value: '2123' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for postalCode', () => {
    const props = { postalCode: true, value: '21123' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for formatterOptions', () => {
    const props = {
      formatterOptions: {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
      },
      value: '21123',
    };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
});
describe('When using isCleaveInput with no Cleave related props', () => {
  it('should return false for email', () => {
    const props = { email: true, value: 'pchung@napa.com' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(false);
  });
  it('should return false for password', () => {
    const props = { password: true, value: '2sadgas4' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(false);
  });
  it('should return false for normal input', () => {
    const props = { value: '21123' };
    const actual = isCleaveInput(props);
    expect(actual).toEqual(false);
  });
});
describe('When using cleaveOption with currency on props', () => {
  it('should return currency Options', () => {
    const expected = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      prefix: '$',
    };
    const props = { currency: true, value: '123' };
    const actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with integer on props', () => {
  it('should return integer Options', () => {
    const expected = {
      numeral: true,
      numeralDecimalScale: 0,
      numeralThousandsGroupStyle: 'thousand',
    };
    const props = { integer: true, value: '123' };
    const actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with numeric on props', () => {
  it('should return integer Options', () => {
    const expected = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    };
    const props = { numeric: true, value: '123' };
    const actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with postalCode on props', () => {
  it('should return integer Options', () => {
    const expected = {
      blocks: [5, 4],
      delimiter: '-',
      delimiterLazyShow: true,
      numericOnly: true,
    };
    const props = { postalCode: true, value: '22222' };
    const actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with postalCode on props', () => {
  it('should return integer Options', () => {
    const expected = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    };
    const props = {
      formatterOptions: {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
      },
      value: '21123',
    };
    const actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
