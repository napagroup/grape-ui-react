import React from 'react';
import PropTypes from 'prop-types';
import { control, typography } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.us'; // eslint-disable-line no-unused-vars
import TextareaAutosize from 'react-textarea-autosize';
import { cleaveOption, isCleaveInput } from './utils';

const propsToTrim = [
  'formStyle',
  'labelText',
  'plainText',
  'validationError',
  'currency',
  'email',
  'formatterOptions',
  'integer',
  'maxRows',
  'multiline',
  'numeric',
  'password',
  'phone',
  'plainText',
  'postalCode',
  ...Object.keys(control.propTypes),
  ...Object.keys(typography.propTypes),
];

const getInputType = props => {
  if (props.password) {
    return 'password';
  }
  if (props.email) {
    return 'email';
  }
  return 'text';
};

const getTabIndex = plainText => {
  return plainText ? '-1' : '0';
};

export const TextInputComponent = ({
  maxRows, multiline, plainText, ...props
}) => {
  if (isCleaveInput(props)) {
    return <Cleave autoComplete="no" options={cleaveOption(props)} readOnly={plainText} tabIndex={getTabIndex(plainText)} {...removeSomeProps(props, propsToTrim)} />;
  }
  if (multiline) {
    return (
      <>
        <div className="multiline-scroll-shield" />
        <TextareaAutosize
          maxRows={maxRows}
          readOnly={plainText}
          tabIndex={getTabIndex(plainText)}
          {...removeSomeProps(props, propsToTrim)}
        />
      </>
    );
  }
  return (
    <input readOnly={plainText} tabIndex={getTabIndex(plainText)} type={getInputType(props)} {...removeSomeProps(props, propsToTrim)} />
  );
};

TextInputComponent.propTypes = {
  email: PropTypes.bool,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  password: PropTypes.bool,
  plainText: PropTypes.bool,
};

TextInputComponent.defaultProps = {
  email: false,
  maxRows: 4,
  multiline: false,
  password: false,
  plainText: false,
};
