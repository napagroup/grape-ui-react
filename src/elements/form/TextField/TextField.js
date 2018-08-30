import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroupBase } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { TextFieldComponent } from './TextFieldComponent';
import { space } from 'styled-system';

export const TextField = props => {
  const {
    controlId,
    assistiveText,
    controlLabel,
    validationError,
    ...otherProps
  } = props;
  const preSpaceProps = { pb: '1', ...otherProps };
  const spaceProps = { ...space(preSpaceProps) };
  const otherWithoutSpaceProps = removeSomeProps(otherProps, spaceProps);
  const childProps = { id: controlId, ...passThrough(TextField, otherWithoutSpaceProps) };
  return (
    <ControlGroupBase
      assistiveText={assistiveText}
      controlId={controlId}
      controlLabel={controlLabel}
      validationError={validationError}
      {...spaceProps}
    >
      <TextFieldComponent {...childProps} />
    </ControlGroupBase>);
};

TextField.propTypes = {
  assistiveText: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
  ...space.propTypes,
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: '',
};

