import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from 'src/elements/typography/textStyles';
import { defaultControlStylesBase, controlStylesBase } from '../ControlGroup/baseControlStyle';
import { passThrough } from 'src/utils/componentHelpers';
import { width } from 'styled-system';
import { withStyledSystem } from 'src/decorators';

export const TextFieldComponent = props => {
  const textBase = textStylesBase(props);
  const controlBase = controlStylesBase(props);
  const ProtoBase = styled.input.attrs({
    type: 'text',
  })`
    ${textBase}
    ${controlBase}
  `;
  const ProtoStyledSystem = withStyledSystem(ProtoBase, props);
  return <ProtoStyledSystem {...passThrough(TextFieldComponent, props)} />;
};

TextFieldComponent.propTypes = {
  allowStyledWidth: PropTypes.bool,
  borderColor: PropTypes.string,
  borderColorActive: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  disallowAllStyled: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  padding: PropTypes.string,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  ...width.propTypes,
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
  disallowAllStyled: true,
  allowStyledWidth: true,
  width: 1,
};
