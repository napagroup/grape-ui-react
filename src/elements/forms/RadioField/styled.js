import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxField } from '../CheckboxField';

const RadioField = props => (<CheckboxField {...props} />);

RadioField.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

RadioField.defaultProps = {
  type: 'radio',
};

const RadioInput = props => (<CheckboxField.Input {...props} />);

RadioInput.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

RadioInput.defaultProps = {
  type: 'radio',
};

RadioField.Input = RadioInput;

/** @component */
export { RadioField };
