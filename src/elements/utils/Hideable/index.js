import * as React from 'react';
import PropTypes from 'prop-types';

const Hideable = props => {
  const { isHidden, children } = props;
  if (isHidden) {
    return null;
  }
  return (
    <>
      {children}
    </>
  );
};

Hideable.propTypes = {
  children: PropTypes.any.isRequired,
  /** Use this prop to pass in a boolean statement. */
  isHidden: PropTypes.bool,
};

Hideable.defaultProps = {
  isHidden: false,
};

/**
 * Decorator to compose a Child (target) component within Hideable.
 * @param {object} Child The target or child component to be composed within Hideable. The hide attribute is used to hide the Child.
 * @return {object} Returns the decorated object; The Child component is now composed within a Hideable.
 */

const withHideable = Child => {
  function HideableComponent(props) {
    const { isHidden, ...otherProps } = props;
    return (<Hideable isHidden={isHidden}><Child {...otherProps} /></Hideable>);
  }
  HideableComponent.propTypes = {
    isHidden: PropTypes.bool,
  };
  HideableComponent.defaultProps = {
    isHidden: false,
  };
  return HideableComponent;
};

export { Hideable, withHideable };
