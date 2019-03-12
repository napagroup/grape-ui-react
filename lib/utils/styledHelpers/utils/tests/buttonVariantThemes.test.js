'use strict';

var _buttonThemes = require('../buttonThemes');

var _resolvers = require('../resolvers');

describe('When given a plain type (default type)', function () {
  it('should return variants of that type', function () {
    var type = 'plain';
    var actual = (0, _buttonThemes.getButtonThemesByVariant)(type);
    var expected = {
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
    expect(actual).toEqual(expected);
  });
});

describe('When given a non plain type', function () {
  it('should return variants of that type', function () {
    var type = 'contained';
    var actual = (0, _buttonThemes.getButtonThemesByVariant)(type);
    var expected = {
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
    expect(actual).toEqual(expected);
  });
});

describe('When given no type', function () {
  it('should return an empty object', function () {
    var type = null;
    var actual = (0, _buttonThemes.getButtonThemesByVariant)(type);
    var expected = {};
    expect(actual).toEqual(expected);
  });
});