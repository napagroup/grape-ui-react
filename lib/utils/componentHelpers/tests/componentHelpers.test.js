'use strict';

var _componentHelpers = require('../componentHelpers');

var defaultValue = 'inherit';
describe('When resolving a color given an empty string or non-string value', function () {
  it('should return \'inherit\' when color is undefined (implicit)', function () {
    expect((0, _componentHelpers.resolveColor)()).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is undefined (explicit)', function () {
    expect((0, _componentHelpers.resolveColor)(undefined)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is null', function () {
    expect((0, _componentHelpers.resolveColor)(null)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is false', function () {
    expect((0, _componentHelpers.resolveColor)(false)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is empty string', function () {
    expect((0, _componentHelpers.resolveColor)('')).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is 0', function () {
    expect((0, _componentHelpers.resolveColor)(0)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is NaN', function () {
    expect((0, _componentHelpers.resolveColor)(NaN)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is Infinity', function () {
    expect((0, _componentHelpers.resolveColor)(Infinity)).toEqual(defaultValue);
  });
});

describe('When resolving a color given an unrecognized color', function () {
  it('should return \'inherit\' when color is ChocolateCoveredTunaEnchiladas', function () {
    expect((0, _componentHelpers.resolveColor)('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});

describe('When resolving a color given an recognized color', function () {
  it('should return a base color', function () {
    expect((0, _componentHelpers.resolveColor)('green')).toEqual('hsl(122.4, 39.4%, 49.2%)');
  });
  it('should return a dark color', function () {
    expect((0, _componentHelpers.resolveColor)('green.dark')).toEqual('hsl(122.4, 39.4%, 29.2%)');
  });
  it('should return a light color', function () {
    expect((0, _componentHelpers.resolveColor)('green.light')).toEqual('hsl(122.4, 39.4%, 69.2%)');
  });
});