"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _cssDefaults = require("../../cssDefaults");

var _resolvers = require("../resolvers");

var _context;

var inheritExpected = (0, _concat["default"])(_context = "z-index: ".concat(_cssDefaults.CSS_INHERIT_VALUE, "; box-shadow: ")).call(_context, _cssDefaults.CSS_INHERIT_VALUE);
describe('resolveElevation', function () {
  // TODO: Discuss this test case with the team
  xit('should return the inherit value if no depth or globalOverrides given', function () {
    // Act
    var actual = (0, _resolvers.resolveElevation)(); // Assert

    expect(actual).toBe(inheritExpected);
  }); // TODO: Discuss this test case with the team

  xit('should return the inherit value depth is not a string', function () {
    // Act
    var actual = (0, _resolvers.resolveElevation)(5); // Assert

    expect(actual).toBe(inheritExpected);
  });
  it('should return the inherit value depth is a string but not a valid value', function () {
    // Act
    var actual = (0, _resolvers.resolveElevation)('07'); // Assert

    expect(actual).toBe(inheritExpected);
  });
  it('should return the specified elevation value', function () {
    // Arrange
    var depth = '06'; // Act

    var actual = (0, _resolvers.resolveElevation)(depth); // Assert

    expect(actual).toBe('z-index: 1060; box-shadow: 0 32px 59px 3px rgba(0,0,0,0.14), 0 12px 72px 11px rgba(0,0,0,0.12), 0 14px 20px -8px rgba(0,0,0,0.2)');
  });
});