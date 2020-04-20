import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import * as mockGlobalStyles from 'src/global-styles';
import { buttonThemes } from '../buttonThemes';
import { resolveColor } from '../resolvers';
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
    color: resolveColor('brandDanger', globalOverrides)
  },
  "default": {
    backgroundColor: null,
    color: null
  },
  primary: {
    backgroundColor: null,
    color: resolveColor('brandPrimary', globalOverrides)
  }
};
var containedVariants = {
  'contained-danger': {
    '&:focus': {
      backgroundColor: resolveColor('brandDanger.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: resolveColor('brandDanger.dark', globalOverrides)
    },
    backgroundColor: resolveColor('brandDanger', globalOverrides),
    color: resolveColor('white', globalOverrides)
  },
  'contained-default': {
    backgroundColor: null,
    color: null
  },
  'contained-light': {
    '&:focus': {
      backgroundColor: resolveColor('brandLight.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: resolveColor('brandLight.dark', globalOverrides)
    },
    backgroundColor: resolveColor('brandLight', globalOverrides),
    color: resolveColor('black', globalOverrides)
  },
  'contained-primary': {
    '&:focus': {
      backgroundColor: resolveColor('brandPrimary.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: resolveColor('brandPrimary.dark', globalOverrides)
    },
    backgroundColor: resolveColor('brandPrimary', globalOverrides),
    color: null
  }
};
var magicVariants = {
  'magic-danger': {
    backgroundColor: resolveColor('brandDanger', globalOverrides),
    color: resolveColor('brandDanger.light', globalOverrides)
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
    var actual = buttonThemes(type);
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

    var actual = buttonThemes(type); // Assert

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
    var actual = buttonThemes(type);
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
    var actual = buttonThemes(type);
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
    var actual = buttonThemes(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});