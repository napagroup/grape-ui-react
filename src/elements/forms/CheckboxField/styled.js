import React from 'react';
import PropTypes from 'prop-types';
import {
  ControlGroup,
  ControlLabel,
  getAssistiveText,
  PlainText,
} from 'src/elements/forms/utils';
import { Flex } from 'src/elements/grid';
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
  'isHidden',
  'isRequired',
  'labelText',
  'plainText',
  'validationError',
];

const plainTextPropsToTrim = [
  'flexDirection',
  'isHidden',
  'name',
  'onChange',
  'options',
  'wrapperProps',
  'type',
  ...propsToTrim,
];

const isChecked = values => values && values.filter(val => !val).length === 0;
const getNameProp = ({ idx, name, type }) => (type === 'checkbox' ? `${name}[${idx}]` : name);

const renderValueOrComponent = propsFromComponent => {
  const { name, options } = propsFromComponent;

  const {
    controlId,
    disabled,
    flexDirection,
    hasSelectAll,
    inputRef,
    enableAutoChecking,
    onChange = () => {},
    onChangeSelectAll = () => {},
    plainText,
    optionSelectAll = { label: 'Select All', value: true },
    type,
    values,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = {
      ...removeSomeProps(propsFromComponent, plainTextPropsToTrim),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const childProps = { id: controlId, ...removeSomeProps(propsFromComponent, propsToTrim) };
  const checkboxFields = options.map((option, idx) => {
    const checkedProp = {};
    if (enableAutoChecking) {
      checkedProp.checked = values[idx];
    }
    return (
      <CheckboxInput
        {...childProps}
        {...checkedProp}
        // eslint-disable-next-line react/no-array-index-key
        key={`${name}[${idx}]`}
        disabled={disabled}
        flexDirection={flexDirection}
        inputRef={inputRef}
        name={getNameProp({ idx, name, type })}
        onChange={onChange}
        option={option}
        type={type}
        value={option.value}
      />
    );
  });
  return (
    <Flex flexDirection="column">
      {hasSelectAll
        && (
          <CheckboxInput
            alt={`${name}_selectAll`}
            checked={isChecked(values)}
            inputRef={inputRef}
            name={`${name}_selectAll`}
            onChange={onChangeSelectAll}
            option={optionSelectAll}
            value={optionSelectAll.value}
          />
        )}
      {checkboxFields}
    </Flex>
  );
};

const CheckboxField = props => {
  const {
    activeColor,
    assistiveText,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    disabled,
    isHidden,
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
      isHidden={isHidden}
      validationError={validationError}
    >
      {renderControlGroupLabel(labelProps)}
      {renderValueOrComponent(props)}
    </ControlGroup>
  );
};

CheckboxField.propTypes = {
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
  /** Hides component */
  isHidden: PropTypes.bool,
  /** This will add an asterisk (*) to the `labelText` and provided `assistiveText` if none is provided. */
  isRequired: PropTypes.bool,
  /** The string value displayed on top of the control in the `ControlLabel` component. */
  labelText: PropTypes.string,
  /** Used to render a dropdown control as a `PlainText` element. */
  plainText: PropTypes.bool,
  /** Used to set type as either checkbox or radio. Defaults to checkbox. */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /** Error text that will appear below the control when validation fires. */
  validationError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  /** Allows for custom props to be passed down to the `CheckboxFieldWrapper` component. */
  wrapperProps: PropTypes.object,
};

CheckboxField.defaultProps = {
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
  isHidden: false,
  isRequired: false,
  labelText: '',
  plainText: false,
  type: 'checkbox',
  validationError: '',
  wrapperProps: {},
};

CheckboxField.Input = CheckboxInput;

/** @component */
export { CheckboxField };
