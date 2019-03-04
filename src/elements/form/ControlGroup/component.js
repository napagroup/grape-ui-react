import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'src/elements/form/ControlLabel';
import { AssistiveText } from 'src/elements/form/AssistiveText';
import { space } from 'styled-system';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  defaultControlStyles,
  typography,
} from 'src/utils/styledHelpers';

const renderControlGroupLabel = propsFromControlGroup => {
  const {
    text,
    activeColor,
    bg: bgColorFromProps,
    disabled,
    controlId,
    hideLabel,
    validationError,
  } = propsFromControlGroup;
  if (!text || hideLabel) {
    return null;
  }
  const labelProps = {
    activeColor,
    bg: bgColorFromProps,
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
  } if (assistiveText && !error) {
    return <AssistiveText id={`${id}Help`}>{assistiveText}</AssistiveText>;
  }
  return <AssistiveText color="brandDanger" id={`${id}Error`}>{error}</AssistiveText>;
};

const propsToTrim = [
  'activeColor',
  'assistiveText',
  'controlId',
  'disabled',
  'hideLabel',
  'labelText',
  'validationError',
  ...Object.keys(space.propTypes),
  ...Object.keys(typography.propTypes),
];
export const ControlGroupComponent = ({ children, ...props }) => {
  const {
    assistiveText,
    labelText,
    activeColor,
    bg: bgColorFromProps,
    disabled,
    controlId,
    validationError,
    hideLabel,
  } = props;
  const labelProps = {
    activeColor,
    bgColor: bgColorFromProps,
    controlId,
    disabled,
    hideLabel,
    text: labelText,
    validationError,
  };
  const assistiveProps = {
    assistiveText,
    controlId,
    validationError,
  };
  return (
    <div {...removeSomeProps(props, propsToTrim)}>
      {children}
      {renderControlGroupLabel(labelProps)}
      {renderControlGroupAssistive(assistiveProps)}
    </div>
  );
};

ControlGroupComponent.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bg: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  labelText: PropTypes.string,
  ...space.propTypes,
  validationError: PropTypes.string,
  ...typography.propTypes,
};

ControlGroupComponent.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultControlStyles.bg,
  disabled: false,
  hideLabel: false,
  labelText: '',
  validationError: '',
};
