import React from 'react';
import PropTypes from 'prop-types';
import {
  scaleFont,
  typography,
} from 'src/utils/styledHelpers';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { CheckboxLabel } from '../CheckboxLabel';

const { grid: { gutter } } = getGlobalStyles();
const propsToTrimLabel = [
  'controlId',
  'controlLabelProps',
  'plainText',
  'name',
  'onChange',
  'option',
];

const propsToTrimControl = [
  ...propsToTrimLabel,
  ...Object.keys(typography.propTypes),
];

const CheckboxInput = props => {
  const { disabled, option } = props;
  const propsForCheckboxLabel = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimLabel);
  const propsForCheckboxControl = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimControl);
  const stylePropsForCheckBox = { cursor: 'pointer', marginRight: scaleFont(gutter, 0.5) };
  return (
    <CheckboxLabel key={`${option.label}-label`} {...propsForCheckboxLabel}>
      <input
        key={option.label}
        disabled={disabled}
        id={option.value}
        {...propsForCheckboxControl}
        style={stylePropsForCheckBox}
        type="checkbox"
        value={option.value}
      />
      {option.label}
    </CheckboxLabel>
  );
};

CheckboxInput.propTypes = {
  disabled: PropTypes.bool,
  option: PropTypes.any.isRequired,
  ...typography.propTypes,
};
CheckboxInput.defaultProps = {
  disabled: false,
};

export { CheckboxInput };
