import { cleaveOption, isCleaveInput } from '../utils';
describe('When using isCleaveInput with Cleave related props', function () {
  it('should return true for curreny', function () {
    var props = {
      currency: true,
      value: '123'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for phone', function () {
    var props = {
      phone: true,
      value: '212-123-1414'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for numeric', function () {
    var props = {
      numeric: true,
      value: '2123'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for integer', function () {
    var props = {
      integer: true,
      value: '2123'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for postalCode', function () {
    var props = {
      postalCode: true,
      value: '21123'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
  it('should return true for formatterOptions', function () {
    var props = {
      formatterOptions: {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
      },
      value: '21123'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(true);
  });
});
describe('When using isCleaveInput with no Cleave related props', function () {
  it('should return false for email', function () {
    var props = {
      email: true,
      value: 'pchung@napa.com'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(false);
  });
  it('should return false for password', function () {
    var props = {
      password: true,
      value: '2sadgas4'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(false);
  });
  it('should return false for normal input', function () {
    var props = {
      value: '21123'
    };
    var actual = isCleaveInput(props);
    expect(actual).toEqual(false);
  });
});
describe('When using cleaveOption with currency on props', function () {
  it('should return currency Options', function () {
    var expected = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      prefix: '$'
    };
    var props = {
      currency: true,
      value: '123'
    };
    var actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with integer on props', function () {
  it('should return integer Options', function () {
    var expected = {
      numeral: true,
      numeralDecimalScale: 0,
      numeralThousandsGroupStyle: 'thousand'
    };
    var props = {
      integer: true,
      value: '123'
    };
    var actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with numeric on props', function () {
  it('should return integer Options', function () {
    var expected = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    };
    var props = {
      numeric: true,
      value: '123'
    };
    var actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with postalCode on props', function () {
  it('should return integer Options', function () {
    var expected = {
      blocks: [5, 4],
      delimiter: '-',
      delimiterLazyShow: true,
      numericOnly: true
    };
    var props = {
      postalCode: true,
      value: '22222'
    };
    var actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});
describe('When using cleaveOption with postalCode on props', function () {
  it('should return integer Options', function () {
    var expected = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    };
    var props = {
      formatterOptions: {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
      },
      value: '21123'
    };
    var actual = cleaveOption(props);
    expect(actual).toEqual(expected);
  });
});