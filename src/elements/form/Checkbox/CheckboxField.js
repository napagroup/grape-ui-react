import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'src/elements/form/ControlGroup/ControlLabel';
import { ControlGroup } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough, removeSomeProps, resolveColor } from 'src/utils/componentHelpers';
import { CheckboxFieldComponent } from './CheckboxFieldComponent';
import { space } from 'styled-system';
import styled from 'styled-components';
import { defaultControlStylesBase, controlStylesBase } from '../ControlGroup/baseControlStyle';
import { textStylesBase } from 'src/elements/typography/textStyles';

const getBgColor = props => {
  const { bgColor } = props;
  if (!bgColor) {
    return resolveColor(defaultControlStylesBase.bgColor);
  }
  return resolveColor(bgColor);
};

export const CheckboxField = props => {
  const {
    activeColor,
    controlId,
    disabled,
    defaultValue,
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
  const childProps = { id: controlId, ...passThrough(CheckboxField, otherWithoutSpaceProps) };
  const newlabel = !required ? controlLabel : `${controlLabel}*`;

  const getDisplayValue = function getDisplayValue() {
    if (value) {
      return value.toString();
    }
    return '';
  };


  const renderValueOrComponent = () => {
    if (plainText) {
      const textBase = textStylesBase(props);
      const displayString = getDisplayValue();
      const controlBase = controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') });
      const ProtoPlainText = styled.div.attrs({})` ${textBase} ${controlBase}`;
      return (<ProtoPlainText {...passThrough(ProtoPlainText, props)}>{displayString}</ProtoPlainText>);
    }
    return (<CheckboxFieldComponent {...childProps} disabled={disabled} value={value || defaultValue} />);
  };
  return (
    <ControlGroup>
      <ControlLabel
        activeColor={activeColor}
        bgColor={getBgColor(props)}
        disabled={disabled}
        htmlFor={controlId}
        validationError={validationError}
      >{newlabel}
      </ControlLabel>
      {renderValueOrComponent()}
    </ControlGroup>);
};

CheckboxField.propTypes = {
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

CheckboxField.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: defaultControlStylesBase.bgColor,
  disabled: false,
  plainText: false,
  validationError: '',
};

