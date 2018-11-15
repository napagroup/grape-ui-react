import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from 'src/elements/typography/textStyles';
import { defaultControlStylesBase, controlStylesBase, focusStylesBase } from '../ControlGroup/baseControlStyle';
import { passThrough, resolveColor, resolveElevation } from 'src/utils/componentHelpers';
import Select from 'react-select';
import stateManager from 'react-select/lib/stateManager';
import { active } from 'styled-system';

export const SelectFieldComponent = props => {
  const {
    chipBg,
    isDisabled,
    isFocused,
    menuFocusBg,
    menuFocusColor,
    menuSelectedBg,
    menuSelectedColor,
    multiple,
    placeholderColor,
    validationError,
  } = props;
  const textBase = textStylesBase(props);
  const getControlStyle = () => {
    if (!validationError && !isDisabled) {
      return controlStylesBase(props);
    } else if (validationError) {
      return controlStylesBase({ ...props, borderColor: resolveColor('brandDanger'), activeColor: resolveColor('brandDanger') });
    }
    return controlStylesBase({ ...props, borderColor: resolveColor('white.light'), activeColor: resolveColor('white.light') });
  };
  const controlBase = getControlStyle();
  const getFocusStyle = () => {
    if (isFocused) {
      return focusStylesBase(props);
    }
    return '';
  };
  const focusBase = getFocusStyle();
  const reactSelectStylesOverrides = `
    .grape-ui-select__control {
      display: flex;
    }
    .grape-ui-select__indicator {
      padding: 0;
    }
    .grape-ui-select__indicator-separator {
      display: none;
    }
    .grape-ui-select__value-container {
      padding: 0;
    }
    .grape-ui-select__menu {
      position: absolute;
      left: 0;
      margin: 0;
      padding: 0.5rem 0;
      ${resolveElevation('03')}
    }
    .grape-ui-select__option {
      padding: 0.5rem 1rem;
    }
    .grape-ui-select__option--is-focused {
      background: ${resolveColor(menuFocusBg)};
      color: ${resolveColor(menuFocusColor)};
    }
    .grape-ui-select__option--is-selected {
      background: ${resolveColor(menuSelectedBg)};
      color: ${resolveColor(menuSelectedColor)};
    }
    .grape-ui-select__placeholder {
      color: ${resolveColor(placeholderColor)};
    }
    .grape-ui-select__multi-value {
      display: flex;
      margin-right: 0.25rem;
      padding: 0.25rem;
      border-radius: 4px;
      background-color: ${resolveColor(chipBg)};
      font-size: 80%;
    }
    .grape-ui-select__multi-value__label {
      padding: 0 0.25rem;
    }
    .grape-ui-select__multi-value__remove {
      cursor: pointer;
      &:hover path {
        fill: ${resolveColor('brandLinkHover')}
      }
    }
  `;

  const styleOverrides = {
    control: styles => null,
    option: styles => null,
    input: styles => null,
    multiValue: styles => null,
    multiValueLabel: styles => null,
    multiValueRemove: styles => null,
    placeholder: styles => null,
    singleValue: styles => null,
  };

  const ProtoBase = styled(Select).attrs({
    isDisabled,
    isMulti: multiple,
    styles: styleOverrides,
    className: 'grape-ui-select-container',
    classNamePrefix: 'grape-ui-select',
  })`
    ${textBase}
    ${controlBase}
    ${focusBase}
    ${reactSelectStylesOverrides}
  `;

  return <ProtoBase {...passThrough(SelectFieldComponent, props)} />;
};

SelectFieldComponent.propTypes = {
  activeColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  chipBg: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  menuFocusBg: PropTypes.string,
  menuFocusColor: PropTypes.string,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool,
  padding: PropTypes.string,
  placeholderColor: PropTypes.string,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  validationError: PropTypes.string,
};

SelectFieldComponent.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  borderColor: defaultControlStylesBase.borderColor,
  borderRadius: defaultControlStylesBase.borderRadius,
  chipBg: 'white.dark',
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  isDisabled: false,
  isFocused: defaultControlStylesBase.isFocused,
  lg: defaultTextStylesBase.lg,
  menuFocusBg: 'brandLinkHover',
  menuFocusColor: 'white',
  menuSelectedBg: 'brandLink',
  menuSelectedColor: 'white',
  multiple: false,
  padding: defaultControlStylesBase.padding,
  placeholderColor: defaultControlStylesBase.placeholderColor,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  validationError: '',
};
