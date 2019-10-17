import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexDirection, fontWeight, space } from 'styled-system';
import {
  colorCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  scaleFont,
  spaceProps,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { CheckboxGroup, Checkbox } from 'react-checkbox-group';
import { PlainText } from 'src/elements/form/PlainText';
import { getGlobalStyles } from 'src/global-styles';
// import { defaultStylesBase } from '../../../utils/styledHelpers';

const { grid: { gutter } } = getGlobalStyles();
const opacity = props => `${props.disabled ? 'opacity: 0.6;' : ''}`;
const marginRight = () => `margin-right: ${scaleFont(gutter, 1)}`;
const CheckboxLabelComponent = ({ children, ...props }) => {
  const propsToTrim = [
    ...Object.keys(typography.propTypes),
  ];
  const labelProps = removeSomeProps(props, propsToTrim);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    <label {...labelProps}>
      { children }
    </label>
  );
};

CheckboxLabelComponent.propTypes = {
  children: PropTypes.any,
};

CheckboxLabelComponent.defaultProps = {
  children: null,
};

const CheckboxLabel = styled(CheckboxLabelComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${marginRight}
  ${opacity}
  align-items: baseline;
  align-self: flex-start;
  cursor: pointer;
`;

const Wrapper = ({ children, ...props }) => {
  const propsToTrim = [
    'controlGroupProps',
    'flexDirection',
    ...Object.keys(spaceProps.propTypes),
  ];
  const checkboxGroupProps = removeSomeProps(props, propsToTrim);
  return (
    <CheckboxGroup {...checkboxGroupProps}>
      { children }
    </CheckboxGroup>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any,
};

Wrapper.defaultProps = {
  children: null,
};


const CheckboxGroupWrapper = styled(Wrapper)`
  display: flex;
  ${space}
  ${flexDirection}
`;

CheckboxGroupWrapper.propTypes = {
  ...flexDirection.propTypes,
  ...spaceProps.propTypes,
};

CheckboxGroupWrapper.defaultProps = {
  pb: 2,
  px: 3,
};

const propsToTrimLabel = [
  'controlId',
  'plainText',
  'name',
  'onChange',
  'option',
];

const propsToTrimControl = [
  ...propsToTrimLabel,
  ...Object.keys(typography.propTypes),
];

const SingleCheckBox = props => {
  const { disabled, option } = props;
  const propsForCheckboxLabel = removeSomeProps(passThrough(Checkbox, props), propsToTrimLabel);
  const propsForCheckboxControl = removeSomeProps(passThrough(Checkbox, props), propsToTrimControl);
  const stylePropsForCheckBox = { cursor: 'pointer', marginRight: scaleFont(gutter, 0.5) };
  return (
    <CheckboxLabel key={`${option.label}-label`} {...propsForCheckboxLabel}>
      <Checkbox
        key={option.label}
        disabled={disabled}
        id={option.value}
        {...propsForCheckboxControl}
        style={stylePropsForCheckBox}
        value={option.value}
      />
      {option.label}
    </CheckboxLabel>
  );
};
SingleCheckBox.propTypes = {
  disabled: PropTypes.bool,
  option: PropTypes.any.isRequired,
  ...typography.propTypes,
};
SingleCheckBox.defaultProps = {
  disabled: false,
};

export const CheckboxFieldComponent = props => {
  const {
    controlId,
    flexDirection: direction,
    name,
    onChange,
    options,
    plainText,
    value,
    wrapperProps,
  } = props;
  if (plainText) {
    const plainTextProps = {
      value,
      ...removeSomeProps(
        props,
        [
          'controlGroupProps',
          'controlId',
          'flexDirection',
          'labelText',
          'name',
          'onChange',
          'options',
          'plainText',
          'wrapperProps',
        ]
      ),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const checkboxProps = removeSomeProps(props, ['controlGroupProps', 'controlId', 'plainText', 'name', 'onChange', 'options', 'flexDirection', 'wrapperProps']);
  const optionsList = options.map(option => (SingleCheckBox({ ...checkboxProps, option })));
  return (
    <CheckboxGroupWrapper
      checkboxDepth={2}
      flexDirection={direction}
      id={controlId}
      name={name}
      onChange={onChange}
      value={value}
      {...wrapperProps}
    >
      { optionsList }
    </CheckboxGroupWrapper>
  );
};

CheckboxFieldComponent.propTypes = {
  controlId: PropTypes.string,
  flexDirection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.any.isRequired,
  plainText: PropTypes.bool,
  value: PropTypes.any,
  ...typography.propTypes,
};

CheckboxFieldComponent.defaultProps = {
  controlId: '',
  flexDirection: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null,
};
