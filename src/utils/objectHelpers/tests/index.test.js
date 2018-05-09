import { isKeyNestedProp, resolve } from '../objectHelpers';

describe('When resolving nested JavaScript objects via a string key path', () => {
  it('should return the property value of the intended path', () => {
    const foo = { bar: { baz: 'bat' } };
    let actual = resolve('bar.baz', foo);
    expect(actual).toEqual('bat');
    actual = resolve('bar', foo);
    expect(actual).toEqual(foo.bar);
  });
  it('should return undefined of for unresolveable paths', () => {
    const foo = { bar: { baz: 'bat' } };
    let actual = resolve('bar.bart', foo);
    expect(actual).toEqual(undefined);
    actual = resolve('bat', foo);
    expect(actual).toEqual(undefined);
    actual = resolve('..', foo);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined, for paths that are not a string', () => {
    const foo = { bar: { baz: 'bat' } };
    let actual = resolve(42, foo);
    expect(actual).toEqual(undefined);
    actual = resolve(true, foo);
    expect(actual).toEqual(undefined);
    actual = resolve({}, foo);
    expect(actual).toEqual(undefined);
    actual = resolve([], foo);
    expect(actual).toEqual(undefined);
    actual = resolve(null, foo);
    expect(actual).toEqual(undefined);
    actual = resolve(undefined, foo);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined, when obj is not an object or not a valid object', () => {
    let actual = resolve('bar', 42);
    expect(actual).toEqual(undefined);
    actual = resolve('bar', true);
    expect(actual).toEqual(undefined);
    actual = resolve('bar', []);
    expect(actual).toEqual(undefined);
    actual = resolve('bar', {});
    expect(actual).toEqual(undefined);
    actual = resolve('bar', null);
    expect(actual).toEqual(undefined);
  });
});

describe('When determining if a string key is a nested prop', () => {
  it('should return true when given a valid nested property path, false otherwise', () => {
    let actual = isKeyNestedProp('bar');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('.bar');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('bar.');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('0bar');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('bar.bat');
    expect(actual).toBeTruthy();
    actual = isKeyNestedProp('foo.bar.bat');
    expect(actual).toBeTruthy();
    actual = isKeyNestedProp(null);
    expect(actual).toBeFalsy();
  });
});

