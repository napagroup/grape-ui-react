import * as React from 'react';
import PropTypes from 'prop-types';

const Hideable = props => {
  const { hide, children } = props;
  if (hide) {
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
  hide: PropTypes.bool,
};

Hideable.defaultProps = {
  hide: false,
};

/**
 * Decorator to compose a Child (target) component within Hideable.
 * @param {object} Child The target or child component to be composed within Hideable. The hide attribute is used to hide the Child.
 * @return {object} Returns the decorated object; The Child component is now composed within a Hideable.
 */
const withHideable = Child => {
  function HideableComponent(props) {
    const { hide, ...otherProps } = props;
    return (<Hideable hide={hide}><Child {...otherProps} /></Hideable>);
  }
  HideableComponent.propTypes = {
    hide: PropTypes.bool,
  };
  HideableComponent.defaultProps = {
    hide: false,
  };
  return HideableComponent;
};

export { Hideable, withHideable };
