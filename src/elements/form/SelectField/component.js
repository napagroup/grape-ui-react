import React from 'react';
import PropTypes from 'prop-types';
import {
  control,
  CSS_DEFAULT_FONT_FAMILY_VALUE,
  defaultControlStyles,
  resolveBoxShadow,
  resolveColor,
  resolveFontFamily,
  resolveZIndex,
  typography,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Select, { Creatable } from 'react-select';
import { getGlobalOverrides } from 'src/global-styles';

const styleOverrides = ({ ...props }) => {
  const { menuElevation } = props;
  const globalOverrides = getGlobalOverrides(props);
  const multiValueMargin = 2;
  const resolveBackground = ({ isFocused, isSelected }) => {
    let background = 'inherit';
    if (isFocused) {
      background = resolveColor('brandLinkHover', globalOverrides);
    } else if (isSelected) {
      background = resolveColor('brandLink', globalOverrides);
    }
    return background;
  };
  return {
    clearIndicator: provided => ({
      ...provided,
      padding: '0',
    }),
    control: () => ({
      border: '0',
      boxShadow: 'none',
      display: 'flex',
      minHeight: '0',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      padding: '0',
    }),
    indicatorsContainer: provided => ({
      ...provided,
      bottom: '0',
      justifyContent: 'flex-end',
      padding: '0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    input: styles => null,
    menu: provided => ({
      ...provided,
      boxShadow: resolveBoxShadow(menuElevation, globalOverrides),
      left: '0',
      marginBottom: '0',
      marginTop: '2px',
      padding: '8px 0',
      position: 'absolute',
      width: '100%',
      zIndex: resolveZIndex(menuElevation, globalOverrides),
    }),
    multiValue: () => ({
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      display: 'flex',
      fontSize: '80%',
      margin: multiValueMargin,
      padding: '4px',
    }),
    multiValueLabel: () => ({
      padding: '0 4px',
    }),
    multiValueRemove: () => ({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      background: resolveBackground({ isFocused, isSelected }),
      color: isFocused || isSelected ? resolveColor('white', globalOverrides) : 'inherit',
      fontFamily: resolveFontFamily(CSS_DEFAULT_FONT_FAMILY_VALUE),
      padding: '8px 16px',
    }),
    placeholder: () => ({
      color: resolveColor(defaultControlStyles.placeholderColor, globalOverrides),
    }),
    singleValue: () => ({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
    valueContainer: (provided, { hasValue, isMulti }) => ({
      ...provided,
      flex: '1 1 0',
      flexWrap: isMulti ? 'wrap' : 'nowrap',
      margin: hasValue && isMulti ? multiValueMargin * -1.5 : null,
      padding: '0',
    }),
  };
};
const propsToTrim = [
  ...Object.keys(control.propTypes),
  'chipBg',
  'formStyle',
  'isCreatable',
  'isDisabled',
  'isFocused',
  'labelText',
  'menuSelectedBg',
  'menuSelectedColor',
  'multiple',
  ...Object.keys(typography.propTypes),
  'validationError',
];
export const SelectComponent = ({ children, ...props }) => {
  const {
    isCreatable,
    isDisabled,
    isFocused,
    multiple,
  } = props;
  if (isCreatable) {
    return (
      <Creatable
        className="grape-ui-select-container"
        classNamePrefix="grape-ui-select"
        isDisabled={isDisabled}
        isFocused={isFocused}
        isMulti={multiple}
        styles={styleOverrides(props)}
        {...removeSomeProps(props, propsToTrim)}
      >
        {children}
      </Creatable>
    );
  }
  return (
    <Select
      className="grape-ui-select-container"
      classNamePrefix="grape-ui-select"
      isDisabled={isDisabled}
      isFocused={isFocused}
      isMulti={multiple}
      styles={styleOverrides(props)}
      {...removeSomeProps(props, propsToTrim)}
    >
      {children}
    </Select>
  );
};
SelectComponent.propTypes = {
  children: PropTypes.any,
  isCreatable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  multiple: PropTypes.bool,
};
SelectComponent.defaultProps = {
  children: null,
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false,
};
