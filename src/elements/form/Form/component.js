import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { width, display } from 'styled-system';

const formComponentPropsToRemove = {
  ...display.propTypes,
  ...width.propTypes,
  formInline: false,
};
export const applyFormStyleToChild = (child, formStyleFromParent) => {
  const { formStyle } = child.props;
  let output;
  // Only TextField will try to apply form style
  if (formStyle || (child.type.name !== 'TextField' && child.type.name !== 'SelectField')) {
    output = child;
  } else {
    output = React.cloneElement(child, { formStyle: formStyleFromParent });
  }
  return output;
};

export const FormComponent = ({ children, formStyle, ...props }) => {
  let output = null;
  if (!formStyle) {
    output = (
      <form {...removeSomeProps(props, Object.keys(formComponentPropsToRemove))}>
        {children}
      </form>
    );
  } else {
    const childrenWithProps = React.Children.map(children, child => applyFormStyleToChild(child, formStyle));
    output = (
      <form {...removeSomeProps(props, Object.keys(formComponentPropsToRemove))}>
        {childrenWithProps}
      </form>
    );
  }
  return output;
};
FormComponent.propTypes = {
  children: PropTypes.any,
  formStyle: PropTypes.string,
};

FormComponent.defaultProps = {
  children: null,
  formStyle: '',
};
