import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { width, display } from 'styled-system';

const formComponentPropsToRemove = {
  ...width.propTypes,
  ...display.propTypes,
  formInline: false,
};
export const FormComponent = ({ children, ...props }) => (
  <form {...removeSomeProps(props, Object.keys(formComponentPropsToRemove))}>
    {children}
  </form>
);
FormComponent.propTypes = {
  children: PropTypes.any,
};

FormComponent.defaultProps = {
  children: null,
};
