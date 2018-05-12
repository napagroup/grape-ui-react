/*
* Allows access to nested JavaScript objects with a string key.
* Example usage:
* resolveToProperty("style.width", document.body)
*/
const resolveToProperty = (path, obj) => (typeof path !== 'string' ? undefined : path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj));

const isKeyNestedProp = path => /[a-zA-Z_](\w*\.[a-z_]\w*)+/i.test(path);

export { resolveToProperty, isKeyNestedProp };
