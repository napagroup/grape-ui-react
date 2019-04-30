"use strict";

var _globalStyles = require("../../../../global-styles");

var mockGlobalStyles = _interopRequireWildcard(_globalStyles);

var _resolvers = require("../resolvers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    var actual = (0, _resolvers.resolveBorderRadius)(undefined); // Assert

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