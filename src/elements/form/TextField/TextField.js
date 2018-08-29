import React from 'react';
import PropTypes from 'prop-types';
import { withControlGroup } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough } from 'src/utils/componentHelpers';
import { withTextFieldComponentConvertor } from '.';

export const TextField = props => {
  const { controlId } = props;
  const overrides = {
    ...props,
  };
  const child = withTextFieldComponentConvertor(<div controlId={controlId} {...passThrough(TextField, overrides)} />);
  const ProtoTextField = withControlGroup(child);
  return <ProtoTextField {...overrides} />;
};

TextField.propTypes = {
  assistiveText: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: '',
};

