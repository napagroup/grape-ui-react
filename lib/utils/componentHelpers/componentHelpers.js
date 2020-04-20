import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import except from 'except';

var removeSomeProps = function removeSomeProps(originalProps, toBeRemovedProps) {
  return except(originalProps, toBeRemovedProps);
};

var passThrough = function passThrough(component, props) {
  var omit = _Object$keys(component.propTypes || {});

  return except(props, omit);
};

export { passThrough, removeSomeProps };