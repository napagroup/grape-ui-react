import React from 'react';
import PropTypes from 'prop-types';
import { AssistiveText, ControlLabel } from 'src/elements/form/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  defaultControlStyles,
  spaceProps,
  typography,
} from 'src/utils/styledHelpers';

const renderControlGroupLabel = propsFromControlGroup => {
  const {
    activeColor,
    bg: bgColorFromProps,
    disabled,
    controlId,
    controlLabelProps,
    hideLabel,
    text,
    validationError,
  } = propsFromControlGroup;
  if (!text || hideLabel) {
    return null;
  }
  const labelProps = {
    activeColor,
    bg: bgColorFromProps,
    ...controlLabelProps,
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

const renderAssistiveContent = propsFromControlGroup => {
  const { assistiveText, validationError } = propsFromControlGroup;
  if (validationError.length > 0) {
    return validationError;
  }
  return assistiveText;
};

const renderControlGroupAssistive = propsFromControlGroup => {
  const {
    assistiveText,
    assistiveTextProps,
    controlId: id,
    validationError: error,
  } = propsFromControlGroup;
  if (!assistiveText && !error) {
    return null;
  } if (assistiveText && !error) {
    return <AssistiveText id={`${id}Help`} {...assistiveTextProps}>{renderAssistiveContent(propsFromControlGroup)}</AssistiveText>;
  }
  return <AssistiveText color="brandDanger" id={`${id}Error`} {...assistiveTextProps}>{renderAssistiveContent(propsFromControlGroup)}</AssistiveText>;
};

const propsToTrim = [
  'activeColor',
  'assistiveText',
  'assistiveTextProps',
  'controlGroupProps',
  'controlId',
  'controlLabelProps',
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
    activeColor,
    assistiveText,
    assistiveTextProps,
    bg: bgColorFromProps,
    controlId,
    controlLabelProps,
    disabled,
    hideLabel,
    labelText,
    name,
    validationError,
  } = props;
  const nextControlId = controlId || name;
  const labelProps = {
    activeColor,
    bg: bgColorFromProps,
    controlId: nextControlId,
    controlLabelProps,
    disabled,
    hideLabel,
    text: labelText,
    validationError,
  };
  const assistiveProps = {
    assistiveText,
    assistiveTextProps,
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
  controlLabelProps: PropTypes.object,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  validationError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

ControlGroupComponent.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultControlStyles.bg,
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  hideLabel: false,
  labelText: '',
  name: '',
  validationError: '',
};
