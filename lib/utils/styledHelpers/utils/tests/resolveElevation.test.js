"use strict";

var _cssDefaults = require("../../cssDefaults");

var _resolvers = require("../resolvers");

const inheritExpected = `z-index: ${_cssDefaults.CSS_INHERIT_VALUE}; box-shadow: ${_cssDefaults.CSS_INHERIT_VALUE}`;
describe('resolveElevation', () => {
  // TODO: Discuss this test case with the team
  xit('should return the inherit value if no depth or globalOverrides given', () => {
    // Act
    const actual = (0, _resolvers.resolveElevation)(); // Assert

    expect(actual).toBe(inheritExpected);
  }); // TODO: Discuss this test case with the team

  xit('should return the inherit value depth is not a string', () => {
    // Act
    const actual = (0, _resolvers.resolveElevation)(5); // Assert

    expect(actual).toBe(inheritExpected);
  });
  it('should return the inherit value depth is a string but not a valid value', () => {
    // Act
    const actual = (0, _resolvers.resolveElevation)('07'); // Assert

    expect(actual).toBe(inheritExpected);
  });
  it('should return the specified elevation value', () => {
    // Arrange
    const depth = '06'; // Act

    const actual = (0, _resolvers.resolveElevation)(depth); // Assert

    expect(actual).toBe('z-index: 1060; box-shadow: 0 32px 59px 3px rgba(0,0,0,0.14), 0 12px 72px 11px rgba(0,0,0,0.12), 0 14px 20px -8px rgba(0,0,0,0.2)');
  });
});