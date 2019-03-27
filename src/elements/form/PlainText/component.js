import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { control, spaceProps, typography } from 'src/utils/styledHelpers';

const isArrayOptionsValue = value => !!value && Array.isArray(value);
const getDisplayValue = props => {
  const { value } = props;
  if (isArrayOptionsValue(value)) {
    return value.map(e => e.label).join(',');
  }
  if (!!value && !!value.label) {
    return value.label;
  } if (typeof value === 'string') {
    return value;
  }
  return '';
};

const propsToTrim = [
  'labelText',
  ...Object.keys(control.propTypes),
  ...Object.keys(spaceProps.propTypes),
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
