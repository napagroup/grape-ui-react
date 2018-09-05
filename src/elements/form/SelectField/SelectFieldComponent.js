import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from 'src/elements/typography/textStyles';
import { defaultControlStylesBase, controlStylesBase } from '../ControlGroup/baseControlStyle';
import { passThrough, resolveColor } from 'src/utils/componentHelpers';
import Select from 'react-select';

export const SelectFieldComponent = props => {
  const {
    isDisabled,
    multiple,
    validationError,
  } = props;
  const textBase = textStylesBase(props);
  const getControlStyle = () => {
    if (!validationError && !isDisabled) {
      return controlStylesBase(props);
    } else if (validationError) {
      return controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') });
    }
    return controlStylesBase({ ...props, borderColor: resolveColor('white.light'), activeColor: resolveColor('white.light') });
  };
  const controlBase = getControlStyle();

  const ProtoBase = styled(Select).attrs({
    isDisabled,
    isMulti: multiple,
  })`
    ${textBase}
    ${controlBase}
  `;

  return <ProtoBase {...passThrough(SelectFieldComponent, props)} />;
};

SelectFieldComponent.propTypes = {
  activeColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  isDisabled: PropTypes.bool,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  multiple: PropTypes.bool,
  padding: PropTypes.string,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  validationError: PropTypes.string,
};

SelectFieldComponent.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  borderColor: defaultControlStylesBase.borderColor,
  borderRadius: defaultControlStylesBase.borderRadius,
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  isDisabled: false,
  lg: defaultTextStylesBase.lg,
  multiple: false,
  padding: defaultControlStylesBase.padding,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  validationError: '',
};
