import React from 'react';
import PropTypes from 'prop-types';
import {
  refType,
  scaleFont,
  typography,
  flexboxProps,
} from 'src/utils/styledHelpers';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { CheckboxLabel } from '../CheckboxLabel';

const { grid: { gutter } } = getGlobalStyles();
const commonPropsToTrim = [
  'controlId',
  'controlLabelProps',
  'hasSelectAll',
  'inputRef',
  'plainText',
  'setValue',
  'wrapperProps',
];
const propsToTrimLabel = [
  ...commonPropsToTrim,
  'name',
  'onChange',
  'option',
];

const propsToTrimControl = [
  ...commonPropsToTrim,
  ...Object.keys(typography.propTypes),
  ...Object.keys(flexboxProps.propTypes),
];

const CheckboxInput = props => {
  const { inputRef, disabled, option } = props;
  const propsForCheckboxLabel = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimLabel);
  const propsForCheckboxControl = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimControl);
  const stylePropsForCheckBox = { cursor: 'pointer', marginRight: scaleFont(gutter, 0.5) };
  return (
    <CheckboxLabel key={`${option.label}-label`} {...propsForCheckboxLabel}>
      <input
        key={option.label}
        ref={inputRef}
        disabled={disabled}
        id={option.value}
        {...propsForCheckboxControl}
        style={stylePropsForCheckBox}
        type="checkbox"
      />
      {option.label}
    </CheckboxLabel>
  );
};

CheckboxInput.propTypes = {
  disabled: PropTypes.bool,
  inputRef: refType,
  option: PropTypes.any.isRequired,
  ...typography.propTypes,
};
CheckboxInput.defaultProps = {
  disabled: false,
  inputRef: () => {},
};

export { CheckboxInput };
