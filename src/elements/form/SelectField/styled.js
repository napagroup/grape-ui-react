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
      padding: 0;
      padding-right: ${indicatorsWidth};
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
      height: 100%;
      justify-content: flex-end;
      position: absolute;
      right: ${padding};
      top: 0;
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
  'bg',
  'controlId',
  'disabled',
  'assistiveText',
  'required',
  'plainText',
];
const plaintextPropsToTrim = ['controlId', 'assistiveText', 'validationError', 'required', 'formStyle'];
const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    disabled,
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = removeSomeProps(propsFromComponent, plaintextPropsToTrim);
    return <PlainText {...plainTextProps} />;
  }
  const childProps = {
    id: controlId,
    ...removeSomeProps(propsFromComponent, propsToTrim),
    isDisabled: disabled,
  };
  return renderSelectFieldComponent(childProps);
};
export const SelectField = props => {
  const {
    activeColor,
    bg,
    controlId,
    disabled,
    formStyle,
    assistiveText,
    labelText,
    required,
    validationError,
    plainText,
  } = props;
  const assistiveProps = { assistiveText, required };
  const newlabel = !required ? labelText : `${labelText}*`;
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(assistiveProps)}
      bg={bg}
      controlId={controlId}
      disabled={disabled}
      labelText={newlabel}
      pb={3}
      pt={1}
      validationError={validationError}
    >
      {renderValueOrComponent({
        ...props,
        formStyle,
        labelText,
        plainText,
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
  controlId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  formStyle: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  plainText: PropTypes.bool,
  required: PropTypes.bool,
  validationError: PropTypes.string,
  ...borderRadius.propTypes,
  ...space.propTypes,
};

SelectField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  disabled: false,
  formStyle: '',
  plainText: false,
  required: false,
  validationError: '',
};
