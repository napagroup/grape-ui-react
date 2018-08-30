import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from 'src/elements/typography/textStyles';
import { defaultControlStylesBase, controlStylesBase } from '../ControlGroup/baseControlStyle';
import { passThrough } from 'src/utils/componentHelpers';

export const TextFieldComponent = props => {
  const textBase = textStylesBase(props);
  const controlBase = controlStylesBase(props);
  const ProtoBase = styled.input.attrs({
    type: 'text',
  })`
    ${textBase}
    ${controlBase}
  `;
  return <ProtoBase {...passThrough(TextFieldComponent, props)} />;
};

TextFieldComponent.propTypes = {
  borderColor: PropTypes.string,
  borderColorActive: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  padding: PropTypes.string,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  borderColor: defaultControlStylesBase.borderColor,
  borderColorActive: defaultControlStylesBase.borderColorActive,
  borderRadius: defaultControlStylesBase.borderRadius,
  padding: defaultControlStylesBase.padding,
};
