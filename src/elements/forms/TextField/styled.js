import PropTypes from 'prop-types';
import React from 'react';
import { ControlGroup, getAssistiveText, PlainText } from 'src/elements/forms/utils';
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
  plaintextPropsToTrim,
  refType,
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
  'validationError',
  ...Object.keys(spaceProps.propTypes),
];

const renderValueOrComponent = propsFromComponent => {
  const {
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = removeSomeProps(propsFromComponent, plaintextPropsToTrim);
    return <PlainText {...plainTextProps} />;
  }
  return <TextFieldComponent {...propsFromComponent} />;
};
export const TextField = props => {
  const {
    activeColor,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    formStyle,
    isRequired,
    labelText,
    name,
    validationError,
    ...otherProps
  } = props;
  const childProps = {
    activeColor,
    bg,
    formStyle,
    id: controlId || name,
    isRequired,
    labelText,
    name,
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
      {renderValueOrComponent({ ...childProps })}
    </ControlGroup>
  );
};

TextField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,
  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: PropTypes.object,
  /** Defines the background color for the control. */
  bg: PropTypes.string,
  /** Allows for custom props to be passed down to the `ControlGroup` component. */
  controlGroupProps: PropTypes.object,
  /** Will pass its value to the control's `id` as well as the label's `htmlFor`.
   * @deprecated Do not use! Use `name` instead!
  */
  controlId: PropTypes.string,
  /** Allows for custom props to be passed down to the `ControlLabel` component. */
  controlLabelProps: PropTypes.object,
  /** Basic HTML attribute, needed for styling. */
  disabled: PropTypes.bool,
  /** Allows for custom font family to be passed down to the control. */
  fontFamily: PropTypes.string,
  /**
  * Use 'filled' or 'outlined'
  * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: PropTypes.string,
  /** Allows for a ref to be defined to the DOM input.
  * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: refType,
  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,
  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,
  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: PropTypes.string,
  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,
  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
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
  disabled: false,
  fontFamily: defaultControlStyles.fontFamily,
  formStyle: '',
  inputRef: () => {},
  isRequired: false,
  labelText: '',
  name: '',
  plainText: false,
  validationError: '',
};
