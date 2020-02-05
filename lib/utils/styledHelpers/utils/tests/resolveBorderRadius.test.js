"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _globalStyles = require("../../../../global-styles");

var mockGlobalStyles = _interopRequireWildcard(_globalStyles);

var _resolvers = require("../resolvers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('resolveBorderRadius', function () {
  var border = {
    borderRadius: {
      base: '4px',
      lg: '8px',
      sm: '2px'
    }
  };
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      border: border
    });
  });
  it('should return the base value 4px if no props', function () {
    // Act
    var actual = (0, _resolvers.resolveBorderRadius)({}); // Assert

    var expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the base value 4px if no sm, lg or borderRadius or globalOverrides given', function () {
    // Arrange
    var props = {}; // Act

    var actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    var expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the sm specified size', function () {
    // Arrange
    var props = {
      sm: true
    }; // Act

    var actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    var expected = '2px';
    expect(actual).toBe(expected);
  });
  it('should return the lg specified size', function () {
    // Arrange
    var props = {
      lg: true
    }; // Act

    var actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    var expected = '8px';
    expect(actual).toBe(expected);
  });
  it('should return a custom border radius', function () {
    // Arrange
    var borderRadius = '50%';
    var props = {
      borderRadius: borderRadius
    }; // Act

    var actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    expect(actual).toBe(borderRadius);
  });
});