import PropTypes from 'prop-types';
import React from 'react';
import { ControlGroup, getAssistiveText, PlainText } from 'src/elements/form/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  control,
  controlColor,
  controlStyles,
  defaultControlStyles,
  defaultStylesBase,
  disabledStyle,
  focusStyles,
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
import { SelectComponent } from './component';

const controlStylesSelectField = props => {
  if (props.validationError) {
    return controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' });
  }
  return controlStyles(props);
};

const focusStyleSelectField = props => {
  if (props.isFocused) {
    return focusStyles(props);
  }
  return '';
};

const disabledStyleSelectField = props => {
  if (props.isDisabled) {
    return disabledStyle;
  }
  return '';
};

export const SelectFieldComponent = styled(SelectComponent)`
  ${controlColor}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${controlStylesSelectField}
  ${focusStyleSelectField}
  ${disabledStyleSelectField}
`;
SelectFieldComponent.propTypes = {
  ...control.propTypes,
  bg: PropTypes.string,
  formStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

SelectFieldComponent.defaultProps = {
  ...defaultControlStyles,
  ...defaultStylesBase,
  bg: null,
  formStyle: '',
  isDisabled: false,
  isFocused: false,
  multiple: false,
  validationError: '',
};

const renderSelectFieldComponent = selectFieldProps => {
  const {
    defaultValue,
    value,
  } = selectFieldProps;

  return (<SelectFieldComponent {...selectFieldProps} value={value || defaultValue} />);
};
const propsToTrim = [
  'assistiveText',
  'controlGroupProps',
  'controlId',
  'disabled',
  'isRequired',
  'plainText',
];

const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    disabled,
    name,
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = removeSomeProps(propsFromComponent, plaintextPropsToTrim);
    return <PlainText {...plainTextProps} />;
  }
  const childProps = {
    id: controlId || name,
    isDisabled: disabled,
    ...removeSomeProps(propsFromComponent, propsToTrim),
  };
  return renderSelectFieldComponent(childProps);
};
const SelectField = props => {
  const {
    activeColor,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    disabled,
    assistiveText,
    isRequired,
    labelText,
    name,
    validationError,
  } = props;
  const assistiveProps = { assistiveText, isRequired };
  const newlabel = isRequired && labelText ? `${labelText}*` : labelText;
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(assistiveProps)}
      assistiveTextProps={assistiveTextProps}
      bg={bg}
      controlId={controlId}
      controlLabelProps={controlLabelProps}
      disabled={disabled}
      labelText={newlabel}
      name={name}
      validationError={validationError}
      {...controlGroupProps}
    >
      {renderValueOrComponent({
        ...props,
      })}
    </ControlGroup>
  );
};

SelectField.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,
  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: PropTypes.object,
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
  /**
   * Use 'filled' or 'outlined'
   * @see See [Material Design](https://material.io/components/text-fields/#usage) for options */
  formStyle: PropTypes.string,
  /** Allows for a ref to be defined to the DOM input.
   * @see See [React-Select/Replacing Components](https://react-select.com/props#replacing-components) for more */
  inputRef: refType,
  /** Should be used when the control is not meant to be required and is able to handle a null value.
   * @see See [React-Select/Select-Props](https://react-select.com/props#select-props) for more on this prop. */
  isClearable: PropTypes.bool,
  /** Using React-Select's `Creatable` control, this allows dropdowns to allow for custom values.
   * @see See [React-Select/Creatable](https://react-select.com/creatable) for more on this control. */
  isCreatable: PropTypes.bool,
  /** Allows for multiple options, each displayed as a chip. */
  isMulti: PropTypes.bool,
  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,
  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,
  /** `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`.  Use these to define the boxShadow and zIndex styles. */
  menuElevation: PropTypes.string,
  /** Use this to overwrite the z-index manually. */
  menuZIndex: PropTypes.string,
  /** Should be used on each form control.  When no `id` or `controlId` are provided, `name` will populate both fields. */
  name: PropTypes.string,
  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,
  /** Can be used to override specific styling on particular aspects of the control.
   * @see See [React-Select/Styles](https://react-select.com/styles) for a full list of style keys. */
  styleOverrides: PropTypes.object,
  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  ...borderRadius.propTypes,
  ...spaceProps.propTypes,
};

SelectField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  formStyle: '',
  inputRef: () => {},
  isClearable: false,
  isCreatable: false,
  isMulti: false,
  isRequired: false,
  labelText: '',
  menuElevation: '01',
  menuZIndex: '',
  name: '',
  plainText: false,
  styleOverrides: {},
  validationError: '',
};

/** @component */
export { SelectField };
