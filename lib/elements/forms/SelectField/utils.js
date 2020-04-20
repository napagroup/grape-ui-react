"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.styleOverridesBase = void 0;

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

const styleOverridesBase = ({ ...props
}) => {
  const {
    menuElevation,
    menuZIndex,
    styleOverrides
  } = props;
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const multiValueMargin = 2;
  const styleZIndex = menuZIndex || (0, _styledHelpers.resolveZIndex)(menuElevation, globalOverrides);

  const resolveBackground = ({
    isFocused,
    isSelected
  }) => {
    let background = 'inherit';

    if (isFocused) {
      background = (0, _styledHelpers.resolveColor)('brandLinkHover', globalOverrides);
    } else if (isSelected) {
      background = (0, _styledHelpers.resolveColor)('brandLink', globalOverrides);
    }

    return background;
  };

  return {
    clearIndicator: provided => ({ ...provided,
      padding: '0',
      ...styleOverrides.clearIndicator
    }),
    control: () => ({
      border: '0',
      boxShadow: 'none',
      display: 'flex',
      minHeight: '0',
      ...styleOverrides.control
    }),
    dropdownIndicator: provided => ({ ...provided,
      padding: '0',
      ...styleOverrides.dropdownIndicator
    }),
    indicatorsContainer: provided => ({ ...provided,
      bottom: '0',
      justifyContent: 'flex-end',
      padding: '0',
      ...styleOverrides.indicatorsContainer
    }),
    indicatorSeparator: () => ({
      display: 'none',
      ...styleOverrides.indicatorSeparator
    }),
    input: styles => null,
    menu: provided => ({ ...provided,
      boxShadow: (0, _styledHelpers.resolveBoxShadow)(menuElevation, globalOverrides),
      left: '0',
      marginBottom: '0',
      marginTop: '2px',
      padding: '8px 0',
      position: 'absolute',
      width: '100%',
      zIndex: styleZIndex,
      ...styleOverrides.menu
    }),
    menuPortal: provided => ({ ...provided,
      zIndex: styleZIndex,
      ...styleOverrides.menuPortal
    }),
    multiValue: () => ({
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      display: 'flex',
      fontSize: '80%',
      margin: multiValueMargin,
      padding: '4px',
      ...styleOverrides.multiValue
    }),
    multiValueLabel: () => ({
      padding: '0 4px',
      ...styleOverrides.multiValueLabel
    }),
    multiValueRemove: () => ({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      ...styleOverrides.multiValueRemove
    }),
    option: (styles, {
      isFocused,
      isSelected
    }) => ({
      background: resolveBackground({
        isFocused,
        isSelected
      }),
      color: isFocused || isSelected ? (0, _styledHelpers.resolveColor)('white', globalOverrides) : 'inherit',
      padding: '8px 16px',
      ...styleOverrides.option
    }),
    placeholder: () => ({
      color: (0, _styledHelpers.resolveColor)(_styledHelpers.defaultControlStyles.placeholderColor, globalOverrides),
      ...styleOverrides.placeholder
    }),
    singleValue: () => ({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      ...styleOverrides.singleValue
    }),
    valueContainer: (provided, {
      hasValue,
      isMulti
    }) => ({ ...provided,
      flex: '1 1 0',
      flexWrap: isMulti ? 'wrap' : 'nowrap',
      margin: hasValue && isMulti ? multiValueMargin * -1.5 : null,
      padding: '0',
      ...styleOverrides.valueContainer
    })
  };
};

exports.styleOverridesBase = styleOverridesBase;