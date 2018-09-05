import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroupBase } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough, removeSomeProps, resolveColor, defaultOptions } from 'src/utils/componentHelpers';
import { SelectFieldComponent } from './SelectFieldComponent';
import { space } from 'styled-system';
import styled from 'styled-components';
import { defaultControlStylesBase, controlStylesBase } from '../ControlGroup/baseControlStyle';
import { textStylesBase } from 'src/elements/typography/textStyles';

export const SelectField = props => {
  const {
    activeColor,
    bgColor,
    controlId,
    disabled,
    defaultValue,
    assistiveText,
    plainText,
    value,
    controlLabel,
    required,
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
    isDisabled: disabled,
  };
  const renderValueOrComponent = () => {
    if (plainText) {
      const textBase = textStylesBase(props);
      const displayValue = value ? value.label : defaultValue.label;
      const displayString = !displayValue ? '' : `${displayValue}`;
      const controlBase = !validationError ? controlStylesBase(props) : controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') });
      const ProtoPlainText = styled.div.attrs({})` ${textBase} ${controlBase}`;
      return (<ProtoPlainText {...passThrough(ProtoPlainText, props)}>{displayString}</ProtoPlainText>);
    }
    return (<SelectFieldComponent validationError={validationError} {...childProps} {...disableRelatedProps} />);
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
      {renderValueOrComponent()}
    </ControlGroupBase>);
};

SelectField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  defaultValue: PropTypes.object,
  disabled: PropTypes.bool,
  plainText: PropTypes.bool,
  validationError: PropTypes.string,
  ...space.propTypes,
  // value: PropTypes.object,
};

SelectField.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: defaultControlStylesBase.bgColor,
  disabled: false,
  plainText: false,
  validationError: '',
  // value: defaultOptions,
  defaultValue: defaultOptions,
};

