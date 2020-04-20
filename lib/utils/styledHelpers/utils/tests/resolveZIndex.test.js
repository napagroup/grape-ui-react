"use strict";

var _cssDefaults = require("../../cssDefaults");

var _resolvers = require("../resolvers");

describe('resolveZIndex', function () {
  it('should return the inherit value if no depth or globalOverrides given', function () {
    // Act
    var actual = (0, _resolvers.resolveZIndex)(); // Assert

    expect(actual).toBe(_cssDefaults.CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is not a string', function () {
    // Act
    var actual = (0, _resolvers.resolveZIndex)(5); // Assert

    expect(actual).toBe(_cssDefaults.CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is a string but not valid', function () {
    // Act
    var actual = (0, _resolvers.resolveZIndex)('07'); // Assert

    expect(actual).toBe(_cssDefaults.CSS_INHERIT_VALUE);
  });
  it('should return the specified z-index value', function () {
    // Arrange
    var depth = '06'; // Act

    var actual = (0, _resolvers.resolveZIndex)(depth); // Assert

    expect(actual).toBe('1060');
  });
});