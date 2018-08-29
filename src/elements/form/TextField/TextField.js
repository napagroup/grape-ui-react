import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroupBase } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough } from 'src/utils/componentHelpers';
import { TextFieldComponent } from './TextFieldComponent';

export const TextField = props => {
  const {
    controlId,
    assistiveText,
    controlLabel,
    validationError,
  } = props;

  const childProps = { id: controlId, ...passThrough(TextField, props) };
  return (
    <ControlGroupBase
      assistiveText={assistiveText}
      controlId={controlId}
      controlLabel={controlLabel}
      validationError={validationError}
    >
      <TextFieldComponent {...childProps} />
    </ControlGroupBase>);
};

TextField.propTypes = {
  assistiveText: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: '',
};

