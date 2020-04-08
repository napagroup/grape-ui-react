import React from 'react';
import PropTypes from 'prop-types';
import {
  control,
  refType,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Select, { Creatable } from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import { styleOverridesBase } from './utils';

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
  'styleOverrides',
  'validationError',
];
export const SelectComponent = ({ children, ...props }) => {
  const {
    inputRef,
    isAsync,
    isCreatable,
    isDisabled,
    isFocused,
    multiple,
  } = props;
  const styles = styleOverridesBase(props);
  const trimmedProps = removeSomeProps(props, propsToTrim);
  if (isAsync) {
    if (isCreatable) {
      return (
        <AsyncCreatableSelect
          ref={inputRef}
          className="grape-ui-select-container"
          classNamePrefix="grape-ui-select"
          isDisabled={isDisabled}
          isFocused={isFocused}
          isMulti={multiple}
          styles={styles}
          {...trimmedProps}
          isClearable
        >
          {children}
        </AsyncCreatableSelect>
      );
    }
    return (
      <AsyncSelect
        ref={inputRef}
        className="grape-ui-select-container"
        classNamePrefix="grape-ui-select"
        isDisabled={isDisabled}
        isFocused={isFocused}
        isMulti={multiple}
        styles={styles}
        {...trimmedProps}
        isClearable
      >
        {children}
      </AsyncSelect>
    );
  }
  if (isCreatable) {
    return (
      <Creatable
        ref={inputRef}
        className="grape-ui-select-container"
        classNamePrefix="grape-ui-select"
        isDisabled={isDisabled}
        isFocused={isFocused}
        isMulti={multiple}
        styles={styles}
        {...trimmedProps}
      >
        {children}
      </Creatable>
    );
  }
  return (
    <Select
      ref={inputRef}
      className="grape-ui-select-container"
      classNamePrefix="grape-ui-select"
      isDisabled={isDisabled}
      isFocused={isFocused}
      isMulti={multiple}
      styles={styleOverridesBase(props)}
      {...trimmedProps}
    >
      {children}
    </Select>
  );
};
SelectComponent.propTypes = {
  children: PropTypes.any,
  inputRef: refType,
  isAsync: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  multiple: PropTypes.bool,
  styleOverrides: PropTypes.object,
};
SelectComponent.defaultProps = {
  children: null,
  inputRef: () => {},
  isAsync: false,
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false,
  styleOverrides: {},
};
