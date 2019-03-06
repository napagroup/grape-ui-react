import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flexDirection, fontWeight } from 'styled-system';
import {
  colorCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  scaleFont,
  textAlignCore,
  textDecorationCore,
} from 'src/utils/styledHelpers';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { CheckboxGroup, Checkbox } from 'react-checkbox-group';
import { PlainText } from 'src/elements/form/PlainText';
import { getGlobalStyles } from 'src/global-styles';

const { grid: { gutter } } = getGlobalStyles();
const opacity = props => `${props.disabled ? 'opacity: 0.6;' : ''}`;
const marginRight = () => `margin-right: ${scaleFont(gutter, 1)}`;
const CheckboxLabel = styled.label`
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
import { getAssistiveText } from 'src/elements/form/AssistiveText';

const Wrapper = ({ children, ...props }) => {
  const checkboxGroupProps = removeSomeProps(props, ['flexDirection']);
  return (
    <CheckboxGroup {...checkboxGroupProps} assistiveText={getAssistiveText(props)}>
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
  padding: 0 ${scaleFont(gutter, 1)} ${scaleFont(gutter, 0.5)};
  ${flexDirection}
`;

CheckboxGroupWrapper.propTypes = {
  ...flexDirection.propTypes,
};


const SingleCheckBox = props => {
  const { disabled, option } = props;
  const propsForChildren = removeSomeProps(passThrough(Checkbox, props), ['controlId', 'plainText', 'name', 'onChange', 'option']);
  const stylePropsForCheckBox = { cursor: 'pointer', marginRight: scaleFont(gutter, 0.5) };
  return (
    <CheckboxLabel key={`${option.label}-label`} {...propsForChildren}>
      <Checkbox
        key={option.label}
        disabled={disabled}
        id={option.value}
        {...propsForChildren}
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
  } = props;
  if (plainText) {
    const plainTextProps = {
      value,
      ...removeSomeProps(
        props,
        [
          'controlId',
          'flexDirection',
          'labelText',
          'name',
          'onChange',
          'options',
          'plainText',
        ]
      ),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const checkboxProps = removeSomeProps(props, ['controlId', 'plainText', 'name', 'onChange', 'options', 'flexDirection']);
  const optionsList = options.map(option => (SingleCheckBox({ ...checkboxProps, option })));
  return (
    <CheckboxGroupWrapper
      checkboxDepth={2}
      flexDirection={direction}
      id={controlId}
      name={name}
      onChange={onChange}
      value={value}
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
};

CheckboxFieldComponent.defaultProps = {
  controlId: '',
  flexDirection: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null,
};
