'use strict';

var _buttonThemes = require('../buttonThemes');

var _resolvers = require('../resolvers');

var plainVariants = {
  danger: {
    backgroundColor: null,
    color: (0, _resolvers.resolveColor)('brandDanger')
  },
  default: {
    backgroundColor: null,
    color: null
  },
  primary: {
    backgroundColor: null,
    color: (0, _resolvers.resolveColor)('brandPrimary')
  }
};
var containedVariants = {
  'contained-danger': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandDanger.light')
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandDanger.dark')
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandDanger'),
    color: (0, _resolvers.resolveColor)('white')
  },
  'contained-default': {
    backgroundColor: null,
    color: null
  },
  'contained-light': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandLight.light')
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandLight.dark')
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandLight'),
    color: (0, _resolvers.resolveColor)('black')
  },
  'contained-primary': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandPrimary.light')
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandPrimary.dark')
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandPrimary'),
    color: null
  }
};
describe('When given an empty array', function () {
  it('should return return an empty object', function () {
    var type = [];
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual({});
  });
});

describe('When given null (falsy)', function () {
  it('should return all variants of the specified types', function () {
    var type = null;
    var actual = (0, _buttonThemes.buttonThemes)(type);

    var expected = Object.assign({}, plainVariants, containedVariants);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});

describe('When given an array of types', function () {
  it('should return all variants of the specified types', function () {
    var type = ['plain', 'contained'];
    var actual = (0, _buttonThemes.buttonThemes)(type);

    var expected = Object.assign({}, plainVariants, containedVariants);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});

describe('When given no type', function () {
  it('should return ALL variants', function () {
    var type = null;
    var actual = (0, _buttonThemes.buttonThemes)(type);
    var expected = Object.assign({}, plainVariants, containedVariants);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});