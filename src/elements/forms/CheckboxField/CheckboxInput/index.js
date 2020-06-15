import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, space } from 'styled-system';
import { Flex } from 'src/elements/grid';
import { Text } from 'src/elements/typography';
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
  'enableAutoChecking',
  'hasSelectAll',
  'inputRef',
  'onChangeSelectAll',
  'optionSelectAll',
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
  ${layout}
  ${space}
  cursor: pointer;
`;

CheckboxInputComponent.defaultProps = {
  m: 0,
  ml: gutter,
  mr: scaleFont(gutter, 0.5),
};

const CheckboxInput = props => {
  const {
    checkboxSize, disabled, flexContainerProps, id, inputRef, name, option,
  } = props;
  const propsForCheckboxLabel = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimLabel);
  const propsForCheckboxControl = removeSomeProps(passThrough(CheckboxInput, props), propsToTrimControl);
  return (
    <CheckboxLabel
      key={`${option.label}-label`}
      {...propsForCheckboxLabel}
    >
      <Flex
        alignItems="baseline"
        {...flexContainerProps}
      >
        <CheckboxInputComponent
          key={option.label}
          ref={inputRef}
          disabled={disabled}
          id={id || name}
          maxHeight={checkboxSize}
          maxWidth={checkboxSize}
          minHeight={checkboxSize}
          minWidth={checkboxSize}
          type="checkbox"
          {...propsForCheckboxControl}
        />
        <Text>
          {option.label}
        </Text>
      </Flex>
    </CheckboxLabel>
  );
};

CheckboxInput.propTypes = {
  checkboxSize: PropTypes.any,
  disabled: PropTypes.bool,
  flexContainerProps: PropTypes.object,
  inputRef: refType,
  option: PropTypes.any.isRequired,
  ...typography.propTypes,
};
CheckboxInput.defaultProps = {
  checkboxSize: 12,
  disabled: false,
  flexContainerProps: {},
  inputRef: () => {},
};

export { CheckboxInput };
