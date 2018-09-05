import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroupBase } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { SelectFieldComponent } from './SelectFieldComponent';
import { space } from 'styled-system';
import { defaultControlStylesBase } from '../ControlGroup/baseControlStyle';

export const SelectField = props => {
  const {
    activeColor,
    bgColor,
    controlId,
    disabled,
    assistiveText,
    controlLabel,
    required,
    plainText,
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
  const childProps = { id: controlId, ...passThrough(SelectField, otherWithoutSpaceProps) };
  const newlabel = !required ? controlLabel : `${controlLabel}*`;
  const disableRelatedProps = {
    isDisabled: disabled || plainText,
  };
  return (
    <ControlGroupBase
      activeColor={activeColor}
      assistiveText={assistiveText}
      bgColor={bgColor}
      controlId={controlId}
      controlLabel={newlabel}
      disabled={disabled}
      validationError={validationError}
      {...spaceProps}
    >
      <SelectFieldComponent validationError={validationError} {...childProps} {...disableRelatedProps} />
    </ControlGroupBase>);
};

SelectField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  plainText: PropTypes.bool,
  validationError: PropTypes.string,
  ...space.propTypes,
};

SelectField.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: defaultControlStylesBase.bgColor,
  disabled: false,
  plainText: false,
  validationError: '',
};

