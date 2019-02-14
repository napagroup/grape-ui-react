import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { passThrough, resolveColor } from 'src/utils/componentHelpers';
import { TextInputComponent } from './component';
import { space } from 'styled-system';
import { defaultControlStylesBase, control, controlStylesBase } from '../ControlGroup/baseControlStyle';
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
  typography,
} from 'src/elements/typography/textStyles';

const controlBaseStyles = props => (!props.validationError ? controlStylesBase(props) : controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') }));

export const TextFieldComponent = styled(TextInputComponent)`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  ${controlBaseStyles}
  `;

TextFieldComponent.propTypes = {
  ...control.propTypes,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  ...defaultControlStylesBase,
  validationError: '',
};

const getAssistiveText = props => {
  const { assistiveText, required } = props;
  if (required && !assistiveText) {
    return '*Required';
  }
  return assistiveText;
};

export const TextField = props => {
  const {
    activeColor,
    bgColor,
    controlId,
    labelText,
    required,
    validationError,
    ...otherProps
  } = props;
  const childProps = { id: controlId, required, ...passThrough(TextField, otherProps) };
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(props)}
      bgColor={bgColor}
      controlId={controlId}
      labelText={labelText}
      pb={3}
      pt={1}
      validationError={validationError}
    >
      <TextFieldComponent validationError={validationError} {...childProps} />
    </ControlGroup>);
};

TextField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validationError: PropTypes.string,
  ...space.propTypes,
};

TextField.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: defaultControlStylesBase.bgColor,
  required: false,
  validationError: '',
};

