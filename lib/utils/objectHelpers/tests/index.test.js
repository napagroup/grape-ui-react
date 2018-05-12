'use strict';

var _objectHelpers = require('../objectHelpers');

describe('When resolving nested JavaScript objects via a string key path', function () {
  it('should return the property value of the intended path', function () {
    var foo = { bar: { baz: 'bat' } };
    var actual = (0, _objectHelpers.resolve)('bar.baz', foo);
    expect(actual).toEqual('bat');
    actual = (0, _objectHelpers.resolve)('bar', foo);
    expect(actual).toEqual(foo.bar);
  });
  it('should return undefined of for unresolveable paths', function () {
    var foo = { bar: { baz: 'bat' } };
    var actual = (0, _objectHelpers.resolve)('bar.bart', foo);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)('bat', foo);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)('..', foo);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined, for paths that are not a string', function () {
    var foo = { bar: { baz: 'bat' } };
    var actual = (0, _objectHelpers.resolve)(42, foo);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)(true, foo);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)({}, foo);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)([], foo);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)(null, foo);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)(undefined, foo);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined, when obj is not an object or not a valid object', function () {
    var actual = (0, _objectHelpers.resolve)('bar', 42);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)('bar', true);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)('bar', []);
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)('bar', {});
    expect(actual).toEqual(undefined);
    actual = (0, _objectHelpers.resolve)('bar', null);
    expect(actual).toEqual(undefined);
  });
});

describe('When determining if a string key is a nested prop', function () {
  it('should return true when given a valid nested property path, false otherwise', function () {
    var actual = (0, _objectHelpers.isKeyNestedProp)('bar');
    expect(actual).toBeFalsy();
    actual = (0, _objectHelpers.isKeyNestedProp)('.bar');
    expect(actual).toBeFalsy();
    actual = (0, _objectHelpers.isKeyNestedProp)('bar.');
    expect(actual).toBeFalsy();
    actual = (0, _objectHelpers.isKeyNestedProp)('0bar');
    expect(actual).toBeFalsy();
    actual = (0, _objectHelpers.isKeyNestedProp)('bar.bat');
    expect(actual).toBeTruthy();
    actual = (0, _objectHelpers.isKeyNestedProp)('foo.bar.bat');
    expect(actual).toBeTruthy();
    actual = (0, _objectHelpers.isKeyNestedProp)(null);
    expect(actual).toBeFalsy();
  });
});