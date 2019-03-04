import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { fontWeight, space } from 'styled-system';
import styled from 'styled-components';
import {
  colorCore,
  control,
  controlStyles,
  defaultControlStyles,
  defaultStylesBase,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { TextInputComponent } from './component';

const controlStylesTextField = props => (!props.validationError ? controlStyles(props)
  : controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' }));

export const TextFieldComponent = styled(TextInputComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${controlStylesTextField}
  `;

TextFieldComponent.propTypes = {
  formStyle: PropTypes.string,
  ...control.propTypes,
  ...typography.propTypes,
};

TextFieldComponent.defaultProps = {
  formStyle: '',
  ...defaultControlStyles,
};

const getAssistiveText = props => {
  const { assistiveText, required } = props;
  if (required && !assistiveText) {
    return '*Required';
  }
  return assistiveText;
};
const propsToTrim = [
  'activeColor',
  'assistiveText',
  'controlId',
  'labelText',
  'validationError',
  ...Object.keys(space.propTypes),
];
export const TextField = props => {
  const {
    activeColor,
    bg,
    controlId,
    labelText,
    required,
    validationError,
    ...otherProps
  } = props;
  const childProps = {
    bg,
    id: controlId,
    required,
    validationError,
    ...removeSomeProps(otherProps, propsToTrim),
  };
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(props)}
      bg={defaultControlStyles.bg}
      controlId={controlId}
      labelText={labelText}
      pb={3}
      pt={1}
      validationError={validationError}
    >
      <TextFieldComponent {...childProps} />
    </ControlGroup>
  );
};

TextField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bg: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  formStyle: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validationError: PropTypes.string,
};

TextField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultStylesBase.bg,
  formStyle: '',
  required: false,
  validationError: '',
};
