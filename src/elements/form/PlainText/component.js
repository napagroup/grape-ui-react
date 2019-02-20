import React from 'react';
import PropTypes from 'prop-types';

import { passThrough } from 'src/utils/componentHelpers';

import { control } from 'src/elements/form/ControlGroup/baseControlStyle';

import { typography } from 'src/elements/typography/textStyles';

const getDisplayValue = props => {
  const { value } = props;
  if (!!value && !!value.label) {
    return value.label;
  } else if (typeof value === 'string') {
    return value;
  }
  return '';
};

export const PlainTextComponent = props => {
  const displayString = getDisplayValue(props);
  return (<div {...passThrough(PlainTextComponent, props)}>{displayString}</div>);
};

PlainTextComponent.propTypes = {
  ...control.propTypes,
  ...typography.propTypes,
  value: PropTypes.any,
};

PlainTextComponent.defaultProps = {
  value: null,
};
