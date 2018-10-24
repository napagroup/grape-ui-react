import React from 'react';
import styled from 'styled-components';
import { textStylesBase } from 'src/elements/typography/textStyles';
import { passThrough, resolveColor } from 'src/utils/componentHelpers';
import { CheckboxGroup, Checkbox } from 'react-checkbox-group';
import { controlStylesBase } from '../ControlGroup/baseControlStyle';

export const CheckboxFieldComponent = props => {
  const {
    disabled,
    name,
    onChange,
    plainText,
    value,
    controlId,
    options,
    ...otherProps
  } = props;
  const overrides = {
    ...otherProps,
  };

  const createSingleCheckBox = option => {
    const actualBase = textStylesBase(overrides);
    const CheckboxLabel = styled.label` ${actualBase} `;
    return (
      <CheckboxLabel key={`${option.label}-label`} {...passThrough(Checkbox, otherProps)} >
        <Checkbox key={option.label} disabled={disabled} id={option.value} {...passThrough(Checkbox, otherProps)} value={option.value} />{option.label}
      </CheckboxLabel>
    );
  };

  const getDisplayValue = function getDisplayValue() {
    return value || '';
  };

  const renderCheckboxComponent = () => {
    if (plainText) {
      const textBase = textStylesBase(props);
      const displayString = getDisplayValue();
      const controlBase = controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') });
      const ProtoPlainText = styled.div.attrs({})` ${textBase} ${controlBase}`;
      return (<ProtoPlainText {...passThrough(ProtoPlainText, props)}>{displayString}</ProtoPlainText>);
    }
    const optionsList = options.map(option => (createSingleCheckBox(option)));
    return (<CheckboxGroup checkboxDepth={2} id={controlId} name={name} onChange={onChange} value={value}> { optionsList } </CheckboxGroup>);
  };
  return renderCheckboxComponent();
};
