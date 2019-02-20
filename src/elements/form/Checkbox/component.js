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
`;

const SingleCheckBox = props => {
  const { disabled, option } = props;
  const propsForChildren = removeSomeProps(passThrough(Checkbox, props), ['controlId', 'plainText', 'name', 'onChange', 'option']);
  return (
    <CheckboxLabel key={`${option.label}-label`} {...propsForChildren} >
      <Checkbox key={option.label} disabled={disabled} id={option.value} {...propsForChildren} value={option.value} />{option.label}
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
  return (<CheckboxGroup checkboxDepth={2} id={controlId} name={name} onChange={onChange} value={value}> { optionsList } </CheckboxGroup>);
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
