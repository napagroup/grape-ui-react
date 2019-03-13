import React from 'react';
import PropTypes from 'prop-types';
import {
  control,
  typography,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Select from 'react-select';

const styleOverrides = {
  control: styles => null,
  input: styles => null,
  multiValue: styles => null,
  multiValueLabel: styles => null,
  multiValueRemove: styles => null,
  option: styles => null,
  placeholder: styles => null,
  singleValue: styles => null,
};
const propsToTrim = [
  ...Object.keys(control.propTypes),
  'chipBg',
  'formStyle',
  'isDisabled',
  'menuFocusBg',
  'menuFocusColor',
  'menuSelectedBg',
  'menuSelectedColor',
  'multiple',
  ...Object.keys(typography.propTypes),
  'validationError',
];
export const SelectComponent = ({ children, ...props }) => {
  const { isDisabled, multiple } = props;
  return (
    <Select
      className="grape-ui-select-container"
      classNamePrefix="grape-ui-select"
      isDisabled={isDisabled}
      isMulti={multiple}
      styles={styleOverrides}
      {...removeSomeProps(props, propsToTrim)}
    >
      {children}
    </Select>
  );
};
SelectComponent.propTypes = {
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  multiple: PropTypes.bool,
};
SelectComponent.defaultProps = {
  children: null,
  isDisabled: false,
  multiple: false,
};
