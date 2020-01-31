import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'src/elements/form/ControlLabel';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { PlainText } from 'src/elements/form/PlainText';
import { defaultControlStyles } from 'src/utils/styledHelpers';
import { getAssistiveText } from 'src/elements/form/AssistiveText';
import { CheckboxFieldComponent } from './component';

const renderControlGroupLabel = propsFromControlGroup => {
  const {
    activeColor,
    bg,
    controlId,
    controlLabelProps,
    disabled,
    labelText,
    plainText,
    isRequired,
    validationError,
  } = propsFromControlGroup;
  if (!labelText) {
    return null;
  }
  const labelCaption = !isRequired ? labelText : `${labelText}*`;
  const defaultPositionProps = {
    height: 'auto',
    position: 'relative',
    top: 'auto',
  };
  const positionProps = !plainText ? defaultPositionProps : '';
  const labelProps = {
    activeColor,
    bg,
    ...controlLabelProps,
    disabled,
    htmlFor: controlId,
    validationError,
    ...positionProps,
  };
  return (
    <ControlLabel {...labelProps}>
      {labelCaption}
    </ControlLabel>
  );
};

const propsToTrim = [
  'activeColor',
  'assistiveText',
  'assistiveTextProps',
  'bg',
  'controlGroupProps',
  'controlId',
  'controlLabelProps',
  'isRequired',
  'labelText',
  'plainText',
  'validationError',
];

const plainTextPropsToTrim = [
  'flexDirection',
  'name',
  'onChange',
  'options',
  'wrapperProps',
  ...propsToTrim,
];

const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    defaultValue,
    disabled,
    flexDirection,
    plainText,
    value,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = {
      ...removeSomeProps(propsFromComponent, plainTextPropsToTrim),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const childProps = { id: controlId, ...removeSomeProps(propsFromComponent, propsToTrim) };
  return (
    <CheckboxFieldComponent
      {...childProps}
      disabled={disabled}
      flexDirection={flexDirection}
      value={value || defaultValue}
    />
  );
};
export const CheckboxField = props => {
  const {
    activeColor,
    assistiveText,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    disabled,
    isRequired,
    labelText,
    plainText,
    validationError,
  } = props;
  const additionalControlGroupProps = {
    ...controlGroupProps,
    controlId,
  };
  const labelProps = {
    activeColor,
    bg,
    controlId,
    controlLabelProps,
    disabled,
    isRequired,
    labelText,
    plainText,
    validationError,
  };
  const assistiveProps = { assistiveText, isRequired };

  return (
    <ControlGroup
      {...additionalControlGroupProps}
      assistiveText={getAssistiveText(assistiveProps)}
      assistiveTextProps={assistiveTextProps}
      validationError={validationError}
    >
      {renderControlGroupLabel(labelProps)}
      {renderValueOrComponent({ ...props, plainText })}
    </ControlGroup>
  );
};

CheckboxField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  assistiveTextProps: PropTypes.object,
  bg: PropTypes.string,
  controlGroupProps: PropTypes.object,
  controlId: PropTypes.string,
  controlLabelProps: PropTypes.object,
  disabled: PropTypes.bool,
  flexDirection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  fontFamily: PropTypes.string,
  isRequired: PropTypes.bool,
  labelText: PropTypes.string,
  plainText: PropTypes.bool,
  validationError: PropTypes.string,
  wrapperProps: PropTypes.object,
};

CheckboxField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: defaultControlStyles.bg,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  flexDirection: 'column',
  fontFamily: 'base',
  isRequired: false,
  labelText: '',
  plainText: false,
  validationError: '',
  wrapperProps: {},
};
