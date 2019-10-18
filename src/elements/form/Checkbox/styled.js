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
    disabled,
    labelText,
    plainText,
    required,
    validationError,
  } = propsFromControlGroup;
  if (!labelText) {
    return null;
  }
  const labelProps = {
    activeColor,
    bg,
    disabled,
    htmlFor: controlId,
    validationError,
  };
  const labelCaption = !required ? labelText : `${labelText}*`;
  return (
    <ControlLabel isRelative={!plainText} {...labelProps}>
      {labelCaption}
    </ControlLabel>
  );
};

const propsToTrim = [
  'activeColor',
  'assistiveText',
  'bg',
  'controlGroupProps',
  'controlId',
  'labelText',
  'plainText',
  'validationError',
  'required',
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
      ...removeSomeProps(propsFromComponent, ['controlGroupProps', 'controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError', 'flexDirection', 'assistiveText', 'validationError', 'required', 'wrapperProps']),
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
    bg,
    controlGroupProps,
    controlId,
    disabled,
    labelText,
    plainText,
    required,
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
    disabled,
    labelText,
    required,
    validationError,
  };
  const assistiveProps = { assistiveText, required };

  return (
    <ControlGroup
      {...additionalControlGroupProps}
      assistiveText={getAssistiveText(assistiveProps)}
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
  bg: PropTypes.string,
  controlGroupProps: PropTypes.object,
  controlId: PropTypes.string,
  disabled: PropTypes.bool,
  flexDirection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  fontFamily: PropTypes.string,
  labelText: PropTypes.string,
  plainText: PropTypes.bool,
  required: PropTypes.bool,
  validationError: PropTypes.string,
  wrapperProps: PropTypes.object,
};

CheckboxField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultControlStyles.bg,
  controlGroupProps: {},
  controlId: '',
  disabled: false,
  flexDirection: 'column',
  fontFamily: 'base',
  labelText: '',
  plainText: false,
  required: false,
  validationError: '',
  wrapperProps: {},
};
