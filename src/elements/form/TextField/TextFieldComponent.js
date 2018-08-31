import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from 'src/elements/typography/textStyles';
import { defaultControlStylesBase, controlStylesBase } from '../ControlGroup/baseControlStyle';
import { passThrough, resolveColor } from 'src/utils/componentHelpers';

export const TextFieldComponent = props => {
  const { plainText, validationError } = props;
  const textBase = textStylesBase(props);
  const controlBase = !validationError ? controlStylesBase(props) : controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') });
  const ProtoBase = styled.input.attrs({
    readOnly: plainText,
    type: 'text',
  })`
    ${textBase}
    ${controlBase}
  `;
  return <ProtoBase {...passThrough(TextFieldComponent, props)} />;
};

TextFieldComponent.propTypes = {
  activeColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  padding: PropTypes.string,
  plainText: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  validationError: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  borderColor: defaultControlStylesBase.borderColor,
  borderRadius: defaultControlStylesBase.borderRadius,
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  padding: defaultControlStylesBase.padding,
  plainText: defaultControlStylesBase.plainText,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  validationError: '',
};
