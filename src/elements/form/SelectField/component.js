import React from 'react';
import PropTypes from 'prop-types';
import {
  control,
  typography,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Select, { Creatable } from 'react-select';

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
  'isCreatable',
  'isDisabled',
  'isFocused',
  'labelText',
  'menuFocusBg',
  'menuFocusColor',
  'menuSelectedBg',
  'menuSelectedColor',
  'multiple',
  ...Object.keys(typography.propTypes),
  'validationError',
];
export const SelectComponent = ({ children, ...props }) => {
  const {
    isCreatable,
    isDisabled,
    isFocused,
    multiple,
  } = props;
  if (isCreatable) {
    return (
      <Creatable
        className="grape-ui-select-container"
        classNamePrefix="grape-ui-select"
        isDisabled={isDisabled}
        isFocused={isFocused}
        isMulti={multiple}
        styles={styleOverrides}
        {...removeSomeProps(props, propsToTrim)}
      >
        {children}
      </Creatable>
    );
  }
  return (
    <Select
      className="grape-ui-select-container"
      classNamePrefix="grape-ui-select"
      isDisabled={isDisabled}
      isFocused={isFocused}
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
  isCreatable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  multiple: PropTypes.bool,
};
SelectComponent.defaultProps = {
  children: null,
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false,
};
