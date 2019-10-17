import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'src/elements/form/ControlLabel';
import { AssistiveText } from 'src/elements/form/AssistiveText';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  defaultControlStyles,
  spaceProps,
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
  'controlGroupProps',
  'controlId',
  'disabled',
  'hideLabel',
  'labelText',
  'name',
  'validationError',
  ...Object.keys(spaceProps.propTypes),
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
    name,
    validationError,
    hideLabel,
  } = props;
  const nextControlId = controlId || name;
  const labelProps = {
    activeColor,
    bg: bgColorFromProps,
    controlId: nextControlId,
    disabled,
    hideLabel,
    text: labelText,
    validationError,
  };
  const assistiveProps = {
    assistiveText,
    controlId: nextControlId,
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
  ...spaceProps.propTypes,
  ...typography.propTypes,
  activeColor: PropTypes.string,
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  bg: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  validationError: PropTypes.string,
};

ControlGroupComponent.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultControlStyles.bg,
  controlId: '',
  disabled: false,
  hideLabel: false,
  labelText: '',
  name: '',
  validationError: '',
};
