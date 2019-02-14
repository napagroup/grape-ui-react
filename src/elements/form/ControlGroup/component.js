import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'src/elements/form/ControlLabel';
import { AssistiveText } from 'src/elements/form/AssistiveText';
import { space } from 'styled-system';
import { defaultControlStylesBase } from 'src/elements/form/ControlGroup/baseControlStyle';
import { passThrough } from 'src/utils/componentHelpers';
import { typography } from 'src/elements/typography/textStyles';

const renderControlGroupLabel = propsFromControlGroup => {
  const {
    text,
    activeColor,
    bgColor: bgColorFromProps,
    disabled,
    controlId,
    validationError,
  } = propsFromControlGroup;
  if (!text) {
    return null;
  }
  const labelProps = {
    activeColor,
    bgColor: bgColorFromProps,
    disabled,
    htmlFor: controlId,
    validationError,
  };
  return (
    <ControlLabel {...labelProps}>
      {text}
    </ControlLabel>
  );
};

const renderControlGroupAssistive = propsFromControlGroup => {
  const { assistiveText, validationError: error, controlId: id } = propsFromControlGroup;
  if (!assistiveText && !error) {
    return null;
  } else if (assistiveText && !error) {
    return <AssistiveText id={`${id}Help`}>{assistiveText}</AssistiveText>;
  }
  return <AssistiveText color="brandDanger" id={`${id}Error`}>{error}</AssistiveText>;
};

export const ControlGroupComponent = ({ children, ...props }) => {
  const {
    assistiveText,
    labelText,
    activeColor,
    bgColor: bgColorFromProps,
    disabled,
    controlId,
    validationError,
  } = props;
  const labelProps = {
    text: labelText,
    activeColor,
    bgColor: bgColorFromProps,
    disabled,
    controlId,
    validationError,
  };
  const assistiveProps = {
    assistiveText,
    controlId,
    validationError,
  };
  return (
    <div {...passThrough(ControlGroupComponent, props)}>
      {children}
      {renderControlGroupLabel(labelProps)}
      {renderControlGroupAssistive(assistiveProps)}
    </div>);
};

ControlGroupComponent.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  ...space.propTypes,
  validationError: PropTypes.string,
  ...typography.propTypes,
};


ControlGroupComponent.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: defaultControlStylesBase.bgColor,
  disabled: false,
  validationError: '',
};
