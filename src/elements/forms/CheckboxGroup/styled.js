
import React from 'react';
import PropTypes from 'prop-types';
import {
  ControlGroup,
  ControlLabel,
  getAssistiveText,
  PlainText,
} from 'src/elements/forms/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { defaultControlStyles, refType } from 'src/utils/styledHelpers';
import { CheckboxInput } from './CheckboxInput';

const renderControlGroupLabel = propsFromControlGroup => {
  const {
    activeColor,
    bg,
    controlId,
    controlLabelProps,
    disabled,
    labelText,
    plainText,
    isRequired,
    validationError,
  } = propsFromControlGroup;
  if (!labelText) {
    return null;
  }
  const labelCaption = !isRequired ? labelText : `${labelText}*`;
  const defaultPositionProps = {
    height: 'auto',
    position: 'relative',
    top: 'auto',
  };
  const positionProps = !plainText ? defaultPositionProps : '';
  const labelProps = {
    activeColor,
    bg,
    ...controlLabelProps,
    disabled,
    htmlFor: controlId,
    validationError,
    ...positionProps,
  };
  return (
    <ControlLabel {...labelProps}>
      {labelCaption}
    </ControlLabel>
  );
};

const propsToTrim = [
  'activeColor',
  'assistiveText',
  'assistiveTextProps',
  'bg',
  'controlGroupProps',
  'controlId',
  'controlLabelProps',
  'isRequired',
  'labelText',
  'plainText',
  'validationError',
];

const plainTextPropsToTrim = [
  'flexDirection',
  'name',
  'onChange',
  'options',
  'wrapperProps',
  ...propsToTrim,
];

const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    disabled,
    flexDirection,
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = {
      ...removeSomeProps(propsFromComponent, plainTextPropsToTrim),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const childProps = { id: controlId, ...removeSomeProps(propsFromComponent, propsToTrim) };
  return (
    <CheckboxInput
      {...childProps}
      disabled={disabled}
      flexDirection={flexDirection}
    />
  );
};
const CheckboxGroup = props => {
  const {
    activeColor,
    assistiveText,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    disabled,
    isRequired,
    labelText,
    plainText,
    validationError,
  } = props;
  const additionalControlGroupProps = {
    ...controlGroupProps,
    controlId,
  };
  const labelProps = {
    activeColor,
    bg,
    controlId,
    controlLabelProps,
    disabled,
    isRequired,
    labelText,
    plainText,
    validationError,
  };
  const assistiveProps = { assistiveText, isRequired };
  return (
    <ControlGroup
      {...additionalControlGroupProps}
      assistiveText={getAssistiveText(assistiveProps)}
      assistiveTextProps={assistiveTextProps}
      validationError={validationError}
    >
      {renderControlGroupLabel(labelProps)}
      {renderValueOrComponent(props)}
    </ControlGroup>
  );
};

CheckboxGroup.propTypes = {
  /** Defines the color for the label and border color when the focus is in the control. */
  activeColor: PropTypes.string,
  /** Provides helper text for the control.  When provided with no `assistiveText`, `isRequired` will add a default '*Required` helper text.  When provided with `validationError`, `assistiveText`'s value will not be displayed on the UI. */
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  /** Allows for custom props to be passed down to the `AsssistiveText` component. */
  assistiveTextProps: PropTypes.object,
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
  flexDirection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  fontFamily: PropTypes.string,
  /** Allows for a ref to be defined to the DOM input. */
  inputRef: refType,
  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,
  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,
  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,
  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  /** Allows for custom props to be passed down to the `CheckboxGroupWrapper` component. */
  wrapperProps: PropTypes.object,
};

CheckboxGroup.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  assistiveTextProps: {},
  bg: defaultControlStyles.bg,
  controlGroupProps: {},
  controlId: '',
  controlLabelProps: {},
  disabled: false,
  flexDirection: 'column',
  fontFamily: 'base',
  inputRef: () => {},
  isRequired: false,
  labelText: '',
  plainText: false,
  validationError: '',
  wrapperProps: {},
};

/** @component */
export { CheckboxGroup };
