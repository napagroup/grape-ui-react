import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'src/elements/form/ControlLabel';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { space } from 'styled-system';
import { PlainText } from 'src/elements/form/PlainText';
import { defaultControlStyles } from 'src/utils/styledHelpers';
import { CheckboxFieldComponent } from './component';

const propsToTrim = [
  'activeColor',
  'assistiveText',
  'bg',
  'controlId',
  'labelText',
  'plainText',
  'validationError',
  ...Object.keys(space.propTypes),
];
const renderValueOrComponent = propsFromComponent => {
  const {
    controlId, plainText, disabled, value, defaultValue, flexDirection,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = {
      value,
      ...removeSomeProps(propsFromComponent, ['controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError', 'flexDirection']),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const childProps = { id: controlId, ...removeSomeProps(propsFromComponent, propsToTrim) };
  return (<CheckboxFieldComponent {...childProps} disabled={disabled} flexDirection={flexDirection} value={value || defaultValue} />);
};
export const CheckboxField = props => {
  const {
    activeColor,
    assistiveText,
    controlId,
    disabled,
    labelText,
    required,
    validationError,
    plainText,
    bg,
  } = props;

  const labelCaption = !required ? labelText : `${labelText}*`;
  const controlGroupProps = {
    assistiveText,
    controlId,
  };

  return (
    <ControlGroup
      pb={3}
      pt={1}
      {...controlGroupProps}
    >
      <ControlLabel
        activeColor={activeColor}
        bg={bg}
        disabled={disabled}
        htmlFor={controlId}
        isRelative
        validationError={validationError}
      >
        {labelCaption}
        {renderValueOrComponent({ ...props, plainText })}
      </ControlLabel>
    </ControlGroup>
  );
};

CheckboxField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bg: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  flexDirection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  labelText: PropTypes.string,
  plainText: PropTypes.bool,
  validationError: PropTypes.string,
  ...space.propTypes,
};

CheckboxField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultControlStyles.bg,
  disabled: false,
  flexDirection: 'column',
  labelText: '',
  plainText: false,
  validationError: '',
};
