"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _buttonThemes = require("../buttonThemes");

var _resolvers = require("../resolvers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buttonVariant = {
  contained: {
    danger: {
      backgroundColor: 'brandDanger',
      color: 'white',
      focusColor: 'brandDanger.light',
      hoverColor: 'brandDanger.dark'
    },
    "default": {
      backgroundColor: null,
      color: null
    },
    light: {
      backgroundColor: 'brandLight',
      color: 'black',
      focusColor: 'brandLight.light',
      hoverColor: 'brandLight.dark'
    },
    primary: {
      backgroundColor: 'brandPrimary',
      color: null,
      focusColor: 'brandPrimary.light',
      hoverColor: 'brandPrimary.dark'
    }
  },
  magic: {
    danger: {
      backgroundColor: 'brandDanger',
      color: 'brandDanger.light'
    }
  },
  plain: {
    danger: {
      backgroundColor: null,
      color: 'brandDanger'
    },
    "default": {
      backgroundColor: null,
      color: null
    },
    primary: {
      backgroundColor: null,
      color: 'brandPrimary'
    }
  }
};
var colors = {
  black: {
    base: 'hsl(0, 0%, 25%)',
    dark: 'hsl(0, 0%, 0%)',
    light: 'hsl(0, 0%, 35%)'
  },
  brandDanger: {
    base: 'hsl(4.1, 89.6%, 58.4%)',
    dark: 'hsl(4.1, 89.6%, 40.4%)',
    light: 'hsl(4.1, 89.6%, 68.4%)'
  },
  brandLight: {
    base: 'hsl(0, 0%, 98%)',
    dark: 'hsl(0, 0%, 90%)',
    light: 'hsl(0, 0%, 100%)'
  },
  brandPrimary: {
    base: 'hsl(323.3, 84.6%, 28%)',
    dark: 'hsl(302.9, 33.9%, 23.7%)',
    light: 'hsl(312.8, 67.8%, 47.5%)'
  },
  white: {
    base: 'hsl(0, 0%, 98%)',
    dark: 'hsl(0, 0%, 90%)',
    light: 'hsl(0, 0%, 100%)'
  }
};
var globalOverrides = {
  buttonVariant: buttonVariant,
  colors: colors
};
var plainVariants = {
  danger: {
    backgroundColor: null,
    color: (0, _resolvers.resolveColor)('brandDanger', globalOverrides)
  },
  "default": {
    backgroundColor: null,
    color: null
  },
  primary: {
    backgroundColor: null,
    color: (0, _resolvers.resolveColor)('brandPrimary', globalOverrides)
  }
};
var containedVariants = {
  'contained-danger': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandDanger.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandDanger.dark', globalOverrides)
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandDanger', globalOverrides),
    color: (0, _resolvers.resolveColor)('white', globalOverrides)
  },
  'contained-default': {
    backgroundColor: null,
    color: null
  },
  'contained-light': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandLight.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandLight.dark', globalOverrides)
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandLight', globalOverrides),
    color: (0, _resolvers.resolveColor)('black', globalOverrides)
  },
  'contained-primary': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandPrimary.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandPrimary.dark', globalOverrides)
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandPrimary', globalOverrides),
    color: null
  }
};
var magicVariants = {
  'magic-danger': {
    backgroundColor: (0, _resolvers.resolveColor)('brandDanger', globalOverrides),
    color: (0, _resolvers.resolveColor)('brandDanger.light', globalOverrides)
  }
};
describe('When given an empty array', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  test('should return return an empty object', function () {
    var type = [];
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual({});
  });
});
describe('When given a truthy value that is not an array', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  test('should return return null', function () {
    // Arrange
    var type = {}; // Act

    var actual = (0, _buttonThemes.buttonThemes)(type); // Assert

    expect(actual).toBeNull();
  });
});
describe('When given null (falsy)', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, {}, containedVariants, {}, magicVariants);
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return all available themes', function () {
    var type = null;
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given an array of types', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, {}, containedVariants);
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return all variants of the specified types', function () {
    var type = ['plain', 'contained'];
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given no type', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, {}, containedVariants, {}, magicVariants);
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return ALL variants', function () {
    var type = null;
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});