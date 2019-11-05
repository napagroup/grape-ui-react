import PropTypes from 'prop-types';
import React from 'react';
import { getAssistiveText } from 'src/elements/form/AssistiveText';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { PlainText } from 'src/elements/form/PlainText';
import { getGlobalOverrides } from 'src/global-styles';
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
  resolveColor,
  resolveElevation,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import styled from 'styled-components';
import { borderRadius, fontWeight, space } from 'styled-system';
import { SelectComponent } from './component';

const controlStylesSelectField = props => {
  if (props.validationError) {
    return controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' });
  }
  return controlStyles(props);
};

const getIndicatorsHeight = props => {
  const { formStyle, labelText } = props;
  if (formStyle === 'filled' && labelText) return 'calc(100% - 1rem)';
  return '100%';
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

const reactSelectStylesOverrides = props => {
  const {
    chipBg,
    menuFocusBg,
    menuFocusColor,
    menuSelectedBg,
    menuSelectedColor,
    placeholderColor,
  } = props;
  const globalOverrides = getGlobalOverrides(props);
  const { padding } = defaultControlStyles;
  const indicatorsWidth = '40px';
  return `
    .grape-ui-select__control {
      display: flex;
      border: 0;
      box-shadow: none;
      min-height: 0;
    }
    .grape-ui-select__indicator {
      padding: 0;
    }
    .grape-ui-select__indicator-separator {
      display: none;
    }
    .grape-ui-select__value-container {
      flex-wrap: nowrap;
      margin-right: ${indicatorsWidth};
      padding: 0;
    }
    .grape-ui-select__single-value {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .grape-ui-select__menu {
      position: absolute;
      left: 0;
      margin: 0;
      padding: 0.5rem 0;
      ${resolveElevation('03', globalOverrides)}
    }
    .grape-ui-select__option {
      padding: 0.5rem 1rem;
    }
    .grape-ui-select__option--is-focused {
      background: ${resolveColor(menuFocusBg, globalOverrides)};
      color: ${resolveColor(menuFocusColor, globalOverrides)};
    }
    .grape-ui-select__option--is-selected {
      background: ${resolveColor(menuSelectedBg, globalOverrides)};
      color: ${resolveColor(menuSelectedColor, globalOverrides)};
    }
    .grape-ui-select__placeholder {
      color: ${resolveColor(placeholderColor, globalOverrides)};
    }
    .grape-ui-select__multi-value {
      display: flex;
      margin: 0.25rem;
      padding: 0.25rem;
      border-radius: 4px;
      background-color: ${resolveColor(chipBg, globalOverrides)};
      font-size: 80%;
    }
    .grape-ui-select__multi-value__label {
      padding: 0 0.25rem;
    }
    .grape-ui-select__multi-value__remove {
      cursor: pointer;
      &:hover path {
        fill: ${resolveColor('brandLinkHover', globalOverrides)}
      }
    }
    .grape-ui-select__indicators {
      height: ${getIndicatorsHeight(props)};
      justify-content: flex-end;
      position: absolute;
      right: ${padding};
      bottom: 0;
      width: ${indicatorsWidth};
    }
    &.grape-ui-select--is-rtl {
      .grape-ui-select__value-container {
        padding-right: 0;
        padding-left: ${indicatorsWidth};
      }
      .grape-ui-select__indicators {
        left: ${padding};
        right: auto;
      }
    }
  `;
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
  ${reactSelectStylesOverrides}
  ${disabledStyleSelectField}
`;
SelectFieldComponent.propTypes = {
  ...control.propTypes,
  bg: PropTypes.string,
  chipBg: PropTypes.string,
  formStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  menuFocusBg: PropTypes.string,
  menuFocusColor: PropTypes.string,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

SelectFieldComponent.defaultProps = {
  ...defaultControlStyles,
  ...defaultStylesBase,
  bg: null,
  chipBg: 'white.dark',
  formStyle: '',
  isDisabled: false,
  isFocused: false,
  menuFocusBg: 'brandLinkHover',
  menuFocusColor: 'white',
  menuSelectedBg: 'brandLink',
  menuSelectedColor: 'white',
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
  'controlGroupProps',
  'controlId',
  'disabled',
  'assistiveText',
  'isRequired',
  'plainText',
];
const plaintextPropsToTrim = ['controlId', 'assistiveText', 'validationError', 'isRequired', 'formStyle', 'controlGroupProps'];
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
export const SelectField = props => {
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
  const newlabel = !isRequired ? labelText : `${labelText}*`;
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
  activeColor: PropTypes.string,
  assistiveText: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  assistiveTextProps: PropTypes.object,
  controlGroupProps: PropTypes.object,
  controlId: PropTypes.string,
  controlLabelProps: PropTypes.object,
  disabled: PropTypes.bool,
  formStyle: PropTypes.string,
  isRequired: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  plainText: PropTypes.bool,
  validationError: PropTypes.string,
  ...borderRadius.propTypes,
  ...space.propTypes,
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
  isRequired: false,
  labelText: '',
  name: '',
  plainText: false,
  validationError: '',
};
