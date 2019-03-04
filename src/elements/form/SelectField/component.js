import React from 'react';
import PropTypes from 'prop-types';
import {
  defaultTextStylesBase,
  typography,
} from 'src/elements/typography/textStyles';
import { control, defaultControlStylesBase } from 'src/elements/form/ControlGroup/baseControlStyle';
import { passThrough } from 'src/utils/componentHelpers';
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

export const SelectComponent = ({ children, ...props }) => {
  const { isDisabled, multiple } = props;
  return (
    <Select
      className="grape-ui-select-container"
      classNamePrefix="grape-ui-select"
      isDisabled={isDisabled}
      isMulti={multiple}
      styles={styleOverrides}
      {...passThrough(SelectComponent, props)}
    >
      {children}
    </Select>
  );
};
SelectComponent.propTypes = {
  ...control.propTypes,
  chipBg: PropTypes.string,
  isDisabled: PropTypes.bool,
  menuFocusBg: PropTypes.string,
  menuFocusColor: PropTypes.string,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.string,
};
SelectComponent.defaultProps = {
  chipBg: 'white.dark',
  ...defaultControlStylesBase,
  ...defaultTextStylesBase,
  isDisabled: false,
  menuFocusBg: 'brandLinkHover',
  menuFocusColor: 'white',
  menuSelectedBg: 'brandLink',
  menuSelectedColor: 'white',
  multiple: false,
  validationError: '',
};
