import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';

var Hideable = function Hideable(props) {
  var hide = props.hide,
      children = props.children;

  if (hide) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

Hideable.propTypes = {
  children: PropTypes.any.isRequired,
  hide: PropTypes.bool
};
Hideable.defaultProps = {
  hide: false
};
/**
 * Decorator to compose a Child (target) component within Hideable.
 * @param {object} Child The target or child component to be composed within Hideable. The hide attribute is used to hide the Child.
 * @return {object} Returns the decorated object; The Child component is now composed within a Hideable.
 */

var withHideable = function withHideable(Child) {
  function HideableComponent(props) {
    var hide = props.hide,
        otherProps = _objectWithoutProperties(props, ["hide"]);

    return /*#__PURE__*/React.createElement(Hideable, {
      hide: hide
    }, /*#__PURE__*/React.createElement(Child, otherProps));
  }

  HideableComponent.propTypes = {
    hide: PropTypes.bool
  };
  HideableComponent.defaultProps = {
    hide: false
  };
  return HideableComponent;
};

export { Hideable, withHideable };