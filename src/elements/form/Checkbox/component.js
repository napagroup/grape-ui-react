import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getFontStyle,
  getColor,
  getTextAlign,
  getTextDecoration,
} from 'src/elements/typography/textStyles';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { CheckboxGroup, Checkbox } from 'react-checkbox-group';
import { PlainText } from 'src/elements/form/PlainText';
import { getScaledSize } from 'src/elements/typography/utils';
import { getGlobalStyles } from 'src/global-styles';

const { grid: { gutter } } = getGlobalStyles();
const opacity = props => `${props.disabled ? 'opacity: 0.6;' : ''}`;
const marginRight = () => `margin-right: ${getScaledSize(gutter, 1)}`;
const CheckboxLabel = styled.label`
${getFontFamily}
${getFontSize}
${getFontWeight}
${getLetterSpacing}
${getLineHeight}
${getFontStyle}
${getColor}
${getTextAlign}
${getTextDecoration}
display: flex;
${marginRight}
align-items: baseline;
${opacity}
`;

const SingleCheckBox = props => {
  const { disabled, option } = props;
  const propsForChildren = removeSomeProps(passThrough(Checkbox, props), ['controlId', 'plainText', 'name', 'onChange', 'option']);
  const stylePropsForCheckBox = { marginRight: getScaledSize(gutter, 0.5) };
  return (
    <CheckboxLabel key={`${option.label}-label`} {...propsForChildren} >
      <Checkbox
        key={option.label}
        disabled={disabled}
        id={option.value}
        {...propsForChildren}
        style={stylePropsForCheckBox}
        value={option.value}
      />{option.label}
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
    plainText,
    options,
    controlId,
    onChange,
    value,
    name,
  } = props;
  if (plainText) {
    const plainTextProps = {
      value,
      ...removeSomeProps(props, ['controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError']),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const checkboxProps = removeSomeProps(props, ['controlId', 'plainText', 'name', 'onChange', 'options']);
  const optionsList = options.map(option => (SingleCheckBox({ ...checkboxProps, option })));
  return (
    <CheckboxGroup
      checkboxDepth={2}
      id={controlId}
      name={name}
      onChange={onChange}
      style={{ display: 'flex' }}
      value={value}
    >
      { optionsList }
    </CheckboxGroup>
  );
};

CheckboxFieldComponent.propTypes = {
  controlId: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.any.isRequired,
  plainText: PropTypes.bool,
  value: PropTypes.any,
};

CheckboxFieldComponent.defaultProps = {
  controlId: '',
  name: '',
  onChange: null,
  plainText: false,
  value: null,
};
