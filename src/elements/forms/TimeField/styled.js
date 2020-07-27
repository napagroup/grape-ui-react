import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { fontWeight } from 'styled-system';
import {
  ControlGroup,
  getAssistiveText,
  PlainText,
} from 'src/elements/forms/utils';
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
import { TimeComponent } from './component';
import {
  timeFieldPropTypes,
  timeFieldDefaultProps,
} from './utils';

const controlStylesTimeField = props => (!props.validationError ? controlStyles(props)
  : controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' }));

const TimeFieldComponent = styled(TimeComponent)`
  ${controlColor}
  .rc-time-picker-input {
    ${controlStylesTimeField}
  }
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${textAlignCore}
  ${textDecorationCore}
`;

TimeFieldComponent.propTypes = {
  ...timeFieldPropTypes,
};

TimeFieldComponent.defaultProps = {
  ...timeFieldDefaultProps,
};

const propsToTrim = [
  'assistiveText',
  'controlId',
  'controlLabelProps',
  'labelText',
  'validationError',
  ...Object.keys(spaceProps.propTypes),
];

const getTimeValue = propsFromComponent => {
  const {
    defaultValue,
    value,
    format,
  } = propsFromComponent;
  return moment(value || defaultValue).format(format);
};

const renderValueOrComponent = propsFromComponent => {
  const {
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = {
      ...removeSomeProps(propsFromComponent, plaintextPropsToTrim),
      value: getTimeValue(propsFromComponent),
    };
    return <PlainText {...plainTextProps} />;
  }
  return <TimeFieldComponent {...propsFromComponent} />;
};

const TimeField = props => {
  const {
    activeColor,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    formStyle,
    isHidden,
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
      isHidden={isHidden}
      labelText={newlabel}
      name={name}
      validationError={validationError}
      {...controlGroupProps}
    >
      {renderValueOrComponent({ ...childProps })}
    </ControlGroup>
  );
};

TimeField.propTypes = {
  ...control.propTypes,
  ...typography.propTypes,
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
  /** Allows for a ref to be defined to the DOM input. */
  inputRef: refType,
  /** Hides component */
  isHidden: PropTypes.bool,
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
};

TimeField.defaultProps = {
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
  isHidden: false,
  isRequired: false,
  labelText: '',
  name: '',
  plainText: false,
  validationError: '',
};

/** @component */
export { TimeField };
