import PropTypes from 'prop-types';
import React from 'react';
import { getAssistiveText } from 'src/elements/form/AssistiveText';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  control,
  controlColor,
  controlStyles,
  defaultControlStyles,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  spaceProps,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import styled from 'styled-components';
import { borderRadius, fontWeight } from 'styled-system';
import { TextInputComponent } from './component';

const controlStylesTextField = props => (!props.validationError ? controlStyles(props)
  : controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' }));

export const TextFieldComponent = styled(TextInputComponent)`
  ${controlColor}
  ${controlStylesTextField}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${textAlignCore}
  ${textDecorationCore}
`;

TextFieldComponent.propTypes = {
  formStyle: PropTypes.string,
  ...control.propTypes,
  ...typography.propTypes,
};

TextFieldComponent.defaultProps = {
  formStyle: '',
  ...defaultControlStyles,
};

const propsToTrim = [
  'activeColor',
  'assistiveText',
  'controlId',
  'labelText',
  'validationError',
  ...Object.keys(spaceProps.propTypes),
];
export const TextField = props => {
  const {
    activeColor,
    bg,
    controlId,
    labelText,
    required,
    validationError,
    ...otherProps
  } = props;
  const childProps = {
    bg,
    id: controlId,
    labelText,
    required,
    validationError,
    ...removeSomeProps(otherProps, propsToTrim),
  };
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(props)}
      bg={defaultControlStyles.bg}
      controlId={controlId}
      labelText={labelText}
      pb={3}
      pt={1}
      validationError={validationError}
    >
      <TextFieldComponent {...childProps} />
    </ControlGroup>
  );
};

TextField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  bg: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  formStyle: PropTypes.string,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  validationError: PropTypes.string,
  ...borderRadius.propTypes,
};

TextField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: null,
  formStyle: '',
  labelText: '',
  required: false,
  validationError: '',
};
