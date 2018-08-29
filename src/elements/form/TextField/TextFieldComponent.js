import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from 'src/elements/typography/textStyles';
import { defaultControlStylesBase, controlStylesBase } from '../ControlGroup/baseControlStyle';
import { passThrough } from 'src/utils/componentHelpers';

export const TextFieldComponent = props => {
  const textBase = textStylesBase(props);
  const controlBase = controlStylesBase(props);
  const ProtoTextFieldComponent = styled.input.attrs({
    type: 'text',
  })`
    ${textBase}
    ${controlBase}
  `;
  return <ProtoTextFieldComponent {...passThrough(TextFieldComponent, props)} />;
};

TextFieldComponent.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
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
  borderRadius: defaultControlStylesBase.borderRadius,
  padding: defaultControlStylesBase.padding,
};

export const withTextFieldComponentConvertor = () => {
  class TextFieldComponentConvertor extends React.Component {
    render() {
      const {
        // assistiveText,
        // validationError,
        // controlLabel,
        controlId,
        ...otherProps
      } = this.props;
      const controlJSX = (<TextFieldComponent id={controlId} {...otherProps} />);
      return controlJSX;
    }
  }
  TextFieldComponentConvertor.propTypes = {
    controlId: PropTypes.string,
    // assistiveText: PropTypes.string,
    // controlLabel: PropTypes.string,
    // validationError: PropTypes.string,
  };
  TextFieldComponentConvertor.defaultProps = {
    // assistiveText: '',
    // validationError: '',
    // controlLabel: '',
    controlId: '',
  };
  return TextFieldComponentConvertor;
};
