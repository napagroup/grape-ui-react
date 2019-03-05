import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { control, typography } from 'src/utils/styledHelpers';

const isArrayOptionsValue = value => !!value && Array.isArray(value);
const getDisplayValue = props => {
  const { value } = props;
  if (isArrayOptionsValue(value)) {
    const output = value.map(e => e.label).join(',');
    return output;
  }
  if (!!value && !!value.label) {
    return value.label;
  } if (typeof value === 'string') {
    return value;
  }
  return '';
};

const propsToTrim = [
  ...Object.keys(control.propTypes),
  ...Object.keys(typography.propTypes),
  'value',
];
export const PlainTextComponent = props => {
  const displayString = getDisplayValue(props);
  return (<div {...removeSomeProps(props, propsToTrim)}>{displayString}</div>);
};

PlainTextComponent.propTypes = {
  ...control.propTypes,
  ...typography.propTypes,
  value: PropTypes.any,
};

PlainTextComponent.defaultProps = {
  value: null,
};
