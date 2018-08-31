import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroupBase } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { TextFieldComponent } from './TextFieldComponent';
import { space } from 'styled-system';
import { defaultControlStylesBase } from '../ControlGroup/baseControlStyle';

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
    assistiveText,
    bgColor,
    controlId,
    controlLabel,
    required,
    validationError,
    ...otherProps
  } = props;
  const preSpaceProps = {
    pb: 3,
    pt: 1,
    ...otherProps,
  };
  const spaceProps = { ...space(preSpaceProps) };
  const otherWithoutSpaceProps = removeSomeProps(otherProps, spaceProps);
  const childProps = { id: controlId, required, ...passThrough(TextField, otherWithoutSpaceProps) };
  return (
    <ControlGroupBase
      activeColor={activeColor}
      assistiveText={getAssistiveText(props)}
      bgColor={bgColor}
      controlId={controlId}
      controlLabel={controlLabel}
      validationError={validationError}
      {...spaceProps}
    >
      <TextFieldComponent validationError={validationError} {...childProps} />
    </ControlGroupBase>);
};

TextField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
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

