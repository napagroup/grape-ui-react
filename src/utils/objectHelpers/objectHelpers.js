/*
* Allows access to nested JavaScript objects with a string key.
* Example usage:
* resolveToProperty("style.width", document.body)
*/
const resolveToProperty = (path, obj) => (typeof path !== 'string' ? undefined : path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj));

const isKeyNestedProp = path => /[a-zA-Z_](\w*\.[a-z_]\w*)+/i.test(path);

/**
 *  Tests for existence of nested object key.
 * @param {object} obj The object in test.
 * @param {Array.<string>} args The array of nested object keys.
 * Example use: var test = {level1:{level2:{level3:'level3'}} };
 * checkNested(test, ['level1', 'level2', 'level3']); // true
 * checkNested(test, ['level1', 'level2', 'foo']); // false
 */
const checkNested = (obj, [...args]) => {
  let next = obj;
  for (let i = 0; i < args.length; i++) {
    if (!next || !next.hasOwnProperty(args[i])) { // eslint-disable-line no-prototype-builtins
      return false;
    }
    next = next[args[i]];
  }
  return true;
};
export { checkNested, resolveToProperty, isKeyNestedProp };
