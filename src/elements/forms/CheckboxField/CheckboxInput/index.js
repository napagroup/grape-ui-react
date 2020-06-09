import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Box, Flex } from 'src/elements/grid';
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

const CheckboxInputComponent = styled('input')`
  ${space}
  cursor: pointer;
`;

CheckboxInputComponent.defaultProps = {
  m: 0,
  ml: gutter,
  mr: scaleFont(gutter, 0.5),
};

const CheckboxInput = props => {
  const { inputRef, disabled, option } = props;
  const propsForCheckboxLabel = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimLabel);
  const propsForCheckboxControl = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimControl);
  return (
    <CheckboxLabel
      key={`${option.label}-label`}
      {...propsForCheckboxLabel}
    >
      <Flex alignItems="baseline">
        <CheckboxInputComponent
          key={option.label}
          ref={inputRef}
          disabled={disabled}
          id={option.value}
          type="checkbox"
          {...propsForCheckboxControl}
        />
        <Box>
          {option.label}
        </Box>
      </Flex>
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
