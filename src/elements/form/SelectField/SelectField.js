import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { passThrough, removeSomeProps, resolveColor } from 'src/utils/componentHelpers';
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
    labelText,
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
  const newlabel = !required ? labelText : `${labelText}*`;
  const disableRelatedProps = {
    isDisabled: disabled,
  };

  const getDisplayValue = function getDisplayValue() {
    if (!!value && !!value.label) {
      return value.label;
    }
    return '';
  };


  const renderValueOrComponent = () => {
    if (plainText) {
      const textBase = textStylesBase(props);
      const displayString = getDisplayValue();
      const controlBase = !validationError ? controlStylesBase(props) : controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') });
      const ProtoPlainText = styled.div.attrs({})` ${textBase} ${controlBase}`;
      return (<ProtoPlainText {...passThrough(ProtoPlainText, props)}>{displayString}</ProtoPlainText>);
    }
    return (<SelectFieldComponent validationError={validationError} {...childProps} {...disableRelatedProps} value={value || defaultValue} />);
  };
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={assistiveText}
      bgColor={bgColor}
      controlId={controlId}
      labelText={newlabel}
      disabled={disabled}
      validationError={validationError}
      {...spaceProps}
    >
      {renderValueOrComponent()}
    </ControlGroup>);
};

SelectField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
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

