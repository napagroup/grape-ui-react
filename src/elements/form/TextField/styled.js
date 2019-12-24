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
const multilineStyles = props => (props.multiline ? 'resize: none;' : '');
export const TextFieldComponent = styled(TextInputComponent)`
  ${controlColor}
  ${controlStylesTextField}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${multilineStyles}
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
  'assistiveText',
  'controlId',
  'controlLabelProps',
  'labelText',
  'controlLabelProps',
  'validationError',
  ...Object.keys(spaceProps.propTypes),
];
export const TextField = React.forwardRef((props, ref) => {
  const {
    activeColor,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    isRequired,
    labelText,
    name,
    validationError,
    ...otherProps
  } = props;
  const childProps = {
    activeColor,
    bg,
    id: controlId || name,
    isRequired,
    labelText,
    name,
    ref,
    validationError,
    ...removeSomeProps(otherProps, propsToTrim),
  };
  const newlabel = !isRequired ? labelText : `${labelText}*`;
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(props)}
      assistiveTextProps={assistiveTextProps}
      bg={defaultControlStyles.bg}
      controlId={controlId}
      controlLabelProps={controlLabelProps}
      labelText={newlabel}
      name={name}
      validationError={validationError}
      {...controlGroupProps}
    >
      <TextFieldComponent {...childProps} />
    </ControlGroup>
  );
});

TextField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  assistiveTextProps: PropTypes.object,
  bg: PropTypes.string,
  controlGroupProps: PropTypes.object,
  controlId: PropTypes.string,
  controlLabelProps: PropTypes.object,
  fontFamily: PropTypes.string,
  formStyle: PropTypes.string,
  isRequired: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  validationError: PropTypes.string,
  ...borderRadius.propTypes,
};

TextField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: null,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  fontFamily: defaultControlStyles.fontFamily,
  formStyle: '',
  isRequired: false,
  labelText: '',
  name: '',
  validationError: '',
};
