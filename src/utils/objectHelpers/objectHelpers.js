/*
* Allows access to nested JavaScript objects with a string key.
* Example usage:
* resolve("document.body.style.width")
* resolve("style.width", document.body)
*/
const resolve = (path, obj) => path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);

const isKeyNestedProp = path => path.indexOf('.') > -1;

export { resolve, isKeyNestedProp };
