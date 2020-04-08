import {
  defaultControlStyles,
  resolveBoxShadow,
  resolveColor,
  resolveZIndex,
} from 'src/utils/styledHelpers';
import { getGlobalOverrides } from 'src/global-styles';

export const styleOverridesBase = ({ ...props }) => {
  const {
    menuElevation,
    menuZIndex,
    styleOverrides,
  } = props;
  const globalOverrides = getGlobalOverrides(props);
  const multiValueMargin = 2;
  const styleZIndex = menuZIndex || resolveZIndex(menuElevation, globalOverrides);
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
      ...styleOverrides.clearIndicator,
    }),
    control: () => ({
      border: '0',
      boxShadow: 'none',
      display: 'flex',
      minHeight: '0',
      ...styleOverrides.control,
    }),
    dropdownIndicator: provided => ({
      ...provided,
      padding: '0',
      ...styleOverrides.dropdownIndicator,
    }),
    indicatorsContainer: provided => ({
      ...provided,
      bottom: '0',
      justifyContent: 'flex-end',
      padding: '0',
      ...styleOverrides.indicatorsContainer,
    }),
    indicatorSeparator: () => ({
      display: 'none',
      ...styleOverrides.indicatorSeparator,
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
      zIndex: styleZIndex,
      ...styleOverrides.menu,
    }),
    menuPortal: provided => ({
      ...provided,
      zIndex: styleZIndex,
      ...styleOverrides.menuPortal,
    }),
    multiValue: () => ({
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      display: 'flex',
      fontSize: '80%',
      margin: multiValueMargin,
      padding: '4px',
      ...styleOverrides.multiValue,
    }),
    multiValueLabel: () => ({
      padding: '0 4px',
      ...styleOverrides.multiValueLabel,
    }),
    multiValueRemove: () => ({
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      ...styleOverrides.multiValueRemove,
    }),
    option: (styles, { isFocused, isSelected }) => ({
      background: resolveBackground({ isFocused, isSelected }),
      color: isFocused || isSelected ? resolveColor('white', globalOverrides) : 'inherit',
      padding: '8px 16px',
      ...styleOverrides.option,
    }),
    placeholder: () => ({
      color: resolveColor(defaultControlStyles.placeholderColor, globalOverrides),
      ...styleOverrides.placeholder,
    }),
    singleValue: () => ({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      ...styleOverrides.singleValue,
    }),
    valueContainer: (provided, { hasValue, isMulti }) => ({
      ...provided,
      flex: '1 1 0',
      flexWrap: isMulti ? 'wrap' : 'nowrap',
      margin: hasValue && isMulti ? multiValueMargin * -1.5 : null,
      padding: '0',
      ...styleOverrides.valueContainer,
    }),
  };
};
